import React, { useEffect, useRef } from 'react'
import { Card, Box, Typography, CardActionArea } from '@mui/material'
import { AddPhotoAlternate, VideoCall, PlayArrow } from '@mui/icons-material'
import ReactPlayer from 'react-player'

// import ImageUploadDialog from './ImageUploadDialog'
// import VideoUploadDialog from './VideoUploadDialog'
import Image from 'components/Image'

const AddMediaButton = ({
  imageSrc,
  videoSrc,
  mediaType,
  disabled,
  showTooltips,
  handleClick,
}) => {
  const playerRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        playerRef.current.seekTo(0)
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <Card elevation={0} variant="outlined">
        <CardActionArea
          sx={{ padding: '8px' }}
          onClick={handleClick}
          disabled={disabled}
        >
          <Box
            height="200px"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box
              width="100%"
              height="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              textAlign="center"
            >
              {mediaType === 'image' ? (
                <>
                  {imageSrc ? (
                    <>
                      <Box
                        width="100%"
                        height="200px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          src={imageSrc}
                          style={{ maxHeight: '184px', maxWidth: '100%' }}
                        />
                      </Box>
                    </>
                  ) : (
                    <Box display="flex" alignItems="center">
                      <Typography
                        fontSize="large"
                        sx={{ textTransform: 'none' }}
                        color="primary"
                      >
                        <b>Add Image</b>
                      </Typography>
                      <AddPhotoAlternate fontSize="large" color="primary" />
                    </Box>
                  )}
                </>
              ) : (
                <>
                  {videoSrc ? (
                    <>
                      <Box
                        width="100%"
                        height="200px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                      >
                        <Box
                          width="100%"
                          height="100%"
                          zIndex={10}
                          color="white"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          position="absolute"
                        >
                          <PlayArrow color="inherit" fontSize="large" />
                        </Box>
                        <ReactPlayer
                          ref={playerRef}
                          url={videoSrc}
                          muted
                          loop
                          style={{ maxHeight: '184px', maxWidth: '100%' }}
                          crossOrigin="anonymous"
                        />
                      </Box>
                    </>
                  ) : (
                    <Box display="flex" alignItems="center">
                      <Typography
                        fontSize="large"
                        sx={{ textTransform: 'none' }}
                        color="primary"
                      >
                        <b>Add Video</b>
                      </Typography>
                      <VideoCall fontSize="large" color="primary" />
                    </Box>
                  )}
                </>
              )}
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </>
  )
}

export default AddMediaButton
