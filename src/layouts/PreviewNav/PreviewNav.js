import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { use100vh } from 'hooks/use-100-vh'
import ExperienceNavBar from './components/NavBarPreview'
import NotFound from 'components/NotFound'
import useExperienceStore from 'hooks/store/use-experience-store'
import useUserStore from 'hooks/store/use-user-store'
import Loading from 'pages/Loading/Loading'

const ExperienceNav = ({ children, hideFooter, backgroundColor, ...props }) => {
  const height = use100vh()

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
            <main style={{ backgroundColor }}>
              <Box
                height={height - 64}
                position="relative"
                width="100%"
                mt="64px"
                overflow="scroll"
              >
                {/* <Box height="calc(100vh - 48px)" overflow="scroll" mt="48px"> */}
                <Outlet />
                {/* </Box> */}
              </Box>
            </main>
          )}
        </>
      )}
    </>
  )
}

export default ExperienceNav
