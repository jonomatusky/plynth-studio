import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  isOpen: false,
}

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    openPlans(state, action) {
      state.isOpen = true
    },
    closePlans(state, action) {
      state.isOpen = false
    },
  },
})

export const { openPlans, closePlans } = planSlice.actions

export default planSlice.reducer
