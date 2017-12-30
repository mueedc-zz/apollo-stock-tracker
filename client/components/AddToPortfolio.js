import React from 'react'
import { connect } from 'react-redux'
import { addStockToPortfolio } from '../store'

const AddToPortfolio = ({ addStockToPortfolio }) => (
  <form name="Add new stock">
    <label>
      Enter a valid stock symbol
      <input
        name="stock"
        type="text"
        placeholder="Enter a valid stock symbol"
      />
    </label>
    <button type="submit">
      <span className="addButton" />
    </button>
  </form>
)

const mapDispatch = { addStockToPortfolio }

export default connect(null, mapDispatch)(AddToPortfolio)
