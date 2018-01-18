import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStock } from '../store'

class AddToPortfolio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      symbol: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    console.log('changing symbol:', event.target.value)
    this.setState({ symbol: event.target.value })
  }

  render () {
    const { addStock } = this.props
    return (
      <div>
        <form onSubmit={() => addStock(this.state.symbol)}>
          <label>Enter a valid stock symbol</label>
            <input
              name="stock"
              type="text"
              placeholder="Enter a valid stock symbol"
              onChange={event => this.handleChange(event)}
            />
          <button type="submit">Add Stock</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = { addStock }
export default connect(null, mapDispatch)(AddToPortfolio)

