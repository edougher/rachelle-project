import { useReducer } from 'react'
import { combineReducers, compose } from 'redux'
import userReducer from './userReducer'
import adventureReducer from './adventureReducer'



export default combineReducers({
    user: userReducer,
    adventure: adventureReducer
})