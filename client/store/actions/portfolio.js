// action types
export const ADD_TO_PORTFOLIO = 'ADD_TO_PORTFOLIO'
export const REMOVE_FROM_PORTFOLIO = 'REMOVE_FROM_PORTFOLIO'
export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO'
export const SET_SESSION_PORTFOLIO = 'SET_SESSION_PORTFOLIO'
export const CLEAR_PORTFOLIO = 'CLEAR_PORTFOLIO'

// action creators

export const setSessionPortfolio = stocks => ({ type: SET_SESSION_PORTFOLIO, stocks })
export const addToPortfolio = stock => ({ type: ADD_TO_PORTFOLIO, stock })
export const removeFromPortfolio = stock => ({ type: REMOVE_FROM_PORTFOLIO, stock })
export const updatePortfolio = stock => ({ type: UPDATE_PORTFOLIO, stock })
export const clearPortfolio = () => ({ type: CLEAR_PORTFOLIO })

