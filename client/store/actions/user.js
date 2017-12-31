// action types
export const GET_USER = 'GET_USER'
export const REMOVE_USER = 'REMOVE_USER'

// action creators
export const getUser = user => ({ type: GET_USER, user })
export const removeUser = () => ({ type: REMOVE_USER })
