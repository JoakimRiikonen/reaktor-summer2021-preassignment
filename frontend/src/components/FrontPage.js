import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Title = styled.h1`
  padding: 20px;
  font-size: 45px;
`

const StyledLink = styled(Link)`
  display: block;
  width: 30%;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 30px;
  padding: 10px;
  margin: 20px auto;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

const FrontPage = () => {
  return(
    <Container>
      <Title>Warehouse Management App</Title>
      <StyledLink to='/products/gloves'>Gloves</StyledLink>
      <StyledLink to='/products/facemasks'>Facemasks</StyledLink>
      <StyledLink to='/products/beanies'>Beanies</StyledLink>
    </Container>
  )
}

export default FrontPage