import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  Box,
  IconButton,
  DialogActions,
  Button,
} from '@mui/material'
import { usePlanStore } from 'hooks/store/use-plan-store'
import { useUserStore } from 'hooks/store/use-user-store'
import { Close } from '@mui/icons-material'

const PostCheckoutDialog = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let checkout_succeeded = searchParams.get('checkout_succeeded')

  const isOpen = checkout_succeeded === 'true' || checkout_succeeded === 'false'
  const { isOpen: isOpenPlan, closePlans } = usePlanStore()
  const { user, fetchStatus } = useUserStore()

  const handleClose = () => {
    setSearchParams({})
  }

  useEffect(() => {
    if (isOpen && isOpenPlan) {
      closePlans()
    }
  }, [isOpen, isOpenPlan, closePlans])

  return (
    <>
      <Dialog
        open={
          checkout_succeeded === 'true' &&
          fetchStatus === 'succeeded' &&
          user.plan !== 'free'
        }
        onClose={handleClose}
        maxWidth="xs"
      >
        <DialogTitle>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" textAlign="center">
                <b>Welcome aboard!</b>
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="end">
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography textAlign="center">
                You're now on the <b>{user.planName}</b> plan. You can create up
                to <b>{user.experienceLimit}</b> experiences with{' '}
                <b>{user.viewLimit}</b> views per year.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box textAlign="center" width="100%" pb={1}>
            <Button onClick={handleClose} variant="contained">
              Get Started
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Dialog
        open={fetchStatus === 'succeeded' && checkout_succeeded === 'false'}
        onClose={handleClose}
        maxWidth="xs"
      >
        <DialogTitle>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" textAlign="center">
                <b>Whoops!</b>
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="end">
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography textAlign="center">
                Looks like we were unable to complete your payment. Please try
                again.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Box textAlign="center" width="100%" pb={1}>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default PostCheckoutDialog
