const Sequelize = require('sequelize')
const db = require('../db')

const Stock = db.define('stock', {
  symbol: {
    type: Sequelize.STRING,
    allowNull: false
  },
  marketOpenPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  sellPrice: Sequelize.DOUBLE,
  maxSinceBuy: Sequelize.INTEGER,
  sellPriceSinceMax: Sequelize.INTEGER
})

module.exports = Stock

// classMethod
Stock.setSellPrice = (stock, percentage) =>
  stock.currentPrice - stock.currentPrice * percentage

// hook
const setSell = stock => {
  if (stock.changed('currentPrice')) {
    stock.sellPrice = Stock.setSellPrice(stock, 0.25)
  }
}

Stock.beforeCreate(setSell)
Stock.beforeUpdate(setSell)
