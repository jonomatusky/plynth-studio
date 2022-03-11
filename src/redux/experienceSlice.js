import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as client from 'util/client'

let initialState = {
  experiences: [],
  error: null,
  fetchStatus: 'idle',
  updateStatus: 'idle',
  createStatus: 'idle',
}

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async ({ headers }) => {
    const { experiences } = await client.request({
      headers,
      url: '/users/me/experiences',
    })
    return experiences
  }
)

export const createExperience = createAsyncThunk(
  'experiences/createExperience',
  async ({ headers, ...inputs }) => {
    const { experience } = await client.request({
      headers,
      url: `/experiences`,
      method: 'POST',
      data: inputs,
    })
    return experience
  }
)

export const updateExperience = createAsyncThunk(
  'experiences/updateExperience',
  async ({ headers, id, ...inputs }) => {
    const { experience } = await client.request({
      headers,
      url: `/experiences/${id}`,
      method: 'PATCH',
      data: inputs,
    })
    return experience
  }
)

export const deleteExperience = createAsyncThunk(
  'experiences/deleteExperience',
  async ({ headers, id, ...rest }) => {
    await client.request({
      headers,
      url: `/experiences/${id}`,
      method: 'DELETE',
    })
    return id
  }
)

const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    setExperiences(state, action) {
      const { experiences } = action.payload
      state.experiences = experiences
    },
    clearExperiences(state, action) {
      state.experiences = []
      state.error = null
      state.fetchStatus = 'idle'
      state.updateStatus = 'idle'
      state.createStatus = 'idle'
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
  extraReducers: {
    [fetchExperiences.pending]: (state, action) => {
      state.fetchStatus = 'loading'
    },
    [fetchExperiences.fulfilled]: (state, action) => {
      state.fetchStatus = 'succeeded'
      state.experiences = action.payload
    },
    [fetchExperiences.rejected]: (state, action) => {
      state.fetchStatus = 'failed'
      state.error = action.error.message
    },
    [updateExperience.pending]: (state, action) => {
      state.updateStatus = 'loading'
    },
    [updateExperience.fulfilled]: (state, action) => {
      state.updateStatus = 'idle'
      const updatedExperience = action.payload
      const matchingIndex = state.experiences.findIndex(
        experience => experience.id === updatedExperience.id
      )
      const newExperiences = state.experiences
      newExperiences[matchingIndex] = updatedExperience
      state.experiences = newExperiences
    },
    [updateExperience.rejected]: (state, action) => {
      state.updateStatus = 'failed'
      state.error = action.error.message
    },
    [createExperience.pending]: (state, action) => {
      state.createStatus = 'loading'
    },
    [createExperience.fulfilled]: (state, action) => {
      state.createStatus = 'idle'
      const experience = action.payload
      state.experiences = [experience, ...state.experiences]
    },
    [createExperience.rejected]: (state, action) => {
      state.createStatus = 'failed'
      state.error = action.error.message
    },
    [deleteExperience.fulfilled]: (state, action) => {
      const id = action.payload
      const matchingIndex = state.experiences.findIndex(
        experience => experience.id === id
      )

      if (matchingIndex >= 0) {
        state.experiences = [
          ...state.experiences.slice(0, matchingIndex),
          ...state.experiences.slice(matchingIndex + 1),
        ]
      }
    },
  },
})

export const {
  setExperiences,
  setExperience,
  setNewExperienceImage,
  clearExperiences,
  setFilter,
} = experiencesSlice.actions

export default experiencesSlice.reducer

export const selectExperience = (state, experienceId) => {
  return (state.experiences.experiences || []).find(
    experience => experience.id === experienceId
  )
}
