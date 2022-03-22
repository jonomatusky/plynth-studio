import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Grid,
  Box,
  Container,
  Paper,
  Typography,
  Switch,
  CircularProgress,
  Button,
} from '@mui/material'
import QRCode from 'qrcode.react'
import { isMobile, isTablet } from 'react-device-detect'

import useExperienceStore from 'hooks/store/use-experience-store'
import useDialog from 'hooks/use-dialog'

import DeleteDialog from './components/DeleteDialog'
import AddMediaButton from './components/AddMediaButton'
import WelcomeDialog from './components/WelcomeDialog'
import { useRequest } from 'hooks/use-request'
import { useAlertStore } from 'hooks/store/use-alert-store'
import { loadImgAsync } from 'util/imageHandling'
import ImageUploadDialog from './components/ImageUploadDialog'
import VideoUploadDialog from './components/VideoUploadDialog'
import AddImage from './components/AddImage'
import ExperienceForm from './components/ExperienceForm'
import { DeleteForever } from '@mui/icons-material'

const EditExperience = () => {
  const { isOpen, handleOpen, handleClose } = useDialog()
  const { selectExperience, updateExperience, experiences, updateStatus } =
    useExperienceStore()
  const { setError } = useAlertStore()
  const { id } = useParams()

  const experience = selectExperience(id) || {}
  const { targetUrl, objects, hideLinks, experienceUrl } = experience || {}
  const object = (objects || [])[0] || {}
  const { posterUrl: imageUrl, assetUrl: videoUrl } = object

  // const previewPage = !!media.id ? `/preview/${id}/${media.id}` : null

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

  const [videoDialogIsOpen, setVideoDialogIsOpen] = useState(false)
  const [imageDialogIsOpen, setImageDialogIsOpen] = useState(false)

  // const showTooltips =
  //   showOnboarding &&
  //   !welcomeDialogIsOpen &&
  //   !videoDialogIsOpen &&
  //   !imageDialogIsOpen

  const handleUpdateImage = ({ filepath, width, height }) => {
    let newObject = { ...object }
    newObject.poster = filepath
    newObject.width = width
    newObject.height = height

    updateExperience({ id, target: null, objects: [newObject] })
  }

  const handleUpdateVideo = video => {
    let newObject = { ...object }
    newObject.asset = video

    updateExperience({ id, objects: [newObject] })
  }

  useEffect(() => {
    if (
      imageUrl &&
      !targetUrl &&
      updateStatus === 'idle' &&
      !isLoading &&
      !videoDialogIsOpen &&
      !imageDialogIsOpen
    ) {
      setIsLoading(true)
      const getImageTargets = async () => {
        try {
          const response = await request({
            url: imageUrl,
            responseType: 'blob',
          })

          const blob = await response
          const src = URL.createObjectURL(blob)

          let img = await loadImgAsync(src)
          URL.revokeObjectURL(src)

          let compiler

          try {
            compiler = new window.MINDAR.IMAGE.Compiler()
            await compiler.compileImageTargets([img], progress => {
              // console.log(progress.toFixed(0))
              return
              // setPercent(progress.toFixed(0))
            })
          } catch (err) {
            console.log(err)
          }

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

          await updateExperience({ id, target: filepath })
          setIsLoading(false)
        } catch (err) {
          console.log(err)
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
    imageUrl,
    targetUrl,
    id,
    request,
    setError,
    updateExperience,
    updateStatus,
    isLoading,
    imageDialogIsOpen,
    videoDialogIsOpen,
  ])

  const [showLinkForm, setShowLinkForm] = useState(!hideLinks)

  const handleShowLinks = e => {
    const checked = e.target.checked

    setShowLinkForm(checked)
    updateExperience({ id, hideLinks: !checked })
  }

  useEffect(() => {
    setShowLinkForm(!hideLinks)
  }, [hideLinks])

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

      <DeleteDialog id={id} open={isOpen} onClose={handleClose} />

      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2} pt={2}>
          <Grid
            item
            xs={12}
            md={4}
            container
            spacing={2}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Paper>
                <Box padding={3}>
                  <Grid container spacing={1}>
                    {/* <Grid item xs={12}>
                        <Typography variant="h5">
                          <b>Video</b>
                        </Typography>
                      </Grid> */}
                    <Grid item xs={12}>
                      <AddMediaButton
                        mediaType="video"
                        videoSrc={videoUrl}
                        imageSrc={imageUrl}
                        // showTooltips={showTooltips}
                        handleClick={() => setVideoDialogIsOpen(true)}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Box padding={3} pt={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box display="flex">
                        <Box pt={1}>
                          <Typography>
                            <b>Include a Button</b>
                          </Typography>
                          <Typography fontSize={14}>
                            Add a "call to action" button at the bottom of your
                            experience.
                          </Typography>
                        </Box>
                        <Switch
                          checked={showLinkForm}
                          onChange={handleShowLinks}
                        />
                      </Box>
                    </Grid>

                    {showLinkForm && (
                      <Grid item xs={12}>
                        <ExperienceForm experience={experience} />
                      </Grid>
                    )}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Box color="text.secondary">
                <Button
                  endIcon={<DeleteForever />}
                  onClick={handleOpen}
                  fullWidth
                  color="inherit"
                >
                  Delete Experience
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            // container
            // justifyContent="flex-end"
            // alignContent="stretch"
            // alignItems="stretch"
            // spacing={2}
          >
            <Box display="flex">
              <Box flexGrow={1}>
                <Paper>
                  <Box padding={3}>
                    <Grid container spacing={2} justifyContent="center">
                      {/* <Grid item xs={12}>
                        <Typography variant="h5">
                          <b>Target Image</b>
                        </Typography>
                      </Grid> */}
                      <Grid item xs={12}>
                        <AddImage
                          imageSrc={imageUrl}
                          videoSrc={videoUrl}
                          // showTooltips={showTooltips}
                          handleClick={() => setImageDialogIsOpen(true)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Box>

              <Box
                flexGrow={0}
                pl={2}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <Paper>
                  <Box padding={2}>
                    <Box width="100px">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          position="absolute"
                          sx={{ display: isLoading ? 'block' : 'none' }}
                          color="text.secondary"
                        >
                          <CircularProgress color="inherit" />
                        </Box>
                        <QRCode
                          size={100}
                          id="qr"
                          value={experienceUrl}
                          fgColor={
                            isLoading || !imageUrl || !videoUrl
                              ? '#00000022'
                              : '#000000'
                          }
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        color={
                          isLoading || !imageUrl || !videoUrl
                            ? 'text.disabled'
                            : 'text.primary'
                        }
                        pt={1}
                      >
                        <b>Preview</b>
                      </Typography>
                      <Typography
                        variant="body2"
                        color={
                          isLoading || !imageUrl || !videoUrl
                            ? 'text.disabled'
                            : 'text.primary'
                        }
                      >
                        Scan the QR code and hold your phone up to the image.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
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
