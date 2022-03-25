import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { FilterNone } from '@mui/icons-material'
import copy from 'copy-to-clipboard'

const CopyButton = ({ children, text, ...props }) => {
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
    <Button endIcon={<FilterNone />} {...props} onClick={handleCopy}>
      {isCopied ? 'Copied!' : children}
    </Button>
  )
}

export default CopyButton
