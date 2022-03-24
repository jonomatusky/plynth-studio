import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Grid,
  Button,
  Box,
  Typography,
  Slider,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Upload,
  FilterFrames,
  Close,
  Crop,
  Loop,
  CropPortrait,
  CropLandscape,
  CropSquare,
  CropOriginal,
  ArrowBackIos,
} from '@mui/icons-material'
import { useDropzone } from 'react-dropzone'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useRequest } from 'hooks/use-request'

const demoImageName = 'Postcard+Mixtape+Vol+1+600px.jpg'
const { REACT_APP_ASSET_URL } = process.env

const imageMinWidthDimension = 1200

const ImageUploadDialog = ({
  submitImage,
  imageUrl,
  videoUrl,
  open,
  onClose,
}) => {
  const [value, setValue] = useState(!!videoUrl ? 2 : 0)
  const [isReplacing, setIsReplacing] = useState(!imageUrl)

  const [image, setImage] = useState({
    filepath: null,
    width: null,
    height: null,
  })

  const [imageToCrop, setImageToCrop] = useState({
    src: null,
    width: null,
    height: null,
  })

  const imageSrc = image.filepath
    ? REACT_APP_ASSET_URL + '/' + image.filepath
    : null

  useEffect(() => {
    if (!imageUrl) {
      setIsReplacing(true)
    }
    setImage({})
    setImageToCrop({})
  }, [open, imageUrl])

  useEffect(() => {
    if (!videoUrl) {
      setValue(0)
    }
  }, [videoUrl])

  const OptionButton = ({ index, icon, label, disabled }) => {
    const Icon = icon

    return (
      <Box color="text.secondary">
        <Button
          onClick={() => setValue(index)}
          fullWidth
          disabled={disabled}
          color={value === index ? 'primary' : 'inherit'}
        >
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Box>
                <Icon />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                lineHeight={1}
                sx={{ textTransform: 'none' }}
              >
                {label}
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Box>
    )
  }

  const FileUpload = () => {
    const onDrop = useCallback(acceptedFiles => {
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
    }, [])
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

  // const handleSelect = () => {
  //   console.log('selected')
  // }

  const handleSelectDemoImage = () => {
    const data = { filepath: demoImageName, width: 600, height: 900 }
    submitImage(data)
    setIsReplacing(false)
    onClose()
  }

  const handleClose = () => {
    setImage({})
    setImageToCrop({})
    setIsReplacing(false)
    onClose()
  }

  // const videoDuration = videoRef.current ? videoRef.current.duration : 0
  // const videoDuration = 75.512

  const ContentUpload = () => {
    const videoRef = useRef()
    const [videoDuration, setVideoDuration] = useState()

    const duration = videoRef.current ? videoRef.current.duration : null

    useEffect(() => {
      if (!isNaN(duration)) {
        setVideoDuration(duration)
      }
    }, [duration])

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
            <OptionButton
              index={2}
              icon={FilterFrames}
              label="Choose frame from video"
              disabled={!videoUrl}
            />

            <OptionButton index={0} icon={Upload} label="Upload" />

            {/* <OptionButton index={1} icon={CameraAlt} label="Take a photo" /> */}

            {/* <OptionButton index={3} icon={Portrait} label="Use one of ours" /> */}
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
                  <>
                    <FileUpload />
                  </>
                )}
                {value === 1 && <FileUpload />}
                {value === 2 && (
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
                {/* {value === 3 && (
                  <img
                    src={demourl}
                    style={{
                      maxWidth: '440px',
                      maxHeight: '360px',
                      objectFit: 'contain',
                    }}
                    alt="Piece"
                  />
                )} */}
              </Box>
            </Box>
          </Box>
        </Box>
        <DialogActions>
          <Box pr={1} pb={1} endIcon={<Crop />}>
            {value === 0 && (
              <Button
                variant="contained"
                // onClick={handleSelect}
                disabled={!imageToCrop.src}
              >
                Next
              </Button>
            )}
            {value === 2 && (
              <Button variant="contained" onClick={getFrame}>
                Select Frame
              </Button>
            )}
            {value === 3 && (
              <Button variant="contained" onClick={handleSelectDemoImage}>
                Select
              </Button>
            )}
          </Box>
        </DialogActions>
      </>
    )
  }

  const ContentCropping = () => {
    const [crop, setCrop] = useState(() => {
      if (imageToCrop.height >= 1.5 * imageToCrop.width) {
        return { unit: '%', aspect: 2 / 3, width: 100, x: 0, y: 0 }
      } else if (imageToCrop.width >= 1.5 * imageToCrop.height) {
        return { unit: '%', aspect: 3 / 2, height: 100, x: 0, y: 0 }
      } else if (imageToCrop.height >= imageToCrop.width) {
        return { unit: '%', aspect: 2 / 3, height: 100, x: 0, y: 0 }
      } else {
        return { unit: '%', aspect: 3 / 2, width: 100, x: 0, y: 0 }
      }
    })

    const { request } = useRequest()

    const [status, setStatus] = useState('idle')

    const [currentCrop, setCurrentCrop] = useState(
      imageToCrop.height >= imageToCrop.width ? 0 : 1
    )

    const [displayImageDimensions, setDisplayImageDimensions] = useState({
      width: null,
      height: null,
    })

    const submitCrop = async () => {
      setStatus('loading')
      const cropImage = () => {
        let cropScale = imageToCrop.width / displayImageDimensions.width

        let width = Math.round(cropScale * crop.width)
        let height = Math.round(cropScale * crop.height)
        let x = Math.round(cropScale * crop.x)
        let y = Math.round(cropScale * crop.y)

        let shortEdgeLength = Math.min(width, height)

        let endWidth = width
        let endHeight = height

        if (shortEdgeLength > imageMinWidthDimension) {
          let scale = imageMinWidthDimension / shortEdgeLength
          endWidth = Math.round(scale * width)
          endHeight = Math.round(scale * height)
        }

        return new Promise((resolve, reject) => {
          var img = new Image()

          const canvas = document.createElement('canvas')

          canvas.width = endWidth
          canvas.height = endHeight

          var ctx = canvas.getContext('2d')

          img.onload = () => {
            ctx.drawImage(img, x, y, width, height, 0, 0, endWidth, endHeight)

            ctx.canvas.toBlob(
              blob => {
                resolve({ imageFile: blob, width: endWidth, height: endHeight })
              },
              'image/jpeg',
              0.92
            )
          }
          img.onerror = () => {
            reject('error cropping image')
            setStatus('error')
          }
          img.src = imageToCrop.src
        })
      }

      try {
        let { imageFile, width, height } = await cropImage()

        let { signedUrl, filepath } = await request({
          url: '/uploads/sign-s3',
          method: 'POST',
          data: {
            fileName: imageFile.name,
            fileType: imageFile.type,
          },
        })

        await request({ url: signedUrl, method: 'PUT', data: imageFile })

        await submitImage({ filepath, width, height })
        setImage({ filepath, width, height })

        URL.revokeObjectURL(imageToCrop.src)
        setImageToCrop({})
        setIsReplacing(false)
      } catch (err) {
        setStatus('error')
      }
    }

    const handleChangeCrop = newCrop => {
      setCrop(newCrop)
    }

    const handleCropImageLoaded = image => {
      setDisplayImageDimensions({ width: image.width, height: image.height })
    }

    const handleCancelCrop = () => {
      setImageToCrop({})
    }

    return (
      <>
        <DialogTitle>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box>Crop Image</Box>
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
          <Box width="144px" pb={2} display="flex" flexDirection="column">
            <Typography textAlign="center" pb={1}>
              <b>Choose Crop:</b>
            </Typography>
            <Button
              color={currentCrop === 0 ? 'primary' : 'secondary'}
              fullWidth
              startIcon={<CropPortrait />}
              // sx={{
              //   backgroundColor: '#ffffff88',
              //   '&:hover': { backgroundColor: '#ffffff50' },
              // }}
              onClick={() => {
                setCrop({
                  unit: '%',
                  aspect: 2 / 3,
                  width:
                    imageToCrop.width > (2 / 3) * imageToCrop.height
                      ? null
                      : 100,
                  height:
                    imageToCrop.width > (2 / 3) * imageToCrop.height
                      ? 100
                      : null,
                  x: 0,
                  y: 0,
                })
                setCurrentCrop(0)
              }}
            >
              2:3 (4" x 6")
            </Button>
            <Button
              color={currentCrop === 1 ? 'primary' : 'secondary'}
              startIcon={<CropLandscape />}
              fullWidth
              // sx={{
              //   backgroundColor: '#ffffff88',
              //   '&:hover': { backgroundColor: '#ffffff50' },
              // }}
              onClick={() => {
                setCrop({
                  unit: '%',
                  aspect: 3 / 2,
                  width:
                    imageToCrop.width > (3 / 2) * imageToCrop.height
                      ? null
                      : 100,
                  height:
                    imageToCrop.width > (3 / 2) * imageToCrop.height
                      ? 100
                      : null,
                  x: 0,
                  y: 0,
                })
                setCurrentCrop(1)
              }}
            >
              3:2 (6" x 4")
            </Button>
            <Button
              color={currentCrop === 2 ? 'primary' : 'secondary'}
              startIcon={<CropSquare />}
              fullWidth
              // sx={{
              //   backgroundColor: '#ffffff88',
              //   '&:hover': { backgroundColor: '#ffffff50' },
              // }}
              onClick={() => {
                setCrop({
                  unit: '%',
                  aspect: 1 / 1,
                  width: imageToCrop.width > imageToCrop.height ? null : 100,
                  height: imageToCrop.width > imageToCrop.height ? 100 : null,
                  x: 0,
                  y: 0,
                })
                setCurrentCrop(2)
              }}
              sx={{ textTransform: 'none' }}
            >
              1:1 (Square)
            </Button>
            <Button
              color={currentCrop === 3 ? 'primary' : 'secondary'}
              startIcon={<CropOriginal />}
              fullWidth
              // sx={{
              //   backgroundColor: '#ffffff88',
              //   '&:hover': { backgroundColor: '#ffffff50' },
              // }}
              onClick={() => {
                setCrop({
                  unit: 'px',
                  width: displayImageDimensions.width,
                  height: displayImageDimensions.height,
                  x: 0,
                  y: 0,
                })
                setCurrentCrop(3)
              }}
              sx={{ textTransform: 'none' }}
            >
              Custom
            </Button>
            <Box flexGrow={1} />
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
                <ReactCrop
                  src={imageToCrop.src}
                  crop={crop}
                  onChange={handleChangeCrop}
                  onImageLoaded={handleCropImageLoaded}
                  imageStyle={{
                    maxWidth: '440px',
                    maxHeight: '360px',
                    objectFit: 'contain',
                  }}
                  style={{
                    maxWidth: '440px',
                    maxHeight: '360px',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <DialogActions>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box p1={1} pb={1}>
              <Button
                startIcon={<ArrowBackIos />}
                color="inherit"
                onClick={handleCancelCrop}
              >
                Back
              </Button>
            </Box>

            <Box pr={1} pb={1}>
              <LoadingButton
                variant="contained"
                onClick={submitCrop}
                loading={status === 'loading'}
              >
                Crop and Save
              </LoadingButton>
            </Box>
          </Box>
        </DialogActions>
      </>
    )
  }

  const handleReplace = () => {
    setIsReplacing(true)
    setImageToCrop({})
  }

  const ContentReplace = () => {
    return (
      <>
        <DialogTitle>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box>Current Image</Box>
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
          <Box width="100%" pr={2} pb={2} pl={2}>
            <Box
              height="360px"
              width="568px"
              backgroundColor="#00000010"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {(imageSrc || imageUrl) && (
                <img
                  src={imageSrc ? imageSrc : imageUrl}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                  alt="Piece"
                />
              )}
            </Box>
          </Box>
        </Box>

        <DialogActions>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            color="text.secondary"
          >
            <Button
              color="inherit"
              endIcon={<Loop />}
              onClick={handleReplace}
              // sx={{
              //   backgroundColor: '#ffffff88',
              //   '&:hover': { backgroundColor: '#ffffff50' },
              // }}
              // onClick={replaceImage}
            >
              Replace
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Done
            </Button>
          </Box>
        </DialogActions>
      </>
    )
  }

  return (
    <Dialog open={open} onClose={onClose}>
      {!isReplacing ? (
        <ContentReplace />
      ) : !!imageToCrop.src ? (
        <ContentCropping />
      ) : (
        <ContentUpload />
      )}
    </Dialog>
  )
}

export default ImageUploadDialog
