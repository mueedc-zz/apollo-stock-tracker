import React from 'react'
import { connect } from 'react-redux'


const PortfolioItem = ({ stock, addStockToPortfolio, removeStock }) => ({
  <div>
  </div>
})

const mapState = ({ stock }) => ({ stock })
const mapDispatch = { addStockToPortfolio, removeStock }

export default connect(mapState, mapDispatch)(PortfolioItem)
