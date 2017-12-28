import axios from 'axios'
import R from 'ramda'
import {
  GET_STOCK,
  REMOVE_STOCK,
  ADD_STOCK,
  getStock,
  removeStock,
  addStock
} from '../actions/stock'

const defaultState = {
  symbol: '',
  price: ''
}

// thunk middleware
export const grabStock = symbol => dispatch =>
  axios
    .get(`/api/stock/${symbol}`)
    .then(res => dispatch(getStock(res.data)))
    .catch(err => console.error(`Retrieving ${symbol} unsuccessful: `, err))

export const addStockToPortfolio = symbol => dispatch =>
  axios
    .post(`/api/stock`, symbol)
    .then(res => dispatch(addStock(res.data)))
    .catch(err => console.error(`Adding ${symbol} unsuccessful: `, err))

export const deleteStock = symbol => dispatch =>
  axios
    .delete(`/api/stock/${symbol}`)
    .then(() => dispatch(removeStock()))
    .catch(err => console.error(`Deletion unsuccessful: `, err))

// reducer
export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_STOCK:
      return action.payload
    case ADD_STOCK:
      return Object.assign({}, state, {
        symbol: action.payload.symbol,
        price: action.payload.price
      })
    case REMOVE_STOCK:
      return R.omit([action.payload.symbol], state)
    default:
      return state
  }
}
