import React from 'react'
import { connect } from 'react-redux'
import PortfolioItem from './PortfolioItem'
import AddToPortfolio from './AddToPortfolio'

const Portfolio = ({ portfolio }) => (
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
        {console.log('portfolio:', portfolio)
        portfolio &&
        portfolio.map(stock => (<PortfolioItem key={stock.symbol} portfolio={stock} />))
        }
      </tbody>
    </table>
  </div>
)

const mapState = ({ portfolio }) => ({ portfolio })
export default connect(mapState)(Portfolio)
