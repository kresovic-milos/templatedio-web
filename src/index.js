import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/config'
import injectTapEventPlugin from 'react-tap-event-plugin'


const store = configureStore()

injectTapEventPlugin()

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)