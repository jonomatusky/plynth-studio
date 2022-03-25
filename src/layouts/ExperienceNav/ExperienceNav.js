import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import ExperienceNavBar from './components/NavBarExperience'
import NotFound from 'components/NotFound'
import useExperienceStore from 'hooks/store/use-experience-store'
import useUserStore from 'hooks/store/use-user-store'
import Loading from 'pages/Loading/Loading'

const ExperienceNav = ({ children, hideFooter, backgroundColor, ...props }) => {
  const { fetchStatus: fetchUserStatus } = useUserStore()
  const { fetchStatus: fetchExperienceStatus } = useExperienceStore()

  const success =
    fetchUserStatus === 'succeeded' && fetchExperienceStatus === 'succeeded'
  const error = fetchUserStatus === 'error' || fetchExperienceStatus === 'error'

  return (
    <>
      {error && <NotFound />}
      {!error && (
        <>
          <ExperienceNavBar {...props} />
          {!error && !success && <Loading />}
          {success && (
            <main>
              <Toolbar />
              <Outlet />
            </main>
          )}
        </>
      )}
    </>
  )
}

export default ExperienceNav
