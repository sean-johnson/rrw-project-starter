const express = require('express')
const path = require('path')
const colors = require('colors')

const app = express()

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
