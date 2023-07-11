import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ItemOrder from '../components/order/ItemOrder';
import MakeOrder from '../components/order/MakeOrder';

const Order = () => {
  return (
    <>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <section className="mt-5">
            <br />
            <br />
            <div className="container">
              <h2 className="mt-2 pl-3">Check Out</h2>
              <h5 className="mt-2 pl-3">Shipping address</h5>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="row">
                <ItemOrder />
                <MakeOrder />
              </div>
            </div>
          </section>
        </main>
        <footer />
      </>
    </>
  );
};

export default Order;
