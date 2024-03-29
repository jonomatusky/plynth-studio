import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Box, Container, Paper, Typography } from '@mui/material'
import QRCode from 'qrcode.react'
import { useRequest } from 'hooks/use-request'
import Loading from 'pages/Loading/Loading'
import Image from 'components/Image'
import arrow from 'assets/images/arrow.svg'
import scanImage from 'assets/images/scan.svg'
import experienceImage from 'assets/images/experience.svg'
import CopyButton from 'components/CopyButton'

const { REACT_APP_PUBLIC_URL } = process.env

const Preview = () => {
  const { request, status } = useRequest()
  const { id } = useParams()
  const [experience, setExperience] = useState(null)

  useEffect(() => {
    const get = async () => {
      try {
        const response = await request({
          url: `/experiences/${id}`,
        })
        const { experience } = response || {}
        setExperience(experience)
        console.log(response)
      } catch (err) {
        // handled by request
      }
    }
    if (status === 'idle') {
      console.log('getting experience')
      get()
    }
  }, [id, request, status])

  const { targetUrl, objects, experienceUrl } = experience || {}
  const object = (objects || [])[0] || {}
  const { posterUrl: imageUrl, assetUrl: videoUrl } = object

  // const previewPage = !!media.id ? `/preview/${id}/${media.id}` : null

  return (
    <>
      {(!experience || !targetUrl || !videoUrl) && <Loading />}
      {!!experience && !!targetUrl && !!videoUrl && (
        <Container maxWidth="lg">
          <Grid container justifyContent="center" spacing={2} pt={2}>
            <Grid
              item
              xs={12}
              md={5}
              container
              spacing={2}
              alignContent="flex-start"
            >
              <Grid item xs={12} sx={{ display: { xs: 'flex', sm: 'none' } }}>
                <Paper>
                  <Box padding={2} pb={3}>
                    <Grid container spacing={2} width="100%">
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          color="primary"
                          textAlign="center"
                        >
                          <b>Switch to Desktop</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography textAlign="center">
                          You're viewing the preview page for a Plynth Augmented
                          Reality experience. This page is meant to be opened on
                          your deskptop, so that you can scan the QR below to
                          test out the experience on your mobile device.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} pt={1}>
                        <Typography textAlign="center">
                          <b>
                            Please copy switch to your desktop to get started.
                          </b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <CopyButton
                          fullWidth
                          variant="contained"
                          text={REACT_APP_PUBLIC_URL + '/preview/' + id}
                        >
                          Copy Page Url
                        </CopyButton>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box padding={4} pb={6}>
                    <Grid container spacing={2} width="100%">
                      <Grid item xs={12}>
                        <Typography variant="h4" color="primary">
                          <b>Preview</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          Preview your experience by bringing this image to life
                          in Augmented Reality. Scan the code to get started.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} container justifyContent="center">
                        <Grid item xs={3}></Grid>
                        <Grid item xs={6} container justifyContent="center">
                          <Box m={1} mb={0} textAlign="center">
                            <QRCode size={160} id="qr" value={experienceUrl} />
                            {/* <CopyButton /> */}
                          </Box>
                        </Grid>
                        <Grid item xs={3} textAlign="center" pt={6}>
                          <Box
                            textAlign="center"
                            sx={{
                              display: { xs: 'none', lg: 'block' },
                            }}
                          >
                            <Image src={arrow} style={{ width: '100%' }} />
                            <Typography variant="h6">
                              <b>Try Me</b>
                            </Typography>{' '}
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        spacing={2}
                        mt={1}
                      >
                        <Grid item xs={12} textAlign="center">
                          <Image height="72px" src={scanImage} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            1. Scan the QR code with your mobile device
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        spacing={2}
                        mt={1}
                      >
                        <Grid item xs={12} textAlign="center">
                          <Image height="72px" src={experienceImage} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            2. Hold your device over the image to the right{' '}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
              p={2}
              // container
              // justifyContent="flex-end"
              // alignContent="stretch"
              // alignItems="stretch"
              // spacing={2}
            >
              <Box display="flex">
                <Box flexGrow={1}>
                  <Paper>
                    <Box
                      p={1}
                      display="flex"
                      justifyContent="center"
                      width="100%"
                    >
                      <Image
                        src={imageUrl}
                        height="640px"
                        style={{
                          maxWidth: '100%',
                          objectFit: 'contain',
                        }}
                      />
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

export default Preview
