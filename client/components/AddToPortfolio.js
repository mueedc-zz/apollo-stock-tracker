import React from 'react'
import { connect } from 'react-redux'
import { addStock } from '../store'

const AddToPortfolio = ({ handleSubmit }) => (
  <div>
    <form onSubmit={event => handleSubmit(event)}>
      <label>Enter a valid stock symbol</label>
      <input
        name="stock"
        type="text"
        placeholder="Enter a valid stock symbol"
      />
      <button type="submit">Add Stock</button>
    </form>
  </div>
)

const mapDispatch = dispatch => ({
  handleSubmit(event) {
    event.preventDefault()
    dispatch(addStock(event.target.stock.value))
  },
})
export default connect(null, mapDispatch)(AddToPortfolio)
