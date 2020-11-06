import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './components/Home';
import Detail from './components/Detail';
import Register from './components/Register';
import Form from './components/Form'
import Login from './components/Login'
import Cart from './components/Cart'
import Checkout from './components/Checkout'



export default function App() {
  
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={Form} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  )
}