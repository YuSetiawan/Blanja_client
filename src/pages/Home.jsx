import React from 'react';
import Carousel from '../components/home/Carousel';
import Category from '../components/home/Category';
import Navbar from '../components/navbar/Navbar';
import '../assets/css/globalStyle.css';
import ProductCard from '../components/home/ProductCard';
import NavbarLogin from '../components/navbar/NavbarLogin';

const Home = () => {
  const isLogin = localStorage.getItem('token');
  if (!isLogin) {
    return (
      <>
        {/* Navbar */}
        <Navbar />
        <main>
          {/* Carousel */}
          <section>
            <Carousel />
          </section>
          {/* Category */}
          <section className="mt-5">
            <Category />
          </section>
          {/* New product */}
          <section className="mt-3">
            <div className="container">
              <h2 className="ml-3">You can also like this</h2>
              <p className="ml-3">You've never seen before!</p>
              <div className="container mt-5">
                <ProductCard />
              </div>
            </div>
          </section>
          <section className="mt-3">
            {/* populer */}
            <div className="container">
              <h2 className="ml-3">Populer</h2>
              <p className="ml-3">Find Clothes that are you tranding recently!</p>
              <div className="container mt-5">
                <ProductCard />
              </div>
            </div>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        {/* Navbar */}
        <NavbarLogin />
        <main>
          {/* Carousel */}
          <section>
            <Carousel />
          </section>
          {/* Category */}
          <section className="mt-5">
            <Category />
          </section>
          {/* New product */}
          <section className="mt-3">
            <div className="container">
              <h2 className="ml-3">You can also like this</h2>
              <p className="ml-3">You've never seen before!</p>
              <div className="container mt-5">
                <ProductCard />
              </div>
            </div>
          </section>
          <section className="mt-3">
            {/* populer */}
            <div className="container">
              <h2 className="ml-3">Populer</h2>
              <p className="ml-3">Find Clothes that are you tranding recently!</p>
              <div className="container mt-5">
                <ProductCard />
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default Home;
