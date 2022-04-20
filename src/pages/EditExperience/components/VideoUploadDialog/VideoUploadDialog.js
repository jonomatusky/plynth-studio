import React, { useState, useEffect } from 'react'
import { Dialog } from '@mui/material'
import 'react-image-crop/dist/ReactCrop.css'
import VideoUploadScreen from './VideoUploadScreen'
import VideoPreviewScreen from './VideoPreviewScreen'
import VideoSelectScreen from './VideoSelectScreen'

const VideoUploadDialog = ({ submit, videoType, videoUrl, open, onClose }) => {
  const controller = new AbortController()

  const [existingVideoUrl, setExistingVideoUrl] = useState(videoUrl)
  const [method, setMethod] = useState(null)

  useEffect(() => {
    setExistingVideoUrl(videoUrl)
  }, [videoUrl, open])

  const handleClose = () => {
    controller.abort('user cancelled')
    setMethod(null)
    onClose()
  }

  const handleSelect = method => {
    setMethod(method)
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      {!!existingVideoUrl ? (
        <VideoPreviewScreen
          handleClose={handleClose}
          existingVideoUrl={existingVideoUrl}
          setExistingVideoUrl={setExistingVideoUrl}
        />
      ) : method === 'upload' ? (
        <VideoUploadScreen
          submit={submit}
          controller={controller}
          handleClose={handleClose}
          setMethod={setMethod}
        />
      ) : method === 'link' ? (
        <></>
      ) : (
        <VideoSelectScreen onSelect={handleSelect} onClose={handleClose} />
      )}
    </Dialog>
  )
}

export default VideoUploadDialog
