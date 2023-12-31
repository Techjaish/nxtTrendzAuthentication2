import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Product} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
