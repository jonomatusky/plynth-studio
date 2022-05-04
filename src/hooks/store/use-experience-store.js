import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useThunk } from 'hooks/use-thunk'
import useUserStore from './use-user-store'
import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
  clearExperiences,
} from 'redux/experienceSlice'

export const useExperienceStore = () => {
  const dispatch = useDispatch()
  const dispatchThunk = useThunk()
  const { updateUser } = useUserStore()

  const _fetchExperiences = useCallback(async () => {
    await dispatchThunk(fetchExperiences)
  }, [dispatchThunk])

  const _createExperience = useCallback(
    async experience => {
      const newExperience = await dispatchThunk(createExperience, experience)
      updateUser({})
      return newExperience
    },
    [dispatchThunk, updateUser]
  )

  const _updateExperience = useCallback(
    async ({ id, ...experience }) => {
      await dispatchThunk(updateExperience, { id, ...experience })
      updateUser({})
    },
    [dispatchThunk, updateUser]
  )

  const _deleteExperience = useCallback(
    async id => {
      await dispatchThunk(deleteExperience, { id })
      updateUser({})
    },
    [dispatchThunk, updateUser]
  )

  const _clearExperiences = useCallback(
    image => {
      dispatch(clearExperiences())
    },
    [dispatch]
  )

  const {
    experiences,
    newExperienceImage,
    fetchStatus,
    error,
    updateStatus,
    createStatus,
    filter,
  } = useSelector(state => state.experiences)

  const selectExperience = experienceId => {
    return (experiences || []).find(
      experience => experience.id === experienceId
    )
  }

  return {
    fetchExperiences: _fetchExperiences,
    createExperience: _createExperience,
    updateExperience: _updateExperience,
    deleteExperience: _deleteExperience,
    clearExperiences: _clearExperiences,
    selectExperience,
    filter,
    experiences,
    newExperienceImage,
    fetchStatus,
    error,
    updateStatus,
    createStatus,
  }
}

export default useExperienceStore
