import React from 'react'
import {
  DialogTitle,
  DialogContent,
  Grid,
  Button,
  Typography,
  Box,
} from '@mui/material'
import { Close, Code, Upload } from '@mui/icons-material'

const VideoSelectScreen = ({ onSelect, onClose }) => {
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
          <Grid container>
            <Grid item xs={6} textAlign="center">
              <Button onClick={() => onSelect('link')}>
                <Grid container>
                  <Grid item xs={12}>
                    <Code fontSize="large" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Link to video</Typography>
                  </Grid>
                </Grid>
              </Button>
              <Typography>Add a link to a Youtube or Vimeo video.</Typography>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <Button onClick={() => onSelect('upload')}>
                <Grid container>
                  <Grid item xs={12}>
                    <Upload fontSize="large" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Upload a video</Typography>
                  </Grid>
                </Grid>
              </Button>
              <Typography>
                Upload a video file. Must be a .mp4 or .mov
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </>
  )
}

export default VideoSelectScreen
