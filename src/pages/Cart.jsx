import React from 'react';
import ItemCart from '../components/cart/ItemCart';
import CheckOut from '../components/cart/CheckOut';
import NavbarLogin from '../components/navbar/NavbarLogin';

const Cart = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <NavbarLogin />
      </header>
      <main>
        <section className="mt-5">
          <br />
          <div className="container">
            <br />
            <h2 className="mt-2">My bag</h2>
          </div>
        </section>
        {/* Checkout */}
        <section>
          <div className="container mt-4">
            <div className="row">
              <ItemCart />
              <CheckOut />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
