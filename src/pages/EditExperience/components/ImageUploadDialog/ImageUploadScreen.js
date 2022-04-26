import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  DialogTitle,
  DialogActions,
  Button,
  Box,
  Typography,
  Slider,
  Tooltip,
} from '@mui/material'
import { Upload, FilterFrames, Close, Crop } from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css'
import OptionButton from './OptionButton'

const FileUpload = ({ setImageToCrop }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => {
        let imageSrc = URL.createObjectURL(file)

        const img = new Image()
        img.onload = function () {
          const height = this.height
          const width = this.width
          setImageToCrop({ src: imageSrc, width, height })
        }

        img.src = imageSrc
      })
    },
    [setImageToCrop]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: 'image/jpeg, image/jpg, image/png',
  })

  return (
    <div
      {...getRootProps()}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <input {...getInputProps()} />
      <Box color="text.secondary" height="100%">
        <Button
          color="inherit"
          sx={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textTransform: 'none',
          }}
        >
          <Box>
            <Upload color="text.secondary" sx={{ fontSize: 40 }} />
            <Typography>Drop here or click to select</Typography>
          </Box>
        </Button>
      </Box>
    </div>
  )
}

const ImageUploadScreen = ({
  videoUrl,
  videoType,
  setImageToCrop,
  imageToCrop,
  handleClose,
}) => {
  const disableSelectFrame = !videoUrl || videoType !== 'videoFile'
  const [value, setValue] = useState(disableSelectFrame ? 1 : 0)

  const videoRef = useRef()
  const [videoDuration, setVideoDuration] = useState()

  const duration = videoRef.current ? videoRef.current.duration : null

  useEffect(() => {
    if (!isNaN(duration)) {
      setVideoDuration(duration)
    }
  }, [duration])

  useEffect(() => {
    if (!videoUrl) {
      setValue(0)
    }
  }, [videoUrl])

  const TimeSlider = ({ onChange }) => {
    const [sliderValue, setSliderValue] = useState(0)

    const handleChangeTime = (e, value) => {
      setSliderValue(value)
      onChange(value)
    }

    return (
      <>
        {!!videoDuration && !!videoUrl && (
          <Slider
            value={sliderValue}
            onChange={handleChangeTime}
            min={0}
            max={Math.round(videoDuration * 30)}
            step={1}
          />
        )}
      </>
    )
  }

  const handleChangeTime = value => {
    if (videoRef.current) {
      videoRef.current.currentTime = value / 30
    }
  }

  const getFrame = () => {
    // const video = document.getElementById('piece-video')
    const video = videoRef.current
    const format = 'jpeg'
    const quality = 0.92

    var canvas = document.createElement('CANVAS')

    const width = video.videoWidth
    const height = video.videoHeight

    canvas.width = width
    canvas.height = height

    canvas.getContext('2d').drawImage(video, 0, 0)

    var dataUri = canvas.toDataURL('image/' + format, quality)

    setImageToCrop({ src: dataUri, width, height })

    canvas = null
  }

  return (
    <>
      <DialogTitle>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Box>Add an Image</Box>
          <Box>
            <Button
              endIcon={<Close />}
              onClick={handleClose}
              variant="secondary"
              size="small"
            >
              Close
            </Button>
          </Box>
        </Box>
      </DialogTitle>

      <Box width="100%" display="flex">
        <Box width="144px" pb={2} display="flex" flexDirection="column">
          <Tooltip
            title={disableSelectFrame ? 'Upload a video to select a frame' : ''}
            placement="right"
          >
            <Box>
              <OptionButton
                index={0}
                icon={FilterFrames}
                label="Choose frame from video"
                disabled={disableSelectFrame}
                value={value}
                setValue={setValue}
              />
            </Box>
          </Tooltip>

          <OptionButton
            index={1}
            icon={Upload}
            label="Upload"
            value={value}
            setValue={setValue}
          />
        </Box>
        <Box flexGrow={1}>
          <Box width="100%" pr={2} pb={2}>
            <Box
              height="360px"
              width="440px"
              backgroundColor="#00000010"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {value === 0 && (
                <Box position="relative" height="100%" width="100%">
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    zIndex={10}
                    pl={2}
                    pr={2}
                    pt={1}
                    backgroundColor="#ffffff70"
                  >
                    <TimeSlider onChange={handleChangeTime} />
                  </Box>
                  <Box
                    height="100%"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <video
                      src={videoUrl + '?x-request=html'}
                      crossOrigin="anonymous"
                      ref={videoRef}
                      style={{
                        maxWidth: '440px',
                        maxHeight: '360px',
                        objectFit: 'contain',
                      }}
                      muted="muted"
                      alt="Piece"
                      onLoadedMetadata={() => setVideoDuration(duration)}
                    />
                  </Box>
                </Box>
              )}
              {value === 1 && (
                <>
                  <FileUpload setImageToCrop={setImageToCrop} />
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <DialogActions>
        <Box pr={1} pb={1} endIcon={<Crop />}>
          {value === 0 && (
            <Button variant="contained" onClick={getFrame}>
              Select Frame
            </Button>
          )}
          {value === 1 && (
            <Button
              variant="contained"
              // onClick={handleSelect}
              disabled={!imageToCrop.src}
            >
              Next
            </Button>
          )}
        </Box>
      </DialogActions>
    </>
  )
}

export default ImageUploadScreen
