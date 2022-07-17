const express = require('express')

const app = express()
const port = 8000

const categories = require('./data/categories.json')
const tags = require('./data/tags.json')

app.get('/categories', (req, res) => {
  res.json(categories)
})

app.get('/tags', (req, res) => {
  res.json(tags)
})

app.get('/tags/:tagName', (req, res) => {
  const tagName = req.params.tagName
  const tag = tags.find(tag => tag.name === tagName)

  res.json(tag)
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
    { id: 'Coleçāo', name: 'Tag', by: tags }
  ]
  res.json(filters)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})