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
        {console.log('stock:', stock)
        stock &&
        stock.map(stck => (<PortfolioItem key={stck.id} stock={stck} />))
        }
      </tbody>
    </table>
  </div>
)

const mapState = ({ stock }) => ({ stock })

export default connect(mapState)(Portfolio)
