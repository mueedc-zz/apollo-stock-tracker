import React from 'react'
import { connect } from 'react-redux'
import { addStockToPortfolio } from '../store'

const AddToPortfolio = ({ addStockToPortfolio }) => (
  <div>{console.log(addStockToPortfolio)}</div>
)

const mapDispatch = { addStockToPortfolio }

export default connect(null, mapDispatch)(AddToPortfolio)
