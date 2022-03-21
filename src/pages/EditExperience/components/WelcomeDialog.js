import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material'

import {
  Image,
  Close,
  VideoCameraBack,
  QrCodeScanner,
} from '@mui/icons-material'

const WelcomeDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" transitionDuration={0}>
      <DialogTitle>
        <Box width="100%" display="flex" justifyContent="space-between" mt={2}>
          <Box>Welcome to Plynth</Box>
          <Box>
            <Button
              onClick={onClose}
              variant="secondary"
              sx={{ padding: 0, minWidth: 0 }}
            >
              <Close />
            </Button>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box p={3} width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                Plynth makes it easy to bring your photos and artwork to life.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <VideoCameraBack sx={{ fontSize: 80 }} color="primary" />
              <Typography variant="h6">Step 1</Typography>
              <Typography variant="body2">
                Upload a video and choose whether to include a button link.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Image sx={{ fontSize: 80 }} color="primary" />
              <Typography variant="h6">Step 2</Typography>
              <Typography variant="body2">
                Add your target image. Upload a file or choose a frame from your
                video.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <QrCodeScanner sx={{ fontSize: 80 }} color="primary" />
              <Typography variant="h6">Step 3</Typography>
              <Typography variant="body2">
                Try it out by scanning the QR code in the upper right corner.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default WelcomeDialog
