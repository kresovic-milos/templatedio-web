
export const SET_STEP = 'SET_STEP'

export function setStep(step) {
    return {
        type: SET_STEP,
        step
    }
}


export const UPLOAD_TEMPLATE = 'UPLOAD_TEMPLATE'

export function uploadTemplate(file) {
  return {
    type: UPLOAD_TEMPLATE,
    file
  }
}


export const LIST_LAYERS = 'LIST_LAYERS'

export function listLayers(id) {
  return {
    type: LIST_LAYERS,
    id
  }
}