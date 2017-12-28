import React from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
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
        {console.log(stock)
        // stock &&
        // R.mapObjIndexed(
        //   (value, key) => <PortfolioItem key={key} stock={value} />,
        //   stock
        // )
        }
      </tbody>
    </table>
  </div>
)

const mapState = ({ stock }) => ({ stock })
const mapDispatch = null

export default connect(mapState, mapDispatch)(Portfolio)
