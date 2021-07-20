/* eslint-disable no-unused-vars */
import './App.scss';
import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import ButtonTop from './components/UI/ButtonTop/ButtonTop';
import {
  cartFromLocalStorageAction,
  hidePopupAction,
  setTotalCountCartAction,
  setTotalPriceCartAction,
} from './store/cart/actions';
import CartPopup from './components/UI/CartPopup/CartPopup';
import { userFromLocalStorageAction } from './store/admin/actions';
import { singleProductFromLocalStorageAction } from './store/singleProduct/actions';

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const popupIsOpen = useSelector((state) => state.cart.popupIsOpen);
  const currentUserFromRedux = useSelector((state) => state.admin.currentUser);
  const currentQuery = useSelector((state) => state.productsPage.currentQuery);
  // === USE EFFECT ========
  // const [currentQuery, setCurrentQuery] = useState('');
  const dispatch = useDispatch();

  let totalSum = 0;
  cart.forEach((item) => {
    totalSum += item.currentPrice * item.count;
  });
  useEffect(() => {
    dispatch(setTotalPriceCartAction(totalSum));
  }, [dispatch, totalSum]);
  let totalCount = 0;
  cart.forEach((item) => {
    totalCount += item.count;
  });
  useEffect(() => {
    dispatch(setTotalCountCartAction(totalCount));
  }, [dispatch, totalCount]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem('cart');
    const singleProductFromLocalStorage = localStorage.getItem('singleProduct');
    // console.log('singleProductFromLocalStorage', singleProductFromLocalStorage);
    if (cartFromLocalStorage) {
      dispatch(cartFromLocalStorageAction(cartFromLocalStorage));
    }
    if (singleProductFromLocalStorage) {
      const currenSingle = JSON.parse(singleProductFromLocalStorage);
      // console.log('SINGLE ', currenSingle);
      dispatch(
        singleProductFromLocalStorageAction(currenSingle)
      );
    }
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(hidePopupAction());
    }, 1500);
  }, [dispatch, popupIsOpen]);
  // === USER ===
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem('currentUser');
    if (userFromLocalStorage) {
      dispatch(userFromLocalStorageAction(JSON.parse(userFromLocalStorage)));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUserFromRedux));
  }, [currentUserFromRedux, dispatch]);

  return (
    <div className="wrapper">
      <CartPopup />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path={`/products${currentQuery}`}> */}
        {/* <Route exact path="/products"> */}
        <Route path="/products">
          <Products />
        </Route>
        <Route exact path="/single-product">
          <SingleProduct />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
      <ButtonTop />
    </div>
  );
}

export default App;
