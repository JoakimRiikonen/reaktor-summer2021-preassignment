import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Product from './Product'

describe('<Product/>', () => {
  test('renders content', () => {
    const product = {
      name: "PRODUCTNAME",
      manufacturer: "PRODUCTMANUFACTURER",
      color: ['red', 'green'],
      price: 100,
      instockvalue: "INSTOCK"
    }

    const component = render(
      <Product
        name={product.name}
        manufacturer={product.manufacturer}
        color={product.color}
        price={product.price}
        instockvalue={product.instockvalue}
      />
    )

    //contains product name
    expect(component.container).toHaveTextContent(
      'PRODUCTNAME'
    )

    //contains product manufacturer
    expect(component.container).toHaveTextContent(
      'PRODUCTMANUFACTURER'
    )

    //contains product colors
    expect(component.container).toHaveTextContent(
      'green'
    )
    expect(component.container).toHaveTextContent(
      'red'
    )

    //contains product manufacturer
    expect(component.container).toHaveTextContent(
      '100'
    )

    //contains product instockvalue in proper format
    expect(component.container).toHaveTextContent(
      'IN STOCK'
    )
  })
})
