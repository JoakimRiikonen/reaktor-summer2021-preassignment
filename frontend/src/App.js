import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
import ProductsPage from './components/ProductsPage'
import styled from 'styled-components'

const Container = styled.div`
  font-family: Helvetica;
`

const App = () => {
  return(
    <Container>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() => (
            <FrontPage/>
          )}/>
          <Route exact path='/products/:category' render={({ match }) => (
            <ProductsPage category={match.params.category}/>
          )}/>
          <Route>
            <div>
              Page not found
            </div>
          </Route>
        </Switch>
      </Router>
    </Container>
  )
} 

export default App;
