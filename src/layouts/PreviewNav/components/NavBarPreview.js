import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Button,
  Link,
} from '@mui/material'
import { FilterNone } from '@mui/icons-material'
import copy from 'copy-to-clipboard'

import Logo from 'assets/images/plynth_logo_color.svg'
import Image from 'components/Image'

const { REACT_APP_PUBLIC_URL } = process.env

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [isCopied])

  const handleCopy = () => {
    setIsCopied(true)
    copy(text)
  }

  return (
    <Button
      variant="outlined"
      endIcon={<FilterNone />}
      onClick={handleCopy}
      fullWidth
      disableElevation
    >
      {isCopied ? 'Copied!' : 'Copy Page Url'}
    </Button>
  )
}

const NavBarAdmin = () => {
  const { id } = useParams()

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
          color="text.secondary"
        >
          <Link href="https://plynth.com">
            <Image src={Logo} height="24px" width="91px" />
          </Link>

          <Box>
            <CopyButton text={REACT_APP_PUBLIC_URL + '/preview/' + id} />
          </Box>
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default NavBarAdmin
