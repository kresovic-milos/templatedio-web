import * as RESTClient from './RESTClient'

const ROOT = "http://imagewizard.azurewebsites.net/api/"

const UPLOAD = ROOT + "upload"
export const uploadTemplate = (file) => RESTClient.post(UPLOAD, file)

const LIST_LAYERS = "process/listLayers"
export const listLayers = (id) => RESTClient.get(LIST_LAYERS, id)