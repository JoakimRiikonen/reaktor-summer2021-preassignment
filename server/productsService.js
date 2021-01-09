const axios = require('axios')

const instance = axios.create({
  baseURL: "https://bad-api-assignment.reaktor.com/v2/products/"
})

const getCategory = (category) => {
  const request = instance.get(category)
  return request.then((res) => res.data)
}

module.exports.getCategory = getCategory