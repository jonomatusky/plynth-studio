import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'
import { useExperienceStore } from 'hooks/store/use-experience-store'

const DeleteDialog = ({ open, onClose, id }) => {
  const navigate = useNavigate()
  const { deleteExperience } = useExperienceStore()

  const handleDeletePack = async () => {
    try {
      await deleteExperience(id)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Dialog onClose={onClose} aria-labelledby="remove-dialog-title" open={open}>
      <DialogTitle id="remove-dialog-title">Delete Experience</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this experience? This can't be undone.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleDeletePack}>DELETE</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteDialog
