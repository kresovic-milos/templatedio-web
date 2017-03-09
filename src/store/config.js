import { createStore, applyMiddleware } from 'redux'
import planoom from '../modules/reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const logger = createLogger();

const configureStore = () => createStore(planoom, applyMiddleware(thunk, logger))

export default configureStore
