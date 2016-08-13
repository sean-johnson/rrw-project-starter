const express = require('express')
const path = require('path')
const config = require('../webpack/dev.config.js')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const colors = require('colors')

const app = express()

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000

console.log('-----------------------'.grey)
console.log('Server status: Ready'.green)
console.log('-----------------------'.grey)
console.log('Listening on port:'.green, port)
console.log('-----------------------'.grey)

app.listen(port, function(error) {
  if (error) {
    console.log("Port error: ".red, error)
  }
})
