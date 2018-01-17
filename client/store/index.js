import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './reducers/user'
import portfolio from './reducers/portfolio'

const reducer = combineReducers({ user, portfolio })
const middleware = composeWithDevTools(
  applyMiddleware(thunk, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user'
export * from './reducers/portfolio'
