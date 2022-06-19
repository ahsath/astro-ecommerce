const express = require('express')

const app = express()
const port = 8000

app.get('/home', (req, res) => {
  res.json(require('./data/home.json'))
})

app.get('/navbar', (req, res) => {
  res.json(require('./data/navbar.json'))
})

app.get('/collection', (req, res) => {
  res.json(require('./data/collection.json'))
})

app.get('/arrivals', (req, res) => {
  res.json(require('./data/arrivals.json'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})