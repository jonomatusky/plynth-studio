import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Link,
} from '@mui/material'

import { useSession } from 'hooks/use-session'
import { useUserStore } from 'hooks/store/use-user-store'
import Logo from 'assets/images/plynth_logo_color.svg'
import Image from 'components/Image'
import { AccountCircle } from '@mui/icons-material'
import UpgradeButton from 'components/UpgradeButton'

const NavBarAdmin = () => {
  const { logout } = useSession()
  const { user, fetchStatus } = useUserStore()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    logout()
  }

  return (
    <AppBar
      position="fixed"
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
          <Box flexGrow={1}>
            <Grid container>
              <Grid item>
                <Grid container direction="column" alignItems="center">
                  <Box display="flex" alignItems="center">
                    <RouterLink to="/">
                      <Image src={Logo} height="24px" width="91px" />
                    </RouterLink>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {fetchStatus === 'succeeded' && (
            <>
              {/* 
                <Box pr={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Button
                  variant="outlined"
                  color="primary"
                  // onClick={handleClick}
                  disableElevation
                  sx={{ textTransform: 'none' }}
                >
                  Invite Friends
                </Button>
                </Box>
               */}
              {user.plan === 'free' && (
                <Box pr={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <UpgradeButton />
                </Box>
              )}
              <Box>
                <IconButton onClick={handleOpen}>
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  transitionDuration={0}
                  anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom',
                  }}
                  anchorPosition={{ left: 0, top: -20 }}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <MenuItem component={RouterLink} to="/account">
                    My Account
                  </MenuItem>
                  {/* <MenuItem onClick={openOnboarding}>
                            Show Onboarding
                  </MenuItem> */}
                  <MenuItem
                    component={Link}
                    href="https://help.plynth.com"
                    target="_blank"
                  >
                    Get Help
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    href="https://airtable.com/shrmOgSoAqE7bBOmI"
                    target="_blank"
                  >
                    Report a Bug
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default NavBarAdmin
