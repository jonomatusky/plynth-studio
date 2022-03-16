import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useThunk } from 'hooks/use-thunk'
import { fetchUser, updateUser, deleteUser, clearUser } from 'redux/userSlice'

export const useUserStore = () => {
  const dispatch = useDispatch()
  const dispatchThunk = useThunk()

  const _fetchUser = useCallback(async () => {
    await dispatchThunk(fetchUser)
  }, [dispatchThunk])

  const _updateUser = useCallback(
    async updates => {
      await dispatchThunk(updateUser, { ...updates })
    },
    [dispatchThunk]
  )

  const _deleteUser = useCallback(async () => {
    await dispatchThunk(deleteUser)
  }, [dispatchThunk])

  const _clearUser = useCallback(() => {
    dispatch(clearUser())
  }, [dispatch])

  const { user, fetchStatus, updateStatus, error } = useSelector(
    state => state.user
  )

  return {
    fetchUser: _fetchUser,
    updateUser: _updateUser,
    deleteUser: _deleteUser,
    clearUser: _clearUser,
    user,
    fetchStatus,
    updateStatus,
    error,
  }
}

export default useUserStore
