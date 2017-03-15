import { SET_STEP, UPLOAD_TEMPLATE, UPLOAD_TEMPLATE_REQUEST, UPLOAD_TEMPLATE_SUCCESS, UPLOAD_TEMPLATE_FAILURE } from '../actions/actions'

export const currentStep = (state = {
  index: -1, path: '/wizard'
}, action) => {

  switch (action.type) {
    case SET_STEP:
    case UPLOAD_TEMPLATE_SUCCESS:
      return Object.assign({}, state, {
        index: action.step.index,
        path: action.step.path
      })
    default:
      return state
  }
}

export const template = (state = {
  isUploading: false
}, action) => {

  switch (action.type) {
    case UPLOAD_TEMPLATE_REQUEST:
      return Object.assign({}, state, {
        isUploading: action.isUploading,
        file: action.file
      })
    case UPLOAD_TEMPLATE_SUCCESS:
      return Object.assign({}, state, {
        isUploading: action.isUploading,
        template_guid: action.response
      })
    case UPLOAD_TEMPLATE_FAILURE:
      return Object.assign({}, state, {
        isUploading: action.isUploading, error: action.error
      })
    default:
      return state
  }
}