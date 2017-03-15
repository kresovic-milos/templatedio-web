import axios from 'axios'

const DEBUG = true

const ROOT = "http://imagewizard.azurewebsites.net/api/"

let instance = axios.create({
  baseURL: ROOT,
  timeout: 25000,
  headers: {'Accept': 'application/json'}
})

export const fireRequest = (httpMethod, url, params, headers) => {

  instance.defaults.headers = headers

  logRequest(url, params)

  switch (httpMethod) {
    case 'GET':
      return get(url, params)
    case 'POST':
      return post(url, params)
    case 'PUT':
      return put(url, params)
    case 'DELETE':
      return deleteOne(url)
    default:
      break;
  }
}

const get = (url, params) => {
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

const post = (url, params) => {
  return instance.post(url, params)
  .then(response => {
        var parsedResp = response.data
        logResponse(response)
        return parsedResp
  })
}

const put = (url, params) => {
  return instance.put(url, params)
  .then(response => {
        var parsedResp = response.data
        logResponse(response)
        return parsedResp
  })
}

const deleteOne = (url) => {
  return instance.delete(url)
  .then(response => {
      logResponse(response)
      return {}
  })
}

const logRequest = (url, params) => {
  DEBUG && console.log("url " + url)
  DEBUG && console.log(JSON.stringify(params))
}

const logResponse = (response) => {
  DEBUG && console.log("http status " + response.status)
}