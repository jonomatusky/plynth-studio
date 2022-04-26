import React, { useState, useEffect } from 'react'
import { Dialog } from '@mui/material'
import 'react-image-crop/dist/ReactCrop.css'
import ImageCropScreen from './ImageCropScreen'
import ImageUploadScreen from './ImageUploadScreen'
import ImageReplaceScreen from './ImageReplaceScreen'

const { REACT_APP_ASSET_URL } = process.env

const ImageUploadDialog = ({
  submitImage,
  imageUrl,
  videoUrl,
  videoType,
  open,
  onClose,
}) => {
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
    if (open) {
      if (!imageUrl) {
        setIsReplacing(true)
      } else {
        setIsReplacing(false)
      }
      setImage({})
      setImageToCrop({})
    }
  }, [open, imageUrl])

  // const handleSelect = () => {
  //   console.log('selected')
  // }

  const handleClose = () => {
    // setImage({})
    // setImageToCrop({})
    // setIsReplacing(false)
    onClose()
  }

  // const videoDuration = videoRef.current ? videoRef.current.duration : 0
  // const videoDuration = 75.512

  return (
    <Dialog open={open} onClose={onClose}>
      {!isReplacing ? (
        <ImageReplaceScreen
          setIsReplacing={setIsReplacing}
          setImageToCrop={setImageToCrop}
          handleClose={handleClose}
          imageSrc={imageSrc}
          imageUrl={imageUrl}
        />
      ) : !!imageToCrop.src ? (
        <ImageCropScreen
          imageToCrop={imageToCrop}
          setImageToCrop={setImageToCrop}
          submitImage={submitImage}
          setImage={setImage}
          handleClose={handleClose}
          setIsReplacing={setIsReplacing}
        />
      ) : (
        <ImageUploadScreen
          videoUrl={videoUrl}
          videoType={videoType}
          setImageToCrop={setImageToCrop}
          imageToCrop={imageToCrop}
          handleClose={handleClose}
        />
      )}
    </Dialog>
  )
}

export default ImageUploadDialog
