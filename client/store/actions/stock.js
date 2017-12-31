// action types
export const GET_STOCK = 'GET_STOCK'
export const REMOVE_STOCK = 'REMOVE_STOCK'
export const ADD_STOCK = 'ADD_STOCK'
export const EDIT_STOCK = 'EDIT_STOCK'

// action creators
export const getStock = stock => ({ type: GET_STOCK, stock })
export const removeStock = () => ({ type: REMOVE_STOCK })
export const addStock = stock => ({ type: ADD_STOCK, stock })
export const editStock = stock => ({ type: EDIT_STOCK, stock })
