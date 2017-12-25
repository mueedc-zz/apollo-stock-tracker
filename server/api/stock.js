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
    err ? next(err) : res.send({ quotes })
  })
})
