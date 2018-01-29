import { ADD, REMOVE, addId, removeId } from '../actions/portfolioId'

export default function (state = null, action) {
  switch (action.type) {
    case ADD:
      return action.portfolioId
    case REMOVE:
      return state
    default:
      return state
  }
}
