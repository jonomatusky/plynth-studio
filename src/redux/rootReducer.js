import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import experienceReducer from './experienceSlice'
import alertReducer from './alertSlice'
import planReducer from './planSlice'

const rootReducer = combineReducers({
  user: userReducer,
  experiences: experienceReducer,
  alert: alertReducer,
  plan: planReducer,
})

export default rootReducer
