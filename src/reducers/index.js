
import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import adventuresReducer from './adventuresReducer'



export default combineReducers({
    users: usersReducer,
    adventures: adventuresReducer
})