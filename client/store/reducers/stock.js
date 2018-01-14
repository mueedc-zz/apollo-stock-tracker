import axios from 'axios'
import {
  GET_STOCK,
  REMOVE_STOCK,
  ADD_STOCK,
  EDIT_STOCK,
  getStock,
  removeStock,
  addStock,
  editStock
} from '../actions/stock'

// thunk middleware
export const grabStock = () => dispatch =>
  axios
    .get(`/api/users`)
    .then(res => dispatch(getStock(res.data)))
    .catch(err => console.error(`Retrieving portfolio unsuccessful: `, err))

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

export const updateStock = symbol => dispatch =>
  axios
    .put(`/api/stock/${symbol.id}`, symbol)
    .then(res => dispatch(editStock(res.data)))
    .catch(err =>
      console.error(`Updating ${symbol} price unsuccessful: `, err)
    )

// reducer
export default function (state = [], action) {
  switch (action.type) {
    case GET_STOCK:
      return action.stock
    case ADD_STOCK:
      return [action.stock, ...state]
    case REMOVE_STOCK:
      return state.filter(stock => stock.symbol !== action.stock.symbol)
    case EDIT_STOCK:
      return state.map(
        stock => (stock.symbol === action.stock.symbol ? action.stock : stock)
      )
    default:
      return state
  }
}
