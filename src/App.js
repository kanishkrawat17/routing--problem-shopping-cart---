import React from "react";
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SingleProduct from "./components/SingleProduct.jsx"
import Description from "./components/Description.jsx";
import Cart from "./components/Cart.jsx";

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <SingleProduct />
          <Route exact path='/description/:id'>
            <Description />
          </Route>
          <Route exact path = "/cart" > <Cart/> </Route>
      </ Switch>
      </Router>
    </>
  );
}
