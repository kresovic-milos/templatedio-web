import { createStore, applyMiddleware } from 'redux'
import appReducers from '../modules/reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger();

const configureStore = () => createStore(appReducers, applyMiddleware(thunk, logger))

export default configureStore
