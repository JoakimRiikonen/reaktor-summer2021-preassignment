import axios from 'axios'

const getProducts = (category) => {
  const req = axios.get(`/products/${category}`)
  return req.then(res => res.data)
}

export default { getProducts }