const express = require('express')

const app = express()
app.get('/', (req, res) => {
  res.send('it works')
})

module.exports = (ctx, req, res) => {
  req.originalUrl = req.url
  req.ctx = ctx
  app(req, res)
}
