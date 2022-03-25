import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as client from '../util/client'

let initialState = {
  user: {},
  fetchStatus: 'idle',
  updateStatus: 'idle',
  error: null,
}

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async ({ headers }) => {
    const { user } = await client.request({
      headers,
      url: '/me',
    })
    return user
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ headers, ...inputs }) => {
    const { user } = await client.request({
      headers,
      url: `/me`,
      method: 'PATCH',
      data: inputs,
    })
    return user
  }
)

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async ({ headers }) => {
    await client.request({
      headers,
      url: '/me',
      method: 'DELETE',
    })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state, action) {
      state.fetchStatus = 'idle'
      state.createStatus = 'idle'
      state.updateStatus = 'idle'
      state.user = {}
      state.error = null
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.fetchStatus = 'loading'
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.fetchStatus = 'succeeded'
      state.user = action.payload
    },
    [fetchUser.rejected]: (state, action) => {
      state.fetchStatus = 'failed'
      state.error = action.error.message
      state.scanRoute = '/'
    },
    [updateUser.pending]: (state, action) => {
      state.updateStatus = 'loading'
    },
    [updateUser.fulfilled]: (state, action) => {
      state.updateStatus = 'idle'
      state.user = action.payload
    },
    [updateUser.rejected]: (state, action) => {
      state.updateStatus = 'failed'
      state.error = action.error.message
    },
  },
})

export const { setUser, clearError, clearUser } = userSlice.actions

export default userSlice.reducer
