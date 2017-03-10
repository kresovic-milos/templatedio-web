import * as RESTClient from './RESTClient'

const UPLOAD = "upload"
export const uploadTemplate = (file) => RESTClient.fireRequest('POST', UPLOAD, {'file': file}, {'Content-Type':'multipart/form-data'})

const LIST_LAYERS = "process/listLayers"
export const listLayers = (id) => RESTClient.fireRequest('GET', LIST_LAYERS, {'id': id}, {'Content-Type':'application/json'})