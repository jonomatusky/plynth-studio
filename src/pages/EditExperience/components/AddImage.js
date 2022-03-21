import React, { useEffect, useRef } from 'react'
import { Card, Box, Typography, CardActionArea } from '@mui/material'
import { AddPhotoAlternate } from '@mui/icons-material'

import Image from 'components/Image'
import OnboardingTooltip from 'components/OnboardingTooltip'

const AddImage = ({
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
      {/* {mediaType === 'image' ? (
        <ImageUploadDialog
          open={open}
          imageUrl={imageSrc}
          videoUrl={videoSrc}
          videoDuration={videoDuration}
          width={imageWidth}
          height={imageHeight}
          submitImage={submitImage}
          onClose={handleClose}
        />
      ) : (
        <VideoUploadDialog
          open={open}
          videoUrl={videoSrc}
          videoDuration={videoDuration}
          submit={submitVideo}
          onClose={handleClose}
        />
      )} */}
      <OnboardingTooltip
        open={showTooltips && (mediaType === 'video' ? !videoSrc : !imageSrc)}
        title={
          mediaType === 'image'
            ? 'Add an image. Don’t have one? Choose a frame from your video, or try it out with our demo image.'
            : "Upload a video. Don't have one? Use our demo video."
        }
        position="bottom"
      >
        <Card
          elevation={0}
          sx={{ backgroundColor: 'background.default' }}
          variant="outlined"
        >
          <CardActionArea onClick={handleClick} disabled={disabled}>
            <Box
              height="480px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Box
                width="100%"
                height="480px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                textAlign="center"
              >
                {imageSrc ? (
                  <>
                    <Box
                      width="100%"
                      height="480px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={imageSrc}
                        style={{ maxHeight: '480px', maxWidth: '100%' }}
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
                      <b>Add Target Image</b>
                    </Typography>
                    <AddPhotoAlternate fontSize="large" color="primary" />
                  </Box>
                )}
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </OnboardingTooltip>
    </>
  )
}

export default AddImage
