import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useThunk } from 'hooks/use-thunk'
import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
  setNewExperienceImage,
  clearExperiences,
} from 'redux/experienceSlice'

export const useExperienceStore = () => {
  const dispatch = useDispatch()
  const dispatchThunk = useThunk()

  const _fetchExperiences = useCallback(async () => {
    await dispatchThunk(fetchExperiences)
  }, [dispatchThunk])

  const _createExperience = useCallback(
    async experience => {
      const newExperience = await dispatchThunk(createExperience, experience)
      return newExperience
    },
    [dispatchThunk]
  )

  const _updateExperience = useCallback(
    async ({ id, ...experience }) => {
      await dispatchThunk(updateExperience, { id, ...experience })
    },
    [dispatchThunk]
  )

  const _deleteExperience = useCallback(
    async id => {
      await dispatchThunk(deleteExperience, { id })
    },
    [dispatchThunk]
  )

  const _setExperienceImage = useCallback(
    image => {
      dispatch(setNewExperienceImage(image))
    },
    [dispatch]
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
    setNewExperienceImage: _setExperienceImage,
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
