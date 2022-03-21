import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { Palette } from '@mui/icons-material'
import { ChromePicker } from 'react-color'
import coloring from 'util/coloring'

const ButtonColorPicker = ({ color, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [tempColor, setTempColor] = useState(color)

  const handleSelect = (color, event) => {
    onChange(color.hex)
  }

  const openPicker = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorPosition={{ top: -100, left: 0 }}
      >
        <ChromePicker
          disableAlpha
          onChange={setTempColor}
          onChangeComplete={handleSelect}
          color={tempColor}
        />
      </Popover>
      <Button
        onClick={openPicker}
        variant="contained"
        sx={{
          bgcolor: color,
          ':hover': {
            bgcolor: color,
          },
        }}
      >
        <Box height="25px" width="50px">
          <Palette sx={{ fill: coloring.getFontColor(color) }} />
        </Box>
      </Button>
    </>
  )
}

export default ButtonColorPicker
