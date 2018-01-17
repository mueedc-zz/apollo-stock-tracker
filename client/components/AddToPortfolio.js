import React from 'react'
import { connect } from 'react-redux'
import { addStockToPortfolio } from '../store'

const AddToPortfolio = ({ addStock }) => (
  <form name="Add new stock">
    <label>
      Enter a valid stock symbol
      <input
        name="stock"
        type="text"
        placeholder="Enter a valid stock symbol"
      />
    </label>
    <button type="submit" onSubmit={() => addStock(value)}>
      <span className="addButton" />
    </button>
  </form>
)

const mapDispatch = { addStock }

export default connect(null, mapDispatch)(AddToPortfolio)
