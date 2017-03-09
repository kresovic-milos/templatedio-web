import axios from 'axios'
import { ROOT } from './Urls'

const DEBUG = false

let instance = axios.create({
  baseURL: ROOT,
  timeout: 5000,
  headers: {'Accept': 'application/json'}
})
instance.defaults.headers.common['Content-Type'] = 'application/json'

export const get = (url, params) => {
  logRequest(url, params)
  return instance.get(url, {data: params})
  .then(response => {
        var parsedResp = response.data !== undefined && response.data.content !== undefined ? response.data.content : response.data
        
        logResponse(response)
        
        return parsedResp
  })
  // .then(function(json) {
  //   callback(json !== undefined && json.content !== undefined ? json.content : json)
  // }).catch(function(ex) {
  //   console.log('parsing failed ', ex.message)
  // });
}

export const post = (url, params) => {
  logRequest(url, params)
  return instance.post(url, params)
  .then(response => {
        var parsedResp = response.data
        logResponse(response)
        return parsedResp
  })
}

export const put = (url, params) => {
  logRequest(url, params)
  return instance.put(url, params)
  .then(response => {
        var parsedResp = response.data
        logResponse(response)
        return parsedResp
  })
}

export const deleteOne = (url) => {
  logRequest(url, params)
  return instance.delete(url)
  .then(response => {
      logResponse(response)
      return {}
  })
}

logRequest(url, params) {
  DEBUG && console.log("url " + url)
  DEBUG && console.log(JSON.stringify(params))
}

logResponse(reponse) {
  DEBUG && console.log("http status " + response.status)
}