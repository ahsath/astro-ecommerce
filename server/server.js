const express = require('express')

const app = express()
const port = 8000

app.get('/navbar', (req, res) => {
  res.json(require('./data/navbar.json'))
})

app.get('/collection', (req, res) => {
  res.json(require('./data/collection.json'))
})

app.get('/arrivals', (req, res) => {
  res.json(require('./data/arrivals.json'))
})

app.get('/seasons', (req, res) => {
  res.json(require('./data/seasons.json'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})