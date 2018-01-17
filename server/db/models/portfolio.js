const Sequelize = require('sequelize')
const db = require('../db')
const Stock = require('./stock')

const Portfolio = db.define(
  'portfolio',
  {
    status: Sequelize.ENUM('open', 'closed')
  },
  {
    defaultScope: {
      include: [{ model: Stock, as: 'stock' }]
    }
  }
)

module.exports = Portfolio
