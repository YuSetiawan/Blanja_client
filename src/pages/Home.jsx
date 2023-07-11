import React from 'react';
import Carousel from '../components/home/Carousel';
import Category from '../components/home/Category';
import Populer from '../components/home/Populer';
import Recomendation from '../components/home/Recomendation';
import Navbar from '../components/navbar/Navbar';
import '../assets/css/globalStyle.css';

const Home = () => {
  return (
    <>
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
            <Recomendation />
          </section>
          <section className="mt-3">
            {/* populer */}
            <Populer />
          </section>
        </main>
      </>
    </>
  );
};

export default Home;
