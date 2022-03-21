import { useState } from 'react'

const useDialog = () => {
  let [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return { isOpen, handleOpen, handleClose }
}

export default useDialog
