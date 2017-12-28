const User = require('./user')
const Stock = require('./stock')

// associations
User.hasMany(Stock, {
  as: 'stock',
  onDelete: 'cascade',
  hooks: true,
  constraints: false
})
Stock.belongsTo(User)

Stock.belongsToMany(User, { through: 'UserStocks' })
User.belongsToMany(Stock, { through: 'UserStocks' })

module.exports = {
  User,
  Stock
}
