// action types
export const GET_STOCK = 'GET_STOCK'
export const REMOVE_STOCK = 'REMOVE_STOCK'
export const ADD_STOCK = 'ADD_STOCK'

// action creators
export const getStock = payload => ({ type: GET_STOCK, payload })
export const removeStock = () => ({ type: REMOVE_STOCK })
export const addStock = payload => ({ type: ADD_STOCK, payload })
