import React, { useState, useEffect } from 'react'
import productsService from '../services/products'
import styled from 'styled-components'
import Product from './Product'
import Navbar from './Navbar'

const PageContainer = styled.div`
  text-align: center;
`

const ProductTitle = styled.h1`
  font-size: 45px;
`

const ProductsPage = ({ category }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([])
    productsService
      .getProducts(category)
      .then((data) => {
        setProducts(data)
      })
  }, [category])
  
  return(
    <PageContainer>
      <Navbar/>
      <ProductTitle>{category.toUpperCase()}</ProductTitle>
      <div>
        {products.map((product, i) => {
          return (
            <Product
              key={i}
              name={product.name}
              manufacturer={product.manufacturer}
              color={product.color}
              price={product.price}
              instockvalue={product.instockvalue}
            />
          )
        })}
      </div>
    </PageContainer>
  )
}

export default ProductsPage