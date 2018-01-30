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
        if (foundPortfolio) req.session.portfolio = foundPortfolio
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
      if (foundPortfolio) req.session.portfolio = foundPortfolio
      res.send(req.session.portfolio)
    })
    .catch(next)
  } 
  else res.send(req.session.portfolio)
})

router.delete('/session', (req, res, next) => {
  req.session.portfolio = []
  res.send(req.session.portfolio)
})

router.post('/', (req, res, next) => {
  if (req.body.userId) {
    Portfolio.findOrCreate({
      where: {
        userId: req.body.userId,
        status: 'open'
      }
    })
      .spread((portfolio, createdPortfolioBool) =>
        Stock.create(req.body).then(stock => stock.setPortfolio(portfolio))
      )
      .then(stock => {
        req.session.portfolio.push(stock)
        res.json(stock)
      })
      .catch(next)
  } else if (!req.body.portfolioId) {
    Portfolio.findOrCreate({
      where: {
        userId: req.user.id,
        status: 'open'
      }
    })
      .then(portfolio =>
        Stock.create(req.body).then(stock => stock.setPortfolio(portfolio))
      )
      .then(stock => {
        console.log('req:', req.user.portfolio)
        req.user.portfolio.push(stock)
        res.json(stock)
      })
      .catch(next)
  } else {
    Portfolio.findById(req.user.portfolio)
      .then(portfolio => 
        Stock.create(req.body)
          .then(stock => stock.setPortfolio(portfolio))
      )
      .then(stock => {
        req.user.portfolio.push(stock)
        res.json(stock)
      })
      .catch(next)
  }
})

router.put('/', (req, res, next) => {
  console.log(req.session)
  req.session.portfolio = req.session.portfolio.filter(
    sessionStock => sessionStock.id !== req.body.id
  )
  Stock.destroy({ where: { id: req.body.id } })
    .then(deletedRows => {
      deletedRows ? res.status(200).send('Stock removed') : res.sendStatus(204)
    })
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  req.portfolio.update(req.body)
    .then(port => res.json(port))
    .catch(next)
})

router.get('/user/:id', (req, res, next) => {
  Portfolio.findAll({ where: { id: +req.params.id, status: 'open' } })
    .then(portfolios => {
      let portfolioIds = portfolios.map(portfolio => portfolio.id)
      Stock.findAll()
        .then(stocks => {
          let newStocks = stocks.filter(stock =>
            portfolioIds.indexOf(stock.portfolioId) > -1)
          let portfoliosToSend = {}
          newStocks.forEach(stock => portfoliosToSend[stock.symbol] = stock.marketOpenPrice)
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

