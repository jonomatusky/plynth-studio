import { Box, Grid, Typography, Paper } from '@mui/material'
import { Check } from '@mui/icons-material'
import { useRequest } from 'hooks/use-request'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import useAlertStore from 'hooks/store/use-alert-store'
import { loadStripe } from '@stripe/stripe-js'

const PricingPanel = ({
  name,
  price,
  priceNote,
  briefDescription,
  experienceDescription,
  viewsDescription,
  viewsSubtitle,
  features,
  isCurrentPlan,
  stripePriceId,
}) => {
  const { request } = useRequest()
  const { setError } = useAlertStore()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleSignUp = async () => {
    setIsCheckingOut(true)
    if (!stripePriceId) {
      return
    }

    try {
      const res = await request({
        url: `/payments/checkout`,
        method: 'POST',
        data: {
          price: stripePriceId,
        },
      })

      const { sessionId } = res

      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      )

      stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.log(err)
      setIsCheckingOut(false)
      setError({
        message: 'Something went wrong. Please try again.',
      })
    }
  }

  const handleDowngrade = () => {}

  return (
    <Paper
      variant="outlined"
      sx={{ borderColor: isCurrentPlan ? 'primary.main' : null, padding: 2 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" textAlign="center">
            <b>{name}</b>
          </Typography>
          <Box minHeight="40px" pt={1}>
            <Typography variant="h5" textAlign="center">
              {price || '$0'}
            </Typography>
          </Box>
          <Box minHeight="16px">
            <Typography textAlign="center" fontSize={10}>
              <i>{priceNote}</i>
            </Typography>
          </Box>
          <Box minHeight="30px" mt="10px">
            <Typography textAlign="center">{briefDescription}</Typography>
          </Box>
          <Box minHeight="30px" mt="10px">
            <Typography>{experienceDescription}</Typography>
          </Box>
          <Box minHeight="50px">
            <Typography>{viewsDescription}</Typography>
            <Typography fontSize={10} pl={1} lineHeight={1}>
              <i>{viewsSubtitle}</i>
            </Typography>
          </Box>
          <Box minHeight="160px">
            <Grid item xs={12}>
              {(features || []).map(feature => {
                return (
                  <Box display="flex" alignItems="center" pt={1} key={feature}>
                    <Box pr={2} display="flex" alignItems="center">
                      <Check fontSize="small" />
                    </Box>
                    <Box>
                      <Typography fontSize={14}>{feature}</Typography>
                    </Box>
                  </Box>
                )
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            onClick={stripePriceId ? handleSignUp : handleDowngrade}
            // href={link}
            disabled={isCurrentPlan}
            loading={isCheckingOut}
          >
            <b>
              {isCurrentPlan
                ? 'Current Plan'
                : isCheckingOut
                ? 'Signing Up'
                : 'Sign Up'}
            </b>
          </LoadingButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PricingPanel
