const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
const CronJob = require('cron').CronJob
const productsService = require('./productsService')

//data from the legacy api is stored in a cache for faster performance
let gloves = []
let facemasks = []
let beanies = []

//a function that updates the product caches
const refreshProducts = () => {
  console.log('updating product cache')
    productsService.getCategoryWithAvailability("gloves")
    .then((data) => {
      gloves = data
      console.log('updating gloves done')
    })
    productsService.getCategoryWithAvailability("facemasks")
    .then((data) => {
      facemasks = data
      console.log('updating facemasks done')
    })
    productsService.getCategoryWithAvailability("beanies")
    .then((data) => {
      beanies = data
      console.log('updating beanies done')
    })
}

//a node-cron job refreshes the cache every 5 minutes
var getProductsJob = new CronJob(
  '0 */5 * * * *',
  () => {
    refreshProducts()
  },
  null,
  true
)

refreshProducts()

app.get("/products/:category", (req, res) => {
  /* const products = productsService.getCategoryWithAvailability(req.params.category)
  products.then((data) => {
    res.status(200).json(data)
  }) */
  switch (req.params.category) {
    case "gloves":
      (gloves.length > 0) ? res.status(200).json(gloves) : res.status(503).json(gloves)
      break
    case "facemasks":
      (facemasks.length > 0) ? res.status(200).json(facemasks) : res.status(503).json(facemasks)
      break
    case "beanies":
      (beanies.length > 0) ? res.status(200).json(beanies) : res.status(503).json(beanies)
      break
    default:
      res.status(404).send("Not found.")
      break
  }
  
})

module.exports = app