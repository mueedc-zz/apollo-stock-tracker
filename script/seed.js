const db = require('../server/db')
const { User, Stock, Portfolio } = require('../server/db/models')

async function seed () {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123'
    }),
    User.create({
      email: 'fake@email.com',
      password: '321'
    })
  ])

  const portfolios = await Promise.all([
    Portfolio.create({ status: 'open', userId: 1 }),
    Portfolio.create({ status: 'open', userId: 2 }),
    Portfolio.create({ status: 'open', userId: 3 })
  ])

  const stocks = await Promise.all([
    Stock.create({
      symbol: 'AAPL',
      marketOpenPrice: 200,
      portfolioId: 1
    }),
    Stock.create({
      symbol: 'V',
      marketOpenPrice: 100,
      portfolioId: 2
    }),
    Stock.create({
      symbol: 'TSLA',
      marketOpenPrice: 280,
      portfolioId: 3
    }),
    Stock.create({
      symbol: 'FB',
      marketOpenPrice: 300,
      portfolioId: 3
    })
  ])

  console.log(
    `seeded ${users.length} users, ${stocks.length} stocks, and ${portfolios.length} portfolios`
  )
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
