import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/config'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Home from './routes/home/Home'
import GetStarted from './routes/wizard/GetStarted'

const store = configureStore()

injectTapEventPlugin()

const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/getStarted" component={GetStarted}/>
    </Route>
        
</Router>
</Provider>,
  document.getElementById('root')
)