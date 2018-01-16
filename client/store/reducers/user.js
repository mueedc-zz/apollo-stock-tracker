import axios from 'axios'
import history from '../../history'
import { GET_USER, REMOVE_USER, getUser, removeUser } from '../actions/user'
import { setSessionPortfolio } from '../actions/portfolio'

// thunk middleware
export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error(err))

export const auth = (userBody, method) => dispatch =>
  axios
    .post(`/auth/${method}`, userBody)
    .then(res => {
      console.log('userBody: ', userBody)
      dispatch(getUser(res.data))
      axios.put(`/api/portfolio/${userBody.portfolioId}`, {
        userId: res.data.id
      })
    })
    .then(() => {
      dispatch(setSessionPortfolio())
      history.push('/portfolio')
    })
    .catch(error => dispatch(getUser({ error })))

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(() => {
      dispatch(removeUser())
      history.push('/login')
    })
    .catch(err => console.error(err))

// reducer
export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return state
    default:
      return state
  }
}
