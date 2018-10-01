import { combineReducers } from 'redux'
import history from './historyReducer'
import stepNumberReducer from './stepNumberReducer'

export default combineReducers({
    history,
    stepNumberReducer
})
