import React from 'react'
import { Grid, Button, Box, Typography } from '@mui/material'

const OptionButton = ({ index, icon, label, disabled, setValue, value }) => {
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

export default OptionButton
