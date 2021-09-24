import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AllBrands } from "./AllBrands";
import { Homepage } from "./Homepage";
import { AllProducts } from "./AllProducts";
import { ProductDetails } from "./ProductDetails";
import { Category } from "./Category";
import { Checkout } from "./Checkout";
import { BrandProduct } from "./BrandProduct";
import { SearchBar } from "./SearchBar";
import { CategoryProduct } from "./CategoryProduct";
import { Cart } from "./Cart";
import { Register } from "./RegisterSignIn/Register";
import { LogInOut } from "./RegisterSignIn/LogInOut";
import { Confirmation} from "./Confirmation";

const App = () => {
  const [userLogIn, setUserLogIn] = useState({
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState();

  // Taxes
  const [tax, setTax] = useState();

  return (
    <BrowserRouter>
      <Header
        loginData={loginData}
        userLogIn={userLogIn}
        setLoginData={setLoginData}
      />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/brands">
          <AllBrands />
        </Route>
        <Route exact path="/brands/:_id">
          <BrandProduct />
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
        <Route exact path="/category/:name">
          <CategoryProduct />
        </Route>
        <Route exact path="/checkout">
          <Checkout setTax={setTax} tax={tax} />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation tax={tax} />
        </Route>
        <Route exact path="/login">
          <LogInOut
            setLoginData={setLoginData}
            userLogIn={userLogIn}
            setUserLogIn={setUserLogIn}
          />
        </Route>
        <Route path="">404: Oops!</Route>
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
