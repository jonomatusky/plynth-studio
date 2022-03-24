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

const Preview = () => {
  const { request, status } = useRequest()
  const { id } = useParams()
  const [experience, setExperience] = useState(null)

  useEffect(() => {
    const get = async () => {
      try {
        const response = await request({
          url: `/experiences/${id}`,
          method: 'GET',
        })
        const { experience } = response || {}
        setExperience(experience)
      } catch (err) {
        // handled by request
      }
    }
    if (status === 'idle') {
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
                          This experince was created using Plynth. Scan the QR
                          code to try it out before you print.
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
                        <Image height="72px" src={scanImage} />
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
                        <Image height="72px" src={experienceImage} />
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
                        style={{
                          height: '640px',
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
