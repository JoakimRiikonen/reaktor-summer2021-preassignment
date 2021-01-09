const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
const productsService = require('./productsService')

app.get("/products/:category", (req, res) => {
  const products = productsService.getCategory(req.params.category)
  products.then((data) => {
    res.status(200).json(data)
  })
})

module.exports = app