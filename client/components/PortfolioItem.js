import React from 'react'
import { connect } from 'react-redux'
import { removeStock } from '../store'

const PortfolioItem = ({ stock, removeStock }) => (
  <tr>
    <td>{stock.symbol}</td>
    <td>{stock.marketOpenPrice}</td>
    <td>{+stock.marketOpenPrice - +stock.marketOpenPrice * 0.25}</td>
    <td>{console.log('stock high since buy')}</td>
    <td>{console.log('stock sell point since high since buy')}</td>
    <td>
      <button onClick={() => removeStock(stock.symbol)}>
        <span className='removeButton'>Remove Stock</span>
      </button>
    </td>
  </tr>
)

const mapDispatch = { removeStock }
export default connect(null, mapDispatch)(PortfolioItem)
