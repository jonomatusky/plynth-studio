import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Container, Grid, Typography, Link, Box } from '@mui/material'

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        align="center"
        justifyContent="center"
        wrap="nowrap"
        spacing={1}
      >
        <Grid item>
          <Box mt="20vh" mb={1} maxWidth="80px" />
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">
            Not Found
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" align="center">
            The page you're looking for doesn't exist.
          </Typography>
        </Grid>
        <Grid item>
          <Link component={RouterLink} to="/">
            <Typography align="center">
              <b>Back to Home</b>
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFound
