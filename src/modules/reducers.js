import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import reducer_step from './wizard/reducers/reducer_step'

const appReducers = combineReducers({
  reducer_step,
  routing: routerReducer
})

export default appReducers
