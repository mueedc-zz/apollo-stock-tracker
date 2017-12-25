// action types
export const GET_USER = 'GET_USER'
export const REMOVE_USER = 'REMOVE_USER'

// action creators
export const getUser = payload => ({ type: GET_USER, payload })
export const removeUser = () => ({ type: REMOVE_USER })
