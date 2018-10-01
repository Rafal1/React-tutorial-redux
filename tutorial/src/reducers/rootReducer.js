import { combineReducers } from 'redux'
import history from './historyReducer'
import stepNumberReducer from './stepNumberReducer'
import xIsNextReducer from './xIsNextReducer'

export default combineReducers({
    history,
    stepNumberReducer,
    xIsNextReducer
})
