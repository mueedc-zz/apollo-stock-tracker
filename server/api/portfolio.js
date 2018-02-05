const router = require('express').Router()
const { Stock, Portfolio } = require('../db/models')
module.exports = router

router.param('id', (req, res, next, id) => {
  Portfolio.findById(id)
    .then(portfolio => {
      req.portfolio = portfolio
      next()
      return null
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Portfolio.findAll()
    .then(portfolio => res.json(portfolio))
    .catch(next)
})

router.get('/session', (req, res, next) => {
  if (req.user) {
    Portfolio.findOne({
      where: {
        userId: req.user.id,
        status: 'open'
      }
    })
      .then(foundPortfolio => {
        if (foundPortfolio) req.session.portfolio = foundPortfolio.stock
        res.send(req.session.portfolio)
      })
      .catch(next)
  } else if (req.session.passport) {
    Portfolio.findOne({
      where: {
        userId: req.session.passport.user,
        status: 'open'
      }
    })
      .then(foundPortfolio => {
        if (foundPortfolio) req.session.portfolio = foundPortfolio.stock
        res.send(req.session.portfolio)
      })
      .catch(next)
  }
})

router.delete('/session', (req, res, next) => {
  req.session.portfolio = []
  res.send(req.session.portfolio)
})

router.post('/', (req, res, next) => {
  Portfolio.findOrCreate({
    where: {
      userId: req.user.id,
      status: 'open'
    }
  })
    .spread((portfolio, createdPortfolioBool) =>
      Stock.create(req.body).then(stock => stock.setPortfolio(portfolio))
    )
    .then(stock => {
      if (!req.session.portfolio) req.session.portfolio = []
      req.session.portfolio.push(stock)
      res.send(stock)
    })
    .catch(next)
})

router.put('/', (req, res, next) => {
  req.session.portfolio = req.session.portfolio.filter(
    stock => stock.symbol !== req.body.symbol
  )
  Stock.destroy({ where: { id: req.body.id } })
    .then(deletedRows => {
      deletedRows ? res.status(200).send('Stock removed') : res.sendStatus(204)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  req.portfolio
    .update(req.body)
    .then(port => res.json(port))
    .catch(next)
})

router.get('/user/:id', (req, res, next) => {
  Portfolio.findAll({ where: { id: +req.params.id, status: 'open' } })
    .then(portfolios => {
      let portfolioIds = portfolios.map(portfolio => portfolio.id)
      Stock.findAll().then(stocks => {
        let newStocks = stocks.filter(
          stock => portfolioIds.indexOf(stock.portfolioId) > -1
        )
        let portfoliosToSend = {}
        newStocks.forEach(
          stock => (portfoliosToSend[stock.symbol] = stock.marketOpenPrice)
        )
        const data = []
        let key = 1
        for (let id in portfoliosToSend) {
          data.push({ key: key++, symbol: id, buyPrice: portfoliosToSend[id] })
        }
        res.json(data)
      })
    })
    .catch(next)
})
