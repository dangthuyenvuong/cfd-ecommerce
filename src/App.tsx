import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Provider as ReduxProvider, useSelector } from 'react-redux'

import Header from "./components/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Category from "./pages/category/Category";
import Details from "./pages/details/Details";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./components/Cart";
import Login from "./pages/login/Login";
import Api from "./helper/Api";
import { loadCategories } from "./actions/categoriesAction";

import { useDispatch } from "react-redux";
const routes = [
  { path: "/the-loai/:cat?", name: "Category", Component: Category },
  { path: "/chi-tiet/:slug", name: "ProductDetails", Component: Details },
  { path: "/thanh-toan", name: "Check Out", Component: Checkout },
  { path: "/dang-nhap", name: "Login", Component: Login },
  { path: "/", name: "Home", Component: Home },
];
function App() {

  let [cartState, setCartState] = useState(false);
  let dispatch = useDispatch();

  useEffect(() => {
    Api('categories').get()
      .then((res: any) => {
        dispatch(loadCategories(res));
      })
  }, [])


  return (
    <Router>
      <Cart cartState={cartState} setCartState={setCartState} />
      <Header setCartState={setCartState} />
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
