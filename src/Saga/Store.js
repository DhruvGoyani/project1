import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../Saga/Reducer/Root_Reducer'
import thunk from 'redux-thunk'
import rootsaga from './Root.Saga'
// import rootsaga from '../Root.Saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk , sagaMiddleware]

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
sagaMiddleware.run(rootsaga)

