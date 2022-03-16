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

const PlansDialog = () => {
  const { isOpen, closePlans } = usePlanStore()
  const { user } = useUserStore()

  const plans = [
    {
      name: 'Free',
      plan: 'free',
      price: '$0',
      briefDescription: 'Great for hobbyists',
      experienceDescription: 'Up to 3 active experiences',
      viewsDescription: '100 views per month',
      viewsSubtitle:
        'Above 100 views, experiences will be disabled until the following month',
      features: [
        'Online experience builder',
        'Share AR and fullscreen videos',
        '30 sec/25MB per video',
        '100MB storage limit',
      ],
    },
    {
      name: 'Starter',
      plan: 'starter',
      price: '$9/mo',
      priceNote: 'billed yearly',
      briefDescription: 'Perfect for creators',
      experienceDescription: 'Up to 50 active experiences',
      viewsDescription: '10,000 views per month',
      viewsSubtitle: '$0.01 for each additional view',
      features: [
        'Everything Free has, plus:',
        'Remove Plynth branding',
        '120 seconds/100MB per video',
        '2GB storage limit',
      ],
      // stripePriceId: 'price_1KcpqGBhwDAAjOj1lsnfXv87',
      stripePriceId: 'price_1Kd0gyBhwDAAjOj1F5MyOCWV',
    },
    {
      name: 'Pro',
      plan: 'pro',
      price: '$39/mo',
      priceNote: 'billed yearly',
      briefDescription: 'Ideal for businesses',
      experienceDescription: 'Up to 250 active experiences',
      viewsDescription: '100,000 views per month',
      viewsSubtitle: '$0.005 for each additional view',
      features: [
        'Everything Starter has, plus:',
        'Premium support',
        'Unlimited video length/250MB per video',
        '10GB storage limit',
      ],
      // stripePriceId: 'price_1KcptjBhwDAAjOj1YxBYmOKB',
      stripePriceId: 'price_1Kd0gyBhwDAAjOj1F5MyOCWV',
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
