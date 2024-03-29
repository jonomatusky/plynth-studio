import React from 'react'
import { Outlet } from 'react-router-dom'
import { Toolbar } from '@mui/material'

import AdminNavBar from 'layouts/AdminNav/components/NavBarAdmin'
import NotFound from 'components/NotFound'
import useExperienceStore from 'hooks/store/use-experience-store'
import useUserStore from 'hooks/store/use-user-store'
import Loading from 'pages/Loading/Loading'

const AdminNav = ({ children, hideFooter, backgroundColor, ...props }) => {
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
          <AdminNavBar {...props} />
          {!error && !success && <Loading />}
          {success && (
            <main style={{ backgroundColor }}>
              <Toolbar />
              <Outlet />
            </main>
          )}
        </>
      )}
    </>
  )
}

export default AdminNav
