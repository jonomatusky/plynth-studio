import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { use100vh } from 'hooks/use-100-vh'
import AccountNavBar from './components/NavBarAccount'

const AdminNav = ({
  children,
  hideFooter,
  hideNavBar,
  backgroundColor,
  ...props
}) => {
  const height = use100vh()

  return (
    <>
      {!hideNavBar && <AccountNavBar {...props} />}

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

export default AdminNav
