import { SET_STEP, UPLOAD_TEMPLATE } from '../actions/actions'

const initialState = {
  step: -1
}

const setStep = (state = initialState, action) => {
  
switch (action.type) {
    case SET_STEP:
    return Object.assign({}, state, {
        step: action.step
      })       
    default:
      return state
  }
}

export default setStep