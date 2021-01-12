import axios from 'axios'

const getProducts = (category) => {
  const req = axios.get(`/products/${category}`, { timeout: 10000 })
  return req.then(res => res.data)
}

const exports = { getProducts }
export default exports