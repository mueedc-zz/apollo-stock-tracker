import React from 'react'
import { connect } from 'react-redux'
import { removeStock } from '../store'

const PortfolioItem = ({ stock, remove }) => (
  <tr key={stock}>
    <td>{stock.symbol}</td>
    <td>{stock.marketOpenPrice}</td>
    <td>{+stock.marketOpenPrice - +stock.marketOpenPrice * 0.25}</td>
    <td>{console.log('stock high since buy')}</td>
    <td>{console.log('stock sell point since high since buy')}</td>
    <td>
      <button onClick={remove(stock)}>
        <span className='removeButton'>Remove Stock</span>
      </button>
    </td>
  </tr>
)

const mapDispatch = dispatch => ({
  remove(stock) {
    console.log(stock)
    dispatch(removeStock(stock))
  }
})
export default connect(null, mapDispatch)(PortfolioItem)
