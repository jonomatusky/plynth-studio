import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import AccountNavBar from './components/NavBarAccount'

const AdminNav = ({
  children,
  hideFooter,
  hideNavBar,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      {!hideNavBar && <AccountNavBar {...props} />}
      <main style={{ backgroundColor }}>
        <Toolbar />
        <Outlet />
      </main>
    </>
  )
}

export default AdminNav
