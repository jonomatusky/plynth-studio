import React, { useState, useEffect, useReducer } from 'react'
import Axios from 'axios'
import {
  Dialog,
  DialogTitle,
  Button,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material'
import { Upload, Close, Loop, VideoFile } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import LoadingButton from '@mui/lab/LoadingButton'
import useAlertStore from 'hooks/store/use-alert-store'
import { useRequest } from 'hooks/use-request'
import { useUserStore } from 'hooks/store/use-user-store'
import { usePlanStore } from 'hooks/store/use-plan-store'
import VideoJS from 'components/VideoJS'

const VideoUploadDialog = ({ submit, videoUrl, open, onClose }) => {
  const [existingVideoUrl, setExistingVideoUrl] = useState(videoUrl)

  const { user } = useUserStore()
  const { setError } = useAlertStore()

  useEffect(() => {
    setExistingVideoUrl(videoUrl)
  }, [videoUrl, open])

  const FileUpload = () => {
    const [videoLoading, setVideoLoading] = useState(false)

    const statusReducer = (state, newState) => {
      if (newState > state) {
        return newState
      } else {
        return state
      }
    }

    const [status, setStatus] = useReducer(statusReducer, 0)

    const { openPlans } = usePlanStore()

    const { request } = useRequest()

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      multiple: false,
      accept: 'video/mp4,video/quicktime',
      maxSize: (user.fileSizeLimit || 50) * 1024 * 1024,
      maxFiles: 1,
    })

    let file = acceptedFiles[0]

    let { name } = file || {}

    if ((file || {}).type === 'video/quicktime') {
      name = name.substring(0, name.lastIndexOf('.')) + '.mp4'
    }

    const uploadFile = async () => {
      setVideoLoading(true)

      const axios = Axios.create()
      delete axios.defaults.headers.put['Content-Type']
      axios.defaults.headers.put['Access-Control-Expose-Headers'] = 'ETag'

      let parts
      let uploadId
      let fileName

      let fileSize = file.size
      console.log('fileSize:', fileSize)
      const chunkSize = 1024 * 1024 * 10

      const partCount = Math.ceil(fileSize / chunkSize)

      try {
        const res = await request({
          url: '/uploads/multipart',
          method: 'POST',
          data: {
            partCount,
            fileType: 'video/mp4',
          },
        })

        parts = res.parts
        uploadId = res.uploadId
        fileName = res.fileName
      } catch (err) {
        setError({ message: 'Unable to upload your video. Please try again.' })
      }

      console.log(fileName)
      console.log(parts)

      const keys = Object.keys(parts)
      const promises = []

      for (const indexStr of keys) {
        const index = parseInt(indexStr)
        const start = index * chunkSize
        const end = (index + 1) * chunkSize
        const blob =
          index < keys.length ? file.slice(start, end) : file.slice(start)

        console.log(blob)

        promises.push(
          axios.put(parts[index], blob, {
            onUploadProgress: progressEvent => {
              if (keys.length === 1 || index !== keys.length - 1) {
                if (progressEvent.total) {
                  const uploadProgress = Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  )

                  setStatus(uploadProgress)
                }
              }
            },
          })
        )
      }

      console.log(promises)

      let resParts

      try {
        resParts = await Promise.all(promises)
        console.log(resParts)
      } catch (err) {
        console.log(err)
        setError({ message: 'Unable to upload your video. Please try again.' })
      }

      const partsList = resParts.map((part, index) => ({
        ETag: part.headers.etag,
        PartNumber: index + 1,
      }))

      try {
        await request({
          url: `/uploads/multipart/` + uploadId,
          method: 'PATCH',
          data: {
            fileName,
            parts: partsList,
          },
        })
        await submit(fileName)
      } catch (err) {
        console.log(err)
        setError({ message: 'Unable to upload your video. Please try again.' })
      }
    }

    const File = () => {
      return (
        <Box padding={3} textAlign="center">
          <VideoFile fontSize="large" />
          <Typography>{name}</Typography>
        </Box>
      )
    }

    return (
      <Box display="flex" flexWrap="wrap" width="568px">
        <Box
          height="360px"
          width="100%"
          backgroundColor="#00000010"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <div
            {...getRootProps()}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <input {...getInputProps()} />
            <Button
              color="secondary"
              sx={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                textTransform: 'none',
              }}
            >
              {videoLoading ? (
                <Box>
                  <CircularProgress color="inherit" />
                  <Typography color="secondary" variant="subtitle2">
                    Uploading... {status > 0 ? status + '%' : ''}
                  </Typography>
                </Box>
              ) : name ? (
                <File />
              ) : (
                <Box>
                  <Upload color="secondary" sx={{ fontSize: 40 }} />

                  <Typography>{`Upload a video.`}</Typography>
                  <Typography>{`Accepted file types: mp4, mov`}</Typography>
                  <Typography>{`Must be under ${user.sizeLimit}MB`}</Typography>
                </Box>
              )}
            </Button>
          </div>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          pt={2}
          pb={2}
        >
          <Box display="flex" flexWrap="no-wrap" alignItems="center">
            <Typography mr={1}>{`Need more space?`}</Typography>
            <Button onClick={openPlans}>Upgrade</Button>
          </Box>
          <LoadingButton
            variant="contained"
            onClick={uploadFile}
            disabled={!file}
            loading={videoLoading}
          >
            Upload
          </LoadingButton>
        </Box>
      </Box>
    )
  }

  const handleClose = () => {
    onClose()
  }

  const ContentUpload = () => {
    return (
      <>
        <DialogTitle>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box>Add a Video</Box>
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
            <FileUpload />
          </Box>
        </Box>
      </>
    )
  }

  const ContentReplace = () => {
    const videoJsOptions = {
      // lookup the options in the docs for more options
      autoplay: true,
      muted: true,
      loop: true,
      width: 568,
      height: 360,
      sources: [
        {
          src: existingVideoUrl,
          type: 'video/mp4',
        },
      ],
    }

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
              width="568px"
              backgroundColor="#00000010"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VideoJS options={videoJsOptions} />
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

  return (
    <Dialog open={open} onClose={handleClose}>
      {!existingVideoUrl ? <ContentUpload /> : <ContentReplace />}
    </Dialog>
  )
}

export default VideoUploadDialog