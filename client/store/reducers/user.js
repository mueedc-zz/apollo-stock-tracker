import axios from 'axios'
import history from '../../history'
import { GET_USER, getUser, removeUser } from '../actions/user'

// thunk middleware
export const me = () => dispatch =>
  axios
    .get('/api/me')
    .then(res => dispatch(getUser(res.data)))
    .catch(err => console.error(err))

export const auth = (userBody, method) => dispatch =>
  axios
    .post(`/api/${method}`, userBody)
    .then(res => {
      console.log('userBody: ', userBody)
      dispatch(getUser(res.data))
    })
    .catch(error => dispatch(getUser({ error })))

export const logout = () => dispatch =>
  axios
    .post('/api/logout')
    .then(() => {
      dispatch(removeUser())
      history.push('/')
    })
    .catch(err => console.error(err))

// reducer
export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload
    default:
      return state
  }
}
