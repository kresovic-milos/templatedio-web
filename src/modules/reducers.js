import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const appReducers = combineReducers({  
  routing: routerReducer
})

export default appReducers
