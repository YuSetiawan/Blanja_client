import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Product from '../../pages/Product';
import Detail from '../../pages/Detail';
import DetailProduct from '../../pages/DetailProduct';
import Cart from '../../pages/Cart';
import Order from '../../pages/Order';
import Profile from '../../pages/Profile';
import Page404 from '../../pages/Page404';
import RequireAuth from '../../components/RequireAuth';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
