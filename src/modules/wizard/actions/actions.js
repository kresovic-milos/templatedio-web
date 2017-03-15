import { uploadTemplatePromise } from '../../../networking/TemplateAPI'
import { Steps } from '../../../utils/ConstantsWizard'

export const SET_STEP = 'SET_STEP'
export const setStep = (step) => {
  return {
    type: SET_STEP,
    step
  }
}


export const UPLOAD_TEMPLATE = 'UPLOAD_TEMPLATE'
export const uploadTemplate = (file) => (dispatch) => {

  dispatch(uploadTemplateRequest(file))

  let params = new FormData()
  params.append('file', file)

  return uploadTemplatePromise(params).then(response => {
    console.log('response', response)
    dispatch(uploadTemplateSuccess(response))
  }).catch(error => {
    console.log('error', error)
    dispatch(uploadTemplateFailure(error))
  })
}

export const UPLOAD_TEMPLATE_REQUEST = 'UPLOAD_TEMPLATE_REQUEST'
export const uploadTemplateRequest = (file) => ({
  type: UPLOAD_TEMPLATE_REQUEST,
  isUploading: true,
  file
})

export const UPLOAD_TEMPLATE_SUCCESS = 'UPLOAD_TEMPLATE_SUCCESS'
export const uploadTemplateSuccess = (response) => ({
  type: UPLOAD_TEMPLATE_SUCCESS,
  isUploading: false,
  step: Steps.CHOOSE_LAYERS,
  response
})

export const UPLOAD_TEMPLATE_FAILURE = 'UPLOAD_TEMPLATE_FAILURE'
export const uploadTemplateFailure = (error) => ({
  type: UPLOAD_TEMPLATE_FAILURE,
  isUploading: false,
  error
})

export const LIST_LAYERS = 'LIST_LAYERS'
export const listLayers = (id) => {
  return {
    type: LIST_LAYERS,
    id
  }
}

export const LIST_LAYERS_REQUEST = 'LIST_LAYERS_REQUEST'
export const listLayersRequest = (id) => {
  return {
    type: LIST_LAYERS_REQUEST,
    id
  }
}

export const LIST_LAYERS_SUCCESS = 'LIST_LAYERS_SUCCESS'
export const listLayersSuccess = (response) => {
  return {
    type: LIST_LAYERS_SUCCESS,
    response
  }
}

export const LIST_LAYERS_FAILURE = 'LIST_LAYERS_FAILURE'
export const listLayersFailure = (error) => {
  return {
    type: LIST_LAYERS_FAILURE,
    error
  }
}