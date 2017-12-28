import React from 'react'
import { connect } from 'react-redux'
import { stock, removeStock } from '../store'

const PortfolioItem = ({ stock, removeStock }) => (
  <div>{console.log('portfolio item')}</div>
)

const mapState = ({ stock }) => ({ stock })
const mapDispatch = { removeStock }

export default connect(mapState, mapDispatch)(PortfolioItem)
