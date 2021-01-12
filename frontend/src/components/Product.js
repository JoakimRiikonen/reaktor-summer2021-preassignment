import React from 'react'
import styled from 'styled-components'

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

const Product = (props) => {


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
    <ItemContainer>
      <div>
        <ItemName>{props.name}</ItemName>
        <ItemManufacturer>
          Manufacturer: 
          {" " + props.manufacturer}
        </ItemManufacturer>
        <ItemAttribute>
          Colors:
          {props.color.map((c, j) => (
            (j < props.color.length-1) ? (" " + c + ',') : (" " + c))
          )}
        </ItemAttribute>
        <ItemAttribute>
          Price:
          {" " + props.price}€
        </ItemAttribute>
        </div>
      {inStockFormat(props.instockvalue)}
    </ItemContainer>
  )
}

export default Product