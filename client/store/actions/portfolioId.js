export const ADD = 'ADD_PORTFOLIOID'
export const REMOVE = 'REMOVE_PORTFOLIO_ID'

export const addId = portfolioId => ({ type: ADD, portfolioId })
export const removeId = () => ({ type: REMOVE })
