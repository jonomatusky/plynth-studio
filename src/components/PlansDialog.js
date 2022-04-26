import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Box,
  IconButton,
} from '@mui/material'
import { usePlanStore } from 'hooks/store/use-plan-store'
import { useUserStore } from 'hooks/store/use-user-store'
import { Close } from '@mui/icons-material'
import PricingPanel from './PricingPanel'

const { REACT_APP_STRIPE_PRICE_ID_1, REACT_APP_STRIPE_PRICE_ID_2 } = process.env

const PlansDialog = () => {
  const { isOpen, closePlans } = usePlanStore()
  const { user } = useUserStore()

  const plans = [
    {
      name: 'Free',
      plan: 'free',
      price: '$0',
      briefDescription: 'Great for hobbyists',
      experienceDescription: 'Create unlimited AR experiences',
      viewsDescription: '100 views per month',
      viewsSubtitle:
        'Above 100 views, experiences will be disabled until the following month',
      features: [
        'Online experience builder',
        'Host videos on Youtube, Vimeo, and more',
        'Upload up to three 30 sec/25MB videos',
      ],
    },
    {
      name: 'Starter',
      plan: 'starter',
      price: '$9/mo',
      priceNote: 'billed yearly',
      briefDescription: 'Perfect for creators',
      experienceDescription: 'Create unlimited AR experiences',
      viewsDescription: '5,000 views per month',
      viewsSubtitle: '$0.02 for each additional view',
      features: [
        'Everything Free has, plus:',
        'Unlimited video uploads',
        'Remove Plynth branding',
        '120 seconds/100MB per video',
        '5GB storage limit',
      ],
      stripePriceId: REACT_APP_STRIPE_PRICE_ID_1,
    },
    {
      name: 'Pro',
      plan: 'pro',
      price: '$39/mo',
      priceNote: 'billed yearly',
      briefDescription: 'Create unlimited AR experiences',
      experienceDescription: 'Up to 250 active experiences',
      viewsDescription: '50,000 views per month',
      viewsSubtitle: '$0.01 for each additional view',
      features: [
        'Everything Starter has, plus:',
        'Premium support',
        'Unlimited video length/250MB per video',
        '25GB storage limit',
      ],
      stripePriceId: REACT_APP_STRIPE_PRICE_ID_2,
    },
  ]

  return (
    <Dialog open={isOpen} onClose={closePlans} maxWidth="md">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box flexGrow={1}>
            <b>Choose a Plan</b>
          </Box>
          <IconButton onClick={closePlans}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} alignItems="center">
          {plans.map(plan => {
            return (
              <Grid item xs={12} sm={6} md={4} key={plan.plan}>
                <PricingPanel
                  {...plan}
                  isCurrentPlan={
                    plan.plan === user.plan ||
                    (plan.plan === 'free' && !user.plan)
                  }
                />
              </Grid>
            )
          })}
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default PlansDialog
