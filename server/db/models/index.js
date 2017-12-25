const User = require('./user')
const Stock = require('./stock')

User.hasMany(Stock, { as: 'stock' })

module.exports = {
  User,
  Stock
}
