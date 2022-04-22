import React from 'react'
import { DialogTitle, Button, Box } from '@mui/material'
import { Close, Loop } from '@mui/icons-material'
import 'react-image-crop/dist/ReactCrop.css'
import ReactPlayer from 'react-player'

const VideoPreviewScreen = ({
  handleClose,
  setExistingVideoUrl,
  existingVideoUrl,
}) => {
  const handleReplace = () => {
    setExistingVideoUrl(null)
  }

  return (
    <>
      <DialogTitle>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box>Current Video</Box>
          <Box>
            <Button
              endIcon={<Close />}
              onClick={handleClose}
              variant="secondary"
              size="small"
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </DialogTitle>
      <Box width="100%" display="flex">
        <Box width="100%" pr={2} pl={2}>
          <Box
            height="360px"
            backgroundColor="#00000010"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ReactPlayer
              url={existingVideoUrl}
              loop
              muted
              playing={true}
              height="360px"
              preload="none"
              crossOrigin="anonymous"
            />
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        p={2}
        color="text.secondary"
      >
        <Button color="inherit" endIcon={<Loop />} onClick={handleReplace}>
          Replace
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Done
        </Button>
      </Box>
    </>
  )
}

export default VideoPreviewScreen
