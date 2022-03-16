import React, { useState } from 'react'
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Link,
} from '@mui/material'
import { useUserStore } from 'hooks/store/use-user-store'
import { useExperienceStore } from 'hooks/store/use-experience-store'
import FormEmail from './components/FormEmail'
import firebase from 'config/firebase'
import useAlertStore from 'hooks/store/use-alert-store'
import { useSession } from 'hooks/use-session'
import usePlanStore from 'hooks/store/use-plan-store'
import { LoadingButton } from '@mui/lab'
import { useRequest } from 'hooks/use-request'

const Account = () => {
  const { logout } = useSession()
  const { user, fetchStatus } = useUserStore()
  const { experiences } = useExperienceStore()
  const { openPlans } = usePlanStore()
  const { setError } = useAlertStore()
  const { request, status } = useRequest()

  const [passwordResetSent, setPasswordResetSent] = useState(false)
  const [isManagingPlan, setIsManagingPlan] = useState(false)

  const handleManagePlan = async () => {
    if (user.plan === 'free') {
      openPlans()
    } else {
      setIsManagingPlan(true)
      try {
        if (status === 'idle') {
          const { url } = await request({
            url: '/payments/billing',
            method: 'POST',
          })
          if (url) {
            window.location.href = url
          } else {
            setIsManagingPlan(false)
            setError({
              message:
                'Unable to access your billing portal. Please try again later.',
            })
          }
          window.location.href = url
        }
      } catch (err) {
        setIsManagingPlan(false)
        setError({ message: err.message })
      }
    }
  }

  const handleResetEmail = async () => {
    setPasswordResetSent(true)
    try {
      await firebase.auth().sendPasswordResetEmail(user.email)
    } catch (err) {
      setError({ message: 'An error occurred. Please try again.' })
    }
  }

  const { planName, experienceLimit } = user

  return (
    <Container maxWidth="xs">
      {fetchStatus === 'succeeded' && (
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} mt={2}>
            <Typography variant="h5" align="center">
              <b>My Account</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box pt={3}>
              <Typography>
                <b>Current Plan</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box p={3}>
                <Typography>
                  You're currently on the <b>{planName}</b> plan.
                </Typography>
                <Typography pb={2}>
                  You're using <b>{experiences.length}</b> of{' '}
                  <b>{experienceLimit}</b> experiences.
                </Typography>
                <LoadingButton
                  variant="contained"
                  color={user.plan === 'free' ? 'primary' : 'secondary'}
                  disableElevation={user.plan !== 'free'}
                  size="large"
                  onClick={handleManagePlan}
                  fullWidth
                  loading={isManagingPlan}
                >
                  {user.plan !== 'free' ? 'Change Plan' : 'Manage Plan'}
                </LoadingButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Typography>
              <b>Email</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormEmail />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <b>Password</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box p={3}>
                {!passwordResetSent && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleResetEmail}
                    size="large"
                    disableElevation
                    fullWidth
                  >
                    Reset Password
                  </Button>
                )}
                {passwordResetSent && (
                  <Box minHeight="38px">
                    <Typography variant="subtitle2">
                      We've emailed you a link to reset your password. Didn't
                      receive an email? Check your junk folder or{' '}
                      <Link
                        href="#"
                        title="Click to reset"
                        onClick={() => setPasswordResetSent(false)}
                      >
                        request another link.
                      </Link>
                    </Typography>
                  </Box>
                )}
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
                  <Link
                    href="https://help.plynth.com"
                    target="_blank"
                    color="inherit"
                    underline="always"
                  >
                    contact us
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} textAlign="center" mt={1}>
            <Button onClick={logout} color="secondary">
              Log Out
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box height="24px" />
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default Account
