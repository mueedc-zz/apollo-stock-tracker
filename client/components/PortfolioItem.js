import React from 'react'
import { connect } from 'react-redux'

const PortfolioItem = ({ stock, removeStock }) => ({
  <div>
  </div>
})

const mapState = ({ stock }) => ({ stock })
const mapDispatch = { removeStock }

export default connect(mapState, mapDispatch)(PortfolioItem)
