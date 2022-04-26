import React, { useState } from 'react'
import {
  DialogTitle,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Close,
  CropPortrait,
  CropLandscape,
  CropSquare,
  CropOriginal,
  ArrowBackIos,
} from '@mui/icons-material'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useRequest } from 'hooks/use-request'

const imageMinWidthDimension = 1200

const ImageCropScreen = ({
  imageToCrop,
  setImageToCrop,
  submitImage,
  setImage,
  handleClose,
  setIsReplacing,
}) => {
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
        <Box
          width="144px"
          pb={2}
          display="flex"
          flexDirection="column"
          color="text.primary"
        >
          <Typography textAlign="center" pb={1}>
            <b>Choose Crop:</b>
          </Typography>
          <Button
            color={currentCrop === 0 ? 'primary' : 'inherit'}
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
                  imageToCrop.width > (2 / 3) * imageToCrop.height ? null : 100,
                height:
                  imageToCrop.width > (2 / 3) * imageToCrop.height ? 100 : null,
                x: 0,
                y: 0,
              })
              setCurrentCrop(0)
            }}
          >
            2:3 (4" x 6")
          </Button>
          <Button
            color={currentCrop === 1 ? 'primary' : 'inherit'}
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
                  imageToCrop.width > (3 / 2) * imageToCrop.height ? null : 100,
                height:
                  imageToCrop.width > (3 / 2) * imageToCrop.height ? 100 : null,
                x: 0,
                y: 0,
              })
              setCurrentCrop(1)
            }}
          >
            3:2 (6" x 4")
          </Button>
          <Button
            color={currentCrop === 2 ? 'primary' : 'inherit'}
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
            color={currentCrop === 3 ? 'primary' : 'inherit'}
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

export default ImageCropScreen
