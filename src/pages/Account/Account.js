import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Link as MuiLink,
} from '@mui/material'
// import { Link } from 'react-router-dom'
// import { ArrowBackIos } from '@mui/icons-material'
import { useSession } from 'hooks/use-session'
import { useState } from 'react'
import FormEmail from './components/FormEmail'
import firebase from 'config/firebase'
import useAlertStore from 'hooks/store/use-alert-store'

const Account = () => {
  const { user } = useSession()
  const { setError } = useAlertStore()

  const [passwordResetSent, setPaswordResetSent] = useState(false)

  const handleResetEmail = async () => {
    setPaswordResetSent(true)
    try {
      await firebase.auth().sendPasswordResetEmail(user.email)
    } catch (err) {
      setError({ message: 'An error occurred. Please try again.' })
    }
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box pt={5}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <Box pb={1}>
                  <Typography variant="h5" align="center">
                    <b>My Account</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Email</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormEmail />
              </Grid>
              <Grid item xs={12}>
                <Box pt={3}>
                  <Typography>
                    <b>Password</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={3}>
                    {!passwordResetSent && (
                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{ height: '38px' }}
                        onClick={handleResetEmail}
                      >
                        Reset Password
                      </Button>
                    )}
                    {passwordResetSent && (
                      <Box minHeight="38px">
                        <Typography variant="subtitle2">
                          We've emailed you a link to reset your password.
                          Didn't receive an email? Check your junk folder or
                          request another link.
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Box pt={3}>
                  <Typography>
                    <b>Username</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={3}>
                    <Typography variant="subtitle2">
                      To change your username, please{' '}
                      <MuiLink
                        href="https://help.plynth.com"
                        target="_blank"
                        color="inherit"
                        underline="always"
                      >
                        contact us
                      </MuiLink>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Box pt={3}>
                  <Typography>
                    <b>Delete Account</b>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box p={3}>
                    <Typography variant="subtitle2">
                      To delete your account, please{' '}
                      <MuiLink
                        href="https://help.plynth.com"
                        target="_blank"
                        color="inherit"
                        underline="always"
                      >
                        contact us
                      </MuiLink>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Box height="24px" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Account
