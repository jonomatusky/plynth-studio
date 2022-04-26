import React from 'react'
import {
  DialogTitle,
  DialogContent,
  Grid,
  Button,
  Typography,
  Box,
  Tooltip,
} from '@mui/material'
import { Close, Code, Upload } from '@mui/icons-material'

import useUserStore from 'hooks/store/use-user-store'

const VideoSelectScreen = ({ onSelect, onClose, videoType }) => {
  const { user } = useUserStore()

  const disableUpload =
    user.uploadedExperienceCount >= user.experienceLimit &&
    videoType !== 'videoFile'

  return (
    <>
      <DialogTitle>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box>Add a Video</Box>
          <Box>
            <Button
              endIcon={<Close />}
              onClick={onClose}
              variant="secondary"
              size="small"
            >
              Close
            </Button>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          height="360px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} textAlign="center">
              <Button
                onClick={() => onSelect('link')}
                variant="contained"
                color="secondary"
                sx={{ p: '16px' }}
                disableElevation
              >
                <Grid container maxWidth="100px">
                  <Grid item xs={12}>
                    <Code fontSize="large" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Link to video</Typography>
                  </Grid>
                </Grid>
              </Button>
              <Typography mt={1}>
                Add a link to a Youtube or Vimeo video.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center">
              <Tooltip
                title={
                  disableUpload
                    ? `You have reached your limit of ${user.experienceLimit} uploaded files. Upgrade your account to increase your limit.`
                    : ''
                }
              >
                <Box textAlign="center">
                  <Button
                    onClick={() => onSelect('upload')}
                    variant="contained"
                    color="secondary"
                    sx={{ p: '16px' }}
                    disableElevation
                    disabled={disableUpload}
                  >
                    <Grid container maxWidth="100px">
                      <Grid item xs={12}>
                        <Upload fontSize="large" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>Upload a video</Typography>
                      </Grid>
                    </Grid>
                  </Button>
                  <Box color={disableUpload ? 'text.disabled' : null}>
                    <Typography mt={1} color="inherit">
                      Upload a video file. Must be a .mp4 or .mov
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </>
  )
}

export default VideoSelectScreen
