import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, AppBar, Toolbar, Divider, Button } from '@mui/material'

import { useUserStore } from 'hooks/store/use-user-store'
import { ArrowBackIos } from '@mui/icons-material'
import UpgradeButton from 'components/UpgradeButton'

const NavBarAdmin = () => {
  const { user } = useUserStore()

  return (
    <AppBar
      sx={{ backgroundColor: 'background.paper', color: 'text.secondary' }}
      elevation={0}
    >
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Box flexGrow={1} color="text.secondary">
            <Button
              startIcon={<ArrowBackIos />}
              component={Link}
              to={'/'}
              color="inherit"
            >
              Home
            </Button>
          </Box>

          {user.plan === 'free' && (
            <Box pr={1} sx={{ display: { xs: 'none', md: 'block' } }}>
              <UpgradeButton />
            </Box>
          )}
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default NavBarAdmin
