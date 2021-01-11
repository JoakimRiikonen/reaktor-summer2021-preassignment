import React, { useState, useEffect } from 'react'
import productsService from '../services/products'
import styled from 'styled-components'

const PageContainer = styled.div`
  text-align: center;
`

const ProductTitle = styled.h1`
  font-size: 45px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px;
  margin: 4px auto;
  font-size: 20px;
`

const ItemAttribute = styled.span`
  padding: 0 10px;
`

const ItemName = styled(ItemAttribute)`
  font-weight: bold;
`

const ItemManufacturer = styled(ItemAttribute)`
  text-transform: capitalize;
`

const InStockDisplay = styled.span`
  color: green;
`

const LessThan10Display = styled.span`
  color: orange;
`

const OutOfStockDisplay = styled.span`
  color: red;
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

  /*
    takes the raw instockvalue of a product as a parameter and
    returns a properly formatted div
  */
  const inStockFormat = (inStockValue) => {
    switch(inStockValue){
      case "INSTOCK":
        return(<InStockDisplay>IN STOCK</InStockDisplay>)
      case "LESSTHAN10":
        return(<LessThan10Display>LESS THAN 10</LessThan10Display>)
      case "OUTOFSTOCK":
        return(<OutOfStockDisplay>OUT OF STOCK</OutOfStockDisplay>)
      default:
        return(<></>)
    }
  }
  
  return(
    <PageContainer>
      <ProductTitle>{category.toUpperCase()}</ProductTitle>
      <div>
        {products.map((product, i) => {
          return (
            <ItemContainer key={i}>
              <div>
                <ItemName>{product.name}</ItemName>
                <ItemManufacturer>
                  Manufacturer: 
                  {" " + product.manufacturer}
                </ItemManufacturer>
                <ItemAttribute>
                  Colors:
                  {product.color.map((c, j) => (
                    (j < product.color.length-1) ? (" " + c + ',') : (" " + c))
                  )}
                </ItemAttribute>
                <ItemAttribute>
                  Price:
                  {" " + product.price}€
                </ItemAttribute>
                </div>
              {inStockFormat(product.instockvalue)}
            </ItemContainer>
          )
        })}
      </div>
    </PageContainer>
  )
}

export default ProductsPage