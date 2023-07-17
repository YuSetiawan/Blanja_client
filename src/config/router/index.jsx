import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Product from '../../pages/Product';
import Detail from '../../pages/Detail';
import Cart from '../../pages/Cart';
import Order from '../../pages/Order';
import Profile from '../../pages/Profile';
import ProfileSeller from '../../pages/ProfileSeller';
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
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route
            path="/order"
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/profile/seller"
            element={
              <RequireAuth>
                <ProfileSeller />
              </RequireAuth>
            }
          />
          <Route path="/product/" element={<Product />} />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
