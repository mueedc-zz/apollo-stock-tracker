const db = require('../server/db')
const { User, Stock } = require('../server/db/models')

async function seed () {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      stock: ['AAPL', 'TSLA']
    }),
    User.create({ email: 'murphy@email.com', password: '123', stock: ['V'] })
  ])

  const stocks = await Promise.all([
    Stock.create({
      symbol: 'AAPL',
      currentPrice: 200,
      userId: 1
    }),
    Stock.create({
      symbol: 'V',
      currentPrice: 100,
      userId: 2
    }),
    Stock.create({
      symbol: 'TSLA',
      currentPrice: 280,
      userId: 1
    })
  ])

  // stocks.forEach(stock => stock.addUser(users))
  // users.forEach(user => user.addStock(stocks))

  console.log(`seeded ${users.length} users, and ${stocks.length} stocks`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
