import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import ExperienceNavBar from './components/NavBarPreview'

const ExperienceNav = ({ ...props }) => {
  // const { fetchStatus: fetchUserStatus } = useUserStore()
  // const { fetchStatus: fetchExperienceStatus } = useExperienceStore()

  return (
    <>
      <ExperienceNavBar {...props} />
      <main>
        <Toolbar />
        <Outlet />
      </main>
    </>
  )
}

export default ExperienceNav
