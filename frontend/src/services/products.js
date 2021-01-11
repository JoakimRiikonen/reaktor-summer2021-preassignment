import axios from 'axios'

const getProducts = (category) => {
  const req = axios.get(`/products/${category}`)
  return req.then(res => res.data)
}

const exports = { getProducts }
export default exports