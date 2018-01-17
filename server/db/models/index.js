const User = require('./user')
const Stock = require('./stock')
const Portfolio = require('./portfolio')

// associations
User.hasMany(Portfolio, { as: 'portfolio' })
Portfolio.hasMany(Stock, { as: 'stock' })
Stock.belongsTo(Portfolio)

module.exports = {
  User,
  Stock,
  Portfolio
}
