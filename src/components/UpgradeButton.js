import React from 'react'
import { Button } from '@mui/material'
import { RocketLaunch } from '@mui/icons-material'
import { usePlanStore } from 'hooks/store/use-plan-store'

const UpgradeButton = () => {
  const { openPlans } = usePlanStore()

  return (
    <Button
      variant="contained"
      onClick={openPlans}
      disableElevation
      endIcon={<RocketLaunch />}
    >
      Upgrade
    </Button>
  )
}

export default UpgradeButton
