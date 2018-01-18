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
    this.setState({ symbol: event.target.value })
  }

  return (
    <form onSubmit={event => this.props.handleSubmit(event)}>
      <label>Enter a valid stock symbol</label>
        <input
          name="stock"
          type="text"
          placeholder="Enter a valid stock symbol"
          onChange={event => this.handleChange(event)}
        />
      <button type="submit">Add Stock</button>
    </form>
  )
}

const mapDispatch = dispatch => {
  handleSubmit (event) {
    event.preventDefault()
    dispatch(addStock(event.target.value))
  }
} 

export default connect(null, mapDispatch)(AddToPortfolio)
