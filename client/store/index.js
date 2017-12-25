import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './reducers/user'

const reducer = combineReducers({ user })
const middleware = composeWithDevTools(
  applyMiddleware(thunk, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user'
