import React from "react";
import Layout from './layout.jsx';
import { Router, Route, browserHistory } from 'react-router'
import Products from "./components/pages/products.jsx";
import Home from "./components/pages/home.jsx";
import Company from "./components/pages/company.jsx";
import Item from "./components/pages/item.jsx";
import Checkout from "./components/pages/checkout.jsx";
import Receipt from "./components/pages/receipt.jsx";

const Routes = (
  <Router history={browserHistory}>
  <Route handler={Layout}>
  <Route name="home"
    path="/"
    handler={Home} />
  <Route name="company"
    path="company"
    handler={Company} />
  <Route name="products"
    path="products"
    handler={Products} />
  <Route name="item"
    path="item/:id"
    handler={Item} />
  <Route name="checkout"
    path="checkout"
    handler={Checkout} />
  <Route name="receipt"
    path="receipt"
    handler={Receipt} />
</Route>
  </Router>
);

export default Routes;