import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Brands } from "./Brands";
import { Homepage } from "./Homepage";
import { AllProducts } from "./AllProducts";
import { ProductDetails } from "./ProductDetails";
import { Category } from "./Category";
import { Checkout } from "./Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/brands/:_id">
          <Brands />
        </Route>
        <Route exact path="/details/:_id">
          <ProductDetails />
        </Route>
        <Route exact path="/products">
          <AllProducts />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route exact path="/category/:_id">
          <Category />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="">404: Oops!</Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;