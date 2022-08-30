import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../Saga/Reducer/Root_Reducer'
import thunk from 'redux-thunk'
import rootsaga from './Root.Saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
 


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk , sagaMiddleware]

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
)

export let persistor = persistStore(store);

sagaMiddleware.run(rootsaga)

