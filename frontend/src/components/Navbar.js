import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <div>
      <Link to='/products/gloves'>Gloves</Link>
      <Link to='/products/facemasks'>Facemasks</Link>
      <Link to='/products/beanies'>Beanies</Link>
    </div>
  )
}

export default Navbar