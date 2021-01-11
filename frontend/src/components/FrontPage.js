import React from 'react'
import { Link } from 'react-router-dom'

const FrontPage = () => {
  return(
    <div>
      Frontpage
      <br/>
      <Link to='/products/gloves'>Gloves</Link>
      <br/>
      <Link to='/products/facemasks'>Facemasks</Link>
      <br/>
      <Link to='/products/beanies'>Beanies</Link>
    </div>
  )
}

export default FrontPage