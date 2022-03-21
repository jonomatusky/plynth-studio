import React, { useState } from 'react'
import { Grid, Button, Menu, Typography } from '@mui/material'
import { Download, Print } from '@mui/icons-material'

const PrintButton = ({ experience }) => {
  const { objects } = experience || {}
  const { posterUrl } = (objects || [])[0] || {}

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        endIcon={<Print />}
        variant="outlined"
        disableElevation
        onClick={handleOpen}
      >
        Print
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        transitionDuration={0}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <Grid container p={2} spacing={2} maxWidth="400px">
          <Grid item xs={12}>
            <Typography variant="h6">Print this experience</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              endIcon={<Download />}
              href={posterUrl}
            >
              Order Prints
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              endIcon={<Download />}
              href={posterUrl}
            >
              Download Print File
            </Button>
          </Grid>
        </Grid>
      </Menu>
    </>
  )
}

export default PrintButton
