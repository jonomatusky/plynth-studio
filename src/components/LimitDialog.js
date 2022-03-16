import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  IconButton,
  DialogActions,
  Button,
} from '@mui/material'
import { usePlanStore } from 'hooks/store/use-plan-store'
import { useUserStore } from 'hooks/store/use-user-store'
import { Close } from '@mui/icons-material'

const LimitDialog = ({ open, onClose }) => {
  const { openPlans } = usePlanStore()

  const { user } = useUserStore()

  const handleOpenPlans = () => {
    openPlans()
    onClose()
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs">
        <DialogTitle>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" textAlign="center">
                <b>Upgrade to continue</b>
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="end">
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography textAlign="center">
                Sorry, your current plan is limited to{' '}
                <b>{user.experienceLimit}</b> experiences. Please delete an
                existing experience or upgrade your account.
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
          <Button onClick={handleOpenPlans} variant="contained">
            Upgrade
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default LimitDialog
