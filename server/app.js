const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send("Server")
})

module.exports = app