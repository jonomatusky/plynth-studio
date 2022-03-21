import React, { useState } from 'react'
import { Container, Box, Grid, Typography, Link } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import * as yup from 'yup'

import firebase from 'config/firebase'
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'
import TextFieldWebsite from 'components/TextFieldWebsite'
import { ArrowForward } from '@mui/icons-material'
import { useFormik } from 'formik'
import useAlertStore from 'hooks/store/use-alert-store'
import { useSession } from 'hooks/use-session'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
})

const SignUp = ({ title, text }) => {
  const { logout } = useSession()
  const navigate = useNavigate()
  const { setError, clearError } = useAlertStore()
  const [status, setStatus] = useState('idle')

  const email = new URLSearchParams(useLocation().search).get('email')

  const handleSubmit = async ({ email, password }) => {
    if (status === 'idle') {
      setStatus('loading')
      try {
        logout()
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        navigate(`/`)
        clearError()
        setStatus('succeeded')
      } catch (err) {
        if (err.code === 'auth/invalid-email') {
          setError({ message: 'Please enter a valid email address' })
        } else if (err.code === 'auth/email-already-in-use') {
          setError({
            message: `Another account is using ${email}. Please sign in instead.`,
          })
        } else {
          setError({
            message:
              'There was an error creating your account. Please try again.',
          })
        }
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      email: email || '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  })

  return (
    <Container maxWidth="xs">
      <Box mt={10}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="flex-start" spacing={3}>
            <Grid item xs={12} mb={2}>
              <Typography variant="h3">
                <b>{title || 'Sign Up'}</b>
              </Typography>
            </Grid>
            {text && (
              <Grid item xs={12} mb={2}>
                <Typography variant="h6">
                  <b>{text}</b>
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextFieldWebsite
                variant="outlined"
                fullWidth
                size="small"
                placeholder="email"
                {...formik.getFieldProps('email')}
                FormHelperTextProps={{ sx: { fontSize: '16px' } }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldWebsite
                type="password"
                variant="outlined"
                fullWidth
                size="small"
                placeholder="password"
                {...formik.getFieldProps('password')}
                FormHelperTextProps={{ sx: { fontSize: '16px' } }}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                variant="contained"
                endIcon={<ArrowForward />}
                size="large"
                fullWidth
                sx={{ height: '51.5px' }}
                loading={status === 'loading'}
              >
                <Typography letterSpacing={1} style={{ fontWeight: 800 }}>
                  Continue
                </Typography>
              </LoadingButton>
            </Grid>
            <Grid item container justifyContent="center">
              <Typography variant="body2">
                Already have an account?{' '}
                <Link component={RouterLink} to="/login" size="small">
                  <b>Sign In</b>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default SignUp
