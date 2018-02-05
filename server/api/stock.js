const router = require('express').Router()
const Stock = require('../db/models/stock')
const getQuote = require('yahoo-finance').quote
module.exports = router

router.get('/', (req, res, next) => {
  Stock.findAll({ include: [{ all: true }] })
    .then(stock => res.json(stock))
    .catch(next)
})

router.use('/:symbol', (req, res, next) => {
  getQuote({ symbol: req.params.symbol, modules: ['price'] }, (err, quotes) => {
    err
      ? next(err)
      : res.json({
        symbol: quotes.price.symbol,
        marketOpenPrice: quotes.price.regularMarketOpen,
        dayHigh: quotes.price.regularMarketDayHigh
      })
  })
})

router.post('/', (req, res, next) => {
  Stock.create({
    symbol: req.body.symbol,
    marketOpenPrice: req.body.marketOpenPrice,
    portfolioId: req.body.portfolioId,
    dayHigh: req.body.dayHigh
  })
    .then(() => res.sendStatus(201))
    .catch(next)
})

router.delete('/:symbol', (req, res, next) => {
  Stock.delete(req.params.symbol)
    .then(() => res.sendStatus(204))
    .catch(next)
})
