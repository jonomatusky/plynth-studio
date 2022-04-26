import React from 'react'
import { DialogTitle, DialogActions, Button, Box } from '@mui/material'
import { Close, Loop } from '@mui/icons-material'

const ImageReplaceScreen = ({
  setIsReplacing,
  setImageToCrop,
  handleClose,
  imageSrc,
  imageUrl,
}) => {
  const handleReplace = () => {
    setIsReplacing(true)
    setImageToCrop({})
  }

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

export default ImageReplaceScreen
