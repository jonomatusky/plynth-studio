import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { use100vh } from 'hooks/use-100-vh'
import ExperienceNavBar from './components/NavBarPreview'

const ExperienceNav = ({ children, hideFooter, backgroundColor, ...props }) => {
  const height = use100vh()

  // const { fetchStatus: fetchUserStatus } = useUserStore()
  // const { fetchStatus: fetchExperienceStatus } = useExperienceStore()

  console.log('previewnav')
  console.log()

  return (
    <>
      <ExperienceNavBar {...props} />

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
    </>
  )
}

export default ExperienceNav
