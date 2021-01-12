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
  const [error, setError] = useState("")

  useEffect(() => {
    setProducts([])
    setError("")
    productsService
      .getProducts(category)
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.log('aaa')
        if (error.response && error.response.status === 404) {
          setError("Product data was not found")
        }
        else{
          setError("Error fetching data. Please wait a minute and then refresh.")
        }
      })
  }, [category])
  
  return(
    <PageContainer>
      <Navbar/>
      <ProductTitle>{category.toUpperCase()}</ProductTitle>
      {!error && products.length === 0 &&
        <h2>Loading data</h2>
      }
      {error &&
        <h2>{error}</h2>
      }
      {products.length > 0 && 
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
      }
    </PageContainer>
  )
}

export default ProductsPage