import React from 'react'
import { connect } from 'react-redux'
import { removeStock } from '../store'

const PortfolioItem = ({ stock, removeStock }) => (
  <tr>
    <td>{console.log('stock symbol', stock.symbol)}</td>
    <td>{console.log('stock price', stock.price)}</td>
    <td>{console.log('stock sell point')}</td>
    <td>{console.log('stock high since buy')}</td>
    <td>{console.log('stock sell point since high since buy')}</td>
    <td>
      <button>
        <span className="removeButton" />
      </button>
    </td>
  </tr>
)

const mapDispatch = { removeStock }

export default connect(null, mapDispatch)(PortfolioItem)
