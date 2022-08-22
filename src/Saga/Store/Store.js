import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../Reducer/Root_Reducer'
import thunk from 'redux-thunk'
import rootsaga from '../Root.Saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk , sagaMiddleware]

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
)
sagaMiddleware.run(rootsaga)

const action = type => store.dispatch({type})
