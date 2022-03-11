import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import experienceReducer from './experienceSlice'
import alertReducer from './alertSlice'

const rootReducer = combineReducers({
  user: userReducer,
  experiences: experienceReducer,
  alert: alertReducer,
})

export default rootReducer
