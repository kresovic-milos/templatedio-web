import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './index.css'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/config'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Home from './routes/home/Home'
import Wizard from './routes/wizard/containers/Wizard'
import ChooseTemplate from './routes/wizard/components/ChooseTemplate'
import ChooseDataSource from './routes/wizard/components/ChooseDataSource'

const store = configureStore()

injectTapEventPlugin()

const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home}/>
      <Route path="/wizard" component={Wizard}>
        <IndexRedirect to="/chooseTemplate" />
        <Route path="/chooseTemplate" component={ChooseTemplate}/>
        <Route path="/chooseDataSource" component={ChooseDataSource}/>
      </Route>
    </Route>
        
</Router>
</Provider>,
  document.getElementById('root')
)