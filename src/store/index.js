import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import init from './reducers'
const logger = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      return next(action)
    }
  }
}
export default createStore(
  combineReducers({
    init,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
)
