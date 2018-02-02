import axios from 'axios'
import {
  ADD_TO_PORTFOLIO,
  REMOVE_FROM_PORTFOLIO,
  UPDATE_PORTFOLIO,
  SET_SESSION_PORTFOLIO,
  CLEAR_PORTFOLIO,
  addToPortfolio,
  removeFromPortfolio,
  updatePortfolio,
  setSessionPortfolio,
  clearPortfolio,
} from '../actions/portfolio'
import { addId } from '../actions/portfolioId'

// Thunk middleware
export const fetchPortfolio = () => dispatch =>
  axios
    .get(`/api/portfolio/session`)
    .then(stocks => {
      console.log(stocks)
      dispatch(setSessionPortfolio(stocks.data))
      })
    .catch(error => console.error(`Fetching portfolio unsuccessful:`, error))

export const removeStock = stock => dispatch =>
  axios
    .put(`/api/portfolio`, stock)
    .then(stock => {
      console.log(stock)
      dispatch(removeFromPortfolio(stock))
    })
    .catch(error => console.error(`Removing ${stock} unsuccessful:`, error))

export async function getStock (symbol) {
  const res = await axios.get(`/api/stock/${symbol}`)
  const data = await res.data
  return data
}

export const addStock = symbol => async dispatch => {
  const stock = await getStock(symbol)
  console.log(stock)
  const res = await axios.post('/api/portfolio', {
    stock,
    userId: user.id
  })
  console.log('res:', res)
  const data = await res.data
  console.log('data:', data)
  dispatch(addToPortfolio(data))
  dispatch(addPortfolioId(data.portfolioId))
// return axios.post(`/api/stock`, stock)
  //   .then(res => {
  //     console.log('res:', res)
  //     dispatch(addToPortfolio(res.data))
  //     dispatch(addPortfolioId(res.data.portfolioId))
  //   })
  //   .catch(error => dispatch(addToPortfolio({ error })))
}

export const changePortfolio = stock => dispatch =>
  axios
    .put(`/api/stock/${stock.symbol}`, stock)
    .then(res => dispatch(updatePortfolio(res.data)))
    .catch(error => updatePortfolio({ error }))

export const logoutPortfolio = () => dispatch =>
  axios
    .delete(`/api/portfolio/session`)
    .then(() => dispatch(clearPortfolio()))
    .catch(() => dispatch(clearPortfolio()))

// Reducer
export default function(state = [], action) {
  switch (action.type) {
    case SET_SESSION_PORTFOLIO:
      return action.stocks
    case ADD_TO_PORTFOLIO:
      return [action.stock, ...state]
    case UPDATE_PORTFOLIO:
      return state.map(
        stock => (stock.symbol === action.stock.symbol ? action.stock : stock))
    case REMOVE_FROM_PORTFOLIO:
      console.log('state:', state)
      return portfolio.filter(stock => stock.symbol !== action.stock.symbol)
    case CLEAR_PORTFOLIO:
      return state
    default:
      return state
  }
}

