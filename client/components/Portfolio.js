import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfolioItem'
import AddToPortfolio from './AddToPortfolio'

const Portfolio = ({ portfolio, removeStock }) => (
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
         {portfolio &&
          portfolio.map(stock => (
            <PortfolioItem key={stock.id} stock={stock} />
            <button
              onClick={stock.id => removeStock(stock.id)}
            >
              Remove Stock
            </button>
          ))}
      </tbody>
    </table>
  </div>
)

const mapState = ({ portfolio }) => ({ portfolio })
const mapDispatch = { removeStock }

export default connect(mapState, mapDispatch)(Portfolio)

