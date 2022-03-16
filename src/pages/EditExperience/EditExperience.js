import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Grid, Box, Container, Button, Paper, Typography } from '@mui/material'
import {
  Link as LinkIcon,
  People,
  PhoneIphone,
  VideoCameraBack,
  Download,
  FilterNone,
  ArrowForward,
  Computer,
} from '@mui/icons-material'
import QRCode from 'qrcode.react'
import copy from 'copy-to-clipboard'
import { isMobile, isTablet } from 'react-device-detect'

import useExperienceStore from 'hooks/store/use-experience-store'

import AddMediaButton from './components/AddMediaButton'
import WelcomeDialog from './components/WelcomeDialog'
import { useRequest } from 'hooks/use-request'
import { useAlertStore } from 'hooks/store/use-alert-store'
import { loadImgAsync } from 'util/imageHandling'
import DownloadQR from 'components/DownloadQr'
import ImageUploadDialog from './components/ImageUploadDialog'
import VideoUploadDialog from './components/VideoUploadDialog'

const { REACT_APP_PUBLIC_URL } = process.env

const EditExperience = () => {
  const { selectExperience, updateExperience, experiences, updateStatus } =
    useExperienceStore()
  const { setError } = useAlertStore()
  const { id } = useParams()
  const experiencePage = !!id ? REACT_APP_PUBLIC_URL + '/p/' + id : null

  const experience = selectExperience(id)
  const { targetUrl, objects } = experience
  const object = (objects || [])[0] || {}
  const { posterUrl: imageUrl, assetUrl: videoUrl } = object

  // const previewPage = !!media.id ? `/preview/${id}/${media.id}` : null

  const handleUpdateExperience = ({ name, href, label, color }) => {
    const links = [
      {
        href,
        label,
        color,
      },
    ]

    updateExperience({ id, name, links })
  }

  const DisplayCard = () => {
    return (
      <Box
        backgroundColor="white"
        border="2px solid #ddd"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={6}
        sx={{
          transform: 'rotate(3deg)',
          width: { xs: '350px', lg: '450px' },
        }}
        mr={2}
        boxShadow="5px 5px 15px #00000040"
        position="relative"
      >
        {!imageUrl && (
          <Box color="#dddddd" textAlign="center">
            <VideoCameraBack color="inherit" sx={{ fontSize: 100 }} />
            <Typography>
              <b>Your Preview Here</b>
            </Typography>
          </Box>
        )}
        {imageUrl && (
          <img
            src={imageUrl}
            width="100%"
            height="100%"
            alt="preview"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 10,
            }}
          />
        )}
      </Box>
    )
  }

  const showOnboarding = experiences.length === 1 && !isMobile && !isTablet
  const showWelcomeDialogAtStart =
    showOnboarding && !imageUrl && !videoUrl && !targetUrl

  const [welcomeDialogIsOpen, setWelcomeDialogIsOpen] = useState(
    showWelcomeDialogAtStart
  )

  useEffect(() => {
    if (showWelcomeDialogAtStart) {
      setWelcomeDialogIsOpen(true)
    }
  }, [showWelcomeDialogAtStart])

  const [isLoading, setIsLoading] = useState(false)
  // const [percent, setPercent] = useState(0)

  const { request } = useRequest()

  const CopyButton = () => {
    const [isCopied, setIsCopied] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => setIsCopied(false), 2000)
      return () => clearTimeout(timer)
    }, [isCopied])

    const handleCopy = () => {
      setIsCopied(true)
      copy(experiencePage)
    }

    return (
      <Button
        size="small"
        color="secondary"
        endIcon={<FilterNone />}
        onClick={handleCopy}
      >
        {isCopied ? 'Copied!' : 'Copy Link'}
      </Button>
    )
  }

  const [videoDialogIsOpen, setVideoDialogIsOpen] = useState(false)
  const [imageDialogIsOpen, setImageDialogIsOpen] = useState(false)

  const showTooltips =
    showOnboarding &&
    !welcomeDialogIsOpen &&
    !videoDialogIsOpen &&
    !imageDialogIsOpen

  const handleUpdateImage = image => {
    let newObject = { ...object }
    newObject.poster = image

    updateExperience({ id, objects: [newObject] })
  }

  const handleUpdateVideo = video => {
    let newObject = { ...object }
    newObject.asset = video

    updateExperience({ id, objects: [newObject] })
  }

  useEffect(() => {
    if (imageUrl && videoUrl && updateStatus === 'idle' && !isLoading) {
      const getImageTargets = async () => {
        setIsLoading(true)

        try {
          const response = await request({
            url: imageUrl,
            responseType: 'blob',
          })

          const blob = response.data
          const src = await URL.createObjectURL(blob)

          let img = await loadImgAsync(src)
          URL.revokeObjectURL(src)

          const compiler = new window.MINDAR.IMAGE.Compiler()
          await compiler.compileImageTargets(
            [img]
            // , progress => {setPercent(progress.toFixed(0))}
          )

          const exportedBuffer = await compiler.exportData()
          var targetBlob = new Blob([exportedBuffer])
          var targetFile = new File([targetBlob], `${id}-targets.mind`)

          let { signedUrl, filepath } = await request({
            url: '/uploads/sign-s3',
            method: 'POST',
            data: {
              fileName: `${id}-targets`,
              fileType: 'application/mind',
            },
          })

          await request({
            url: signedUrl,
            method: 'PUT',
            data: targetFile,
            timeout: 100000,
          })

          await updateExperience({ target: filepath })
          setIsLoading(false)
        } catch (err) {
          setError({
            message:
              'Sorry, there was an error creating your experience. Please try again.',
          })
          setIsLoading(false)
        }
      }

      getImageTargets()
    }
  }, [
    videoUrl,
    imageUrl,
    targetUrl,
    id,
    request,
    setError,
    updateExperience,
    updateStatus,
    isLoading,
  ])

  return (
    <>
      <ImageUploadDialog
        open={imageDialogIsOpen}
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        submitImage={handleUpdateImage}
        onClose={() => setImageDialogIsOpen(false)}
      />
      <VideoUploadDialog
        open={videoDialogIsOpen}
        videoUrl={videoUrl}
        submit={handleUpdateVideo}
        onClose={() => setVideoDialogIsOpen(false)}
      />

      {/* <BarEditPiece previewPageUrl={targets ? previewPage : null} /> */}
      <WelcomeDialog
        open={welcomeDialogIsOpen}
        onClose={() => setWelcomeDialogIsOpen(false)}
      />
      <Box
        height="calc(100vh - 48px)"
        width="100%"
        overflow="auto"
        display="flex"
        alignContent="center"
      >
        <Container disableGutters maxWidth="lg">
          <Grid container justifyContent="flex-start">
            <Grid
              item
              sm={12}
              container
              justifyContent="center"
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <Grid item mt={2} xs={11}>
                <Paper>
                  <Box padding={2}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item xs={12} textAlign="center">
                        <Computer sx={{ fontSize: 60 }} color="primary" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" textAlign="center">
                          Switch to Desktop
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          Please visit plynth.com on your computer to create
                          your first interactive experience. After you create
                          it, you can return to your mobile device to try it
                          out.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} pb={2} mt={2}>
                        <Button
                          variant="contained"
                          component={Link}
                          to="/admin/pieces"
                          fullWidth
                        >
                          Go Home
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              item
              sm={12}
              md={7}
              container
              justifyContent="center"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Grid item xs={11} lg={8}>
                <Box mt={4} mb={4}>
                  <Paper>
                    <Box padding={4} pb={2}>
                      <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        width="100%"
                        flexWrap="wrap"
                      >
                        <Box
                          width="100%"
                          display="flex"
                          justifyContent="space-around"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <AddMediaButton
                            mediaType="video"
                            // updateMedia={handleUpdateMedia}
                            // updateMedia={handleUpdateVideo}
                            videoSrc={videoUrl}
                            imageSrc={imageUrl}
                            showTooltips={showTooltips}
                            handleClick={() => setVideoDialogIsOpen(true)}
                          />

                          <LinkIcon
                            fontSize="large"
                            color={targetUrl ? 'primary' : 'secondary'}
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                          />

                          <AddMediaButton
                            mediaType="image"
                            // updateMedia={handleUpdateMedia}
                            imageSrc={imageUrl}
                            videoSrc={videoUrl}
                            showTooltips={showTooltips}
                            handleClick={() => setImageDialogIsOpen(true)}
                          />
                        </Box>
                        <Box
                          width="100%"
                          color={targetUrl ? 'text.primary' : '#cccccc'}
                          sx={{ display: { xs: 'none', md: 'flex' } }}
                        >
                          <Box flexGrow={1} display="flex" flexWrap="wrap">
                            <Box
                              flexGrow={1}
                              display="flex"
                              alignItems="flex-start"
                            >
                              <Box
                                minWidth="60px"
                                textAlign="center"
                                display="flex"
                                justifyContent="center"
                                pt="6px"
                              >
                                <PhoneIphone
                                  sx={{ fontSize: 60 }}
                                  color="inherit"
                                />
                              </Box>
                              <Box flexGrow={1}>
                                <Typography variant="h5" color="inherit">
                                  <b>Try it out</b>
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                  Scan the QR code and hold your phone up to the
                                  image to the right.
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              flexGrow={1}
                              display="flex"
                              alignItems="flex-start"
                              mt={1}
                            >
                              <Box
                                minWidth="60px"
                                textAlign="center"
                                display="flex"
                                justifyContent="center"
                              >
                                <People sx={{ fontSize: 40 }} color="inherit" />
                              </Box>
                              <Box flexGrow={1}>
                                <Typography variant="h6" color="inherit">
                                  Share with a friend
                                </Typography>
                                <Typography variant="body2" color="inherit">
                                  Send a link to the preview page so they can
                                  try it out themselves.
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              flexGrow={1}
                              display="flex"
                              alignItems="flex-start"
                              mt={1}
                            >
                              <Box
                                minWidth="52px"
                                textAlign="center"
                                display="flex"
                                justifyContent="center"
                              ></Box>
                              {/* <Box flexGrow={1}>
                                  <Typography>
                                    <Button
                                      sx={{ textTransform: 'none' }}
                                      endIcon={<Launch />}
                                      color="inherit"
                                      href={previewPage}
                                      target="_blank"
                                      disabled={!targets}
                                    >
                                      View Preview Page
                                    </Button>
                                  </Typography>
                                </Box> */}
                            </Box>
                          </Box>
                          <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="flex-start"
                            flexWrap="wrap"
                            height="100%"
                            ml={1}
                          >
                            <Box width="120px" height="120px" m={1} mb={0}>
                              <QRCode
                                size={120}
                                id="qr"
                                value={experiencePage}
                              />
                            </Box>
                            {targetUrl && (
                              <>
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  alignItems="center"
                                  pt={1}
                                >
                                  <Typography>
                                    <b>Scan to try</b>
                                  </Typography>
                                  <ArrowForward fontSize="small" />
                                </Box>
                                <CopyButton />
                              </>
                            )}
                          </Box>
                        </Box>
                        <Box
                          width="100%"
                          display="flex"
                          justifyContent="center"
                        >
                          <Box
                            width="400px"
                            mt={1}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Typography
                              variant="caption"
                              textAlign="center"
                              mt={2}
                            >
                              Ready to print? Download the QR code to include in
                              your designs.
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          width="100%"
                          display="flex"
                          justifyContent="center"
                        >
                          <Box width="320px" mt={1}>
                            <DownloadQR qrValue={experiencePage} fileName={id}>
                              <Button
                                variant="contained"
                                fullWidth
                                endIcon={<Download />}
                              >
                                Download QR Code
                              </Button>
                            </DownloadQR>
                          </Box>
                        </Box>
                        <Box width="320px" mb={1} mt={1}>
                          <Button
                            fullWidth
                            endIcon={<Download />}
                            href={imageUrl}
                          >
                            Download Artwork
                          </Button>
                        </Box>
                        {/* <Box width="320px" mt={3} mb={1}>
                            <Button variant="contained" fullWidth disabled>
                              <b>Download Print Files</b>
                            </Button>
                          </Box>
                          <Box color="#cccccc">
                            <Typography variant="caption">
                              Need help printing? Check out our list of{' '}
                              <u>local and national printers</u>
                            </Typography>
                          </Box> */}
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <DisplayCard />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <Dialog
        onClose={handleRemoveClose}
        aria-labelledby="remove-dialog-title"
        open={removeDialogIsOpen}
      >
        <DialogTitle id="remove-dialog-title">Remove Card</DialogTitle>
        <DialogContent>
          Are you sure you want to remove this card? This cannot be undone.
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleRemoveClose}>Cancel</MuiButton>
          <MuiButton onClick={handleDeleteCard}>Remove</MuiButton>
        </DialogActions>
      </Dialog> */}
    </>
  )
}

export default EditExperience
