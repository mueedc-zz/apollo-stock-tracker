const User = require('./user')
const Stock = require('./stock')
const Portfolio = require('./portfolio')

// associations
User.hasMany(Portfolio, { as: 'portfolio' })
Stock.belongsTo(User)

Portfolio.hasMany(Stock, { as: 'stock' })

Stock.belongsToMany(User, { through: 'UserStocks' })
User.belongsToMany(Stock, { through: 'UserStocks' })

module.exports = {
  User,
  Stock,
  Portfolio
}
