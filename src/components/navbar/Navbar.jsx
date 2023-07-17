import React from 'react';
import Logo from '../../assets/icon/logo.png';
import Search from '../../assets/icon/Search Glyph.png';
import Filter from '../../assets/icon/filter.svg';
import Cart from '../../assets/icon/cart.png';
import '../../assets/css/navbarStyle.css';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav id="home-nav" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="logo-blanja mr-5" onClick={() => navigate('/')}>
              <img src={Logo} height={50} className="d-inline-block align-top" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                <div className="nav-item ml-2 form-inline justify-content-center">
                  <input id="searchbox" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <img className="searchLogo" src={Search} alt="" />
                  <img className="mr-4" src={Filter} alt="filter" id="homeFilter" />
                </div>
              </div>
              <form className="form-inline my-2 my-lg-0 row justify-content-center">
                <div onClick={() => navigate('/cart')}>
                  <img className="mr-4" src={Cart} alt="cart" />
                </div>
                <button onClick={() => navigate('/login')} className="btn btn-danger rounded-pill mr-2">
                  Login
                </button>
                <button onClick={() => navigate('/register')} className="btn btn-outline-secondary rounded-pill">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
