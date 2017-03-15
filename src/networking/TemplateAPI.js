import * as RESTClient from './RESTClient'

const UPLOAD = "upload"
export const uploadTemplatePromise = (params) => RESTClient.fireRequest('POST', UPLOAD, params, {'Content-Type':'multipart/form-data'})

const LIST_LAYERS = "process/listLayers"
export const listLayersPromise = (id) => RESTClient.fireRequest('GET', LIST_LAYERS, {'id': id}, {'Content-Type':'application/json'})