import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'

const Link = ({ children, to, ...props }) => {
  return (
    <MuiLink component={RouterLink} to={to} {...props}>
      {children}
    </MuiLink>
  )
}

export default Link
