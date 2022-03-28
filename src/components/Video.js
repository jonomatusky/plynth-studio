import { Box, CircularProgress } from '@mui/material'
import React, { useState } from 'react'

const Video = ({ alt, src, height, width, style, ...props }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  return (
    <Box
      width={width}
      height={height}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {!!src && (
        <video
          alt={alt}
          src={src}
          style={{ height, width, ...style }}
          {...props}
          hidden={!imageIsLoaded}
          onLoadedData={() => setImageIsLoaded(true)}
          preload="auto"
        />
      )}
      {!imageIsLoaded && <CircularProgress color="secondary" />}
    </Box>
  )
}

export default Video
