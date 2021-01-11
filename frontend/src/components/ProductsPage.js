import React, { useState, useEffect } from 'react'
import productsService from '../services/products'

const ProductsPage = ({ category }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    productsService
      .getProducts(category)
      .then((data) => {
        setProducts(data)
      })
  }, [])
  
  return(
    <div>
      <h1>{category}</h1>
      {products.map((product, i) => {
        return (
          <div key={i}>
            {product.name}
            <br/>
            colors:
            {product.color.map((c) => (c))}
            <br/>
            {product.manufacturer}
            <br/>
            {product.price}€
            <br/>
            {product.instockvalue}
            <br/>
            <br/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsPage