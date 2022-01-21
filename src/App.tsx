import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Main } from './Main';
import { Checkout,Orders,Home,Details } from './pages';
import './App.css';

function App() {
  return (
    <Router>
        <Main>
           <Switch>
              <Route component={Home} path="/" exact />
              <Route component={Checkout} path="/checkout" exact />
              <Route component={Orders} path="/my-orders" exact />
              <Route component={Details} path="/product/:productId/details" exact />
           </Switch>
        </Main>
      </Router>
  );
}

export default App;
