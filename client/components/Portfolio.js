import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfolioItem'
import AddToPortfolio from './AddToPortfolio'

const Portfolio = ({ stock }) => (
  <div>
    <AddToPortfolio />
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Threshhold</th>
          <th>High Since Buy</th>
          <th>High Threshhold</th>
        </tr>
      </thead>
      <tbody>
        <PortfolioItem />
      </tbody>
    </table>
  </div>
)

const mapState = ({ stock }) => ({ stock })
const mapDispatch = null

export default connect(mapState, mapDispatch)(Portfolio)
