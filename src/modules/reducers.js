import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { currentStep, template } from './wizard/reducers/reducer_wizard'

const appReducers = combineReducers({
  currentStep, template,
  routing: routerReducer
})

export default appReducers
