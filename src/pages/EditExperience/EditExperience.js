import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Grid,
  Box,
  Container,
  Paper,
  Typography,
  Switch,
  Button,
} from '@mui/material'
import QRCode from 'qrcode.react'
import { isMobile, isTablet } from 'react-device-detect'

import useExperienceStore from 'hooks/store/use-experience-store'
import useDialog from 'hooks/use-dialog'

import DeleteDialog from './components/DeleteDialog'
import AddMediaButton from './components/AddMediaButton'
import WelcomeDialog from './components/WelcomeDialog'
import ImageUploadDialog from './components/ImageUploadDialog'
import VideoUploadDialog from './components/VideoUploadDialog'
import AddImage from './components/AddImage'
import ExperienceForm from './components/ExperienceForm'
import { DeleteForever } from '@mui/icons-material'
import Loading from 'pages/Loading/Loading'
import GenerateTargetsDialog from './components/GenerateTargetsDialog'

const EditExperience = () => {
  const { isOpen, handleOpen, handleClose } = useDialog()
  const { selectExperience, updateExperience, experiences } =
    useExperienceStore()

  const { id } = useParams()

  const [targetError, setTargetError] = useState(null)

  const experience = selectExperience(id)
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

  const [showLinkForm, setShowLinkForm] = useState(!hideLinks)

  const handleShowLinks = e => {
    const checked = e.target.checked

    setShowLinkForm(checked)
    updateExperience({ id, hideLinks: !checked })
  }

  useEffect(() => {
    setShowLinkForm(!hideLinks)
  }, [hideLinks])

  const targetDialogIsOpen =
    !!videoUrl &&
    !!imageUrl &&
    !targetUrl &&
    !targetError &&
    !imageDialogIsOpen &&
    !videoDialogIsOpen

  console.log(targetUrl)

  return (
    <>
      <GenerateTargetsDialog
        open={targetDialogIsOpen}
        setTargetError={setTargetError}
      />
      <ImageUploadDialog
        open={imageDialogIsOpen}
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        submitImage={handleUpdateImage}
        onClose={() => setImageDialogIsOpen(false)}
        setTargetError={setTargetError}
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

      {!experience && <Loading />}
      {!!experience && (
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
                              Add a "call to action" button at the bottom of
                              your experience.
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
                          {/* <Box
                            position="absolute"
                            sx={{ display: isLoading ? 'block' : 'none' }}
                            color="text.secondary"
                          >
                            <CircularProgress color="inherit" />
                          </Box> */}
                          <QRCode
                            size={100}
                            id="qr"
                            value={experienceUrl}
                            fgColor={!targetUrl ? '#00000022' : '#000000'}
                          />
                        </Box>
                        <Typography
                          variant="h6"
                          color={!targetUrl ? 'text.disabled' : 'text.primary'}
                          pt={1}
                        >
                          <b>Preview</b>
                        </Typography>
                        <Typography
                          variant="body2"
                          color={!targetUrl ? 'text.disabled' : 'text.primary'}
                        >
                          {targetUrl
                            ? 'Publish your experience to test it out.'
                            : 'Add an image and a video to try it out'}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default EditExperience
