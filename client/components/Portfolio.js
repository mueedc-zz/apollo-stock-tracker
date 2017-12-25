import React from 'react'
import { connect } from 'react-redux'

const Portfolio = () => (
  <div>
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
      <tbody>{console.log('stock info goes here')}</tbody>
    </table>
  </div>
)

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(Portfolio)
