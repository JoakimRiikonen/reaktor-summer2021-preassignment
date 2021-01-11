import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  border-bottom: 2px solid black;
  padding-top: 3px;
  padding-bottom: 10px;
  margin: 0 10px;
`

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 10px;
  margin: 0 5px;
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

`

const Navbar = () => {
  return(
    <Container>
      <StyledLink to='/products/gloves'>Gloves</StyledLink>
      <StyledLink to='/products/facemasks'>Facemasks</StyledLink>
      <StyledLink to='/products/beanies'>Beanies</StyledLink>
    </Container>
  )
}

export default Navbar