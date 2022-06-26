const express = require('express')

const app = express()
const port = 8000

const categories = require('./data/categories.json')
const collections = require('./data/collections.json')

app.get('/categories', (req, res) => {
  res.json(categories)
})

app.get('/collections', (req, res) => {
  res.json(collections)
})

app.get('/collections/:collectionId', (req, res) => {
  const collectionId = req.params.collectionId
  const collection = collections.find(collection => collection.id === collectionId)
  res.json(collection)
})

app.get('/products', (req, res) => {
  res.json(require('./data/products.json'))
})

app.get('/seasons', (req, res) => {
  res.json(require('./data/seasons.json'))
})

app.get('/filters', (req, res) => {
  const filters = [
    { id: 'Todu', name: '', by: [{ name: 'Mostre Todu', pathname: '/Todu/1' }] },
    { id: 'Categorias', name: 'Categorias', by: categories },
    { id: 'Coleçāo', name: 'Coleçāo', by: collections }
  ]
  res.json(filters)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})