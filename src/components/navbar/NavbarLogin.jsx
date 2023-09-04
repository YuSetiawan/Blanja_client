import React, {useEffect, useState} from 'react';
import Logo from '../../assets/icon/logo.png';
import Search from '../../assets/icon/Search Glyph.png';
import Filter from '../../assets/icon/filter.svg';
import Cart from '../../assets/icon/cart.png';
import Bell from '../../assets/icon/bell.png';
import Mail from '../../assets/icon/mail.png';
import Profile from '../../assets/img/Profile.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const NavbarLogin = () => {
  const navigate = useNavigate();
  const isSeller = localStorage.getItem('role');
  const idUser = localStorage.getItem('id');
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-moth-tuxedo.cyclic.app/users/${idUser}`)
      .then((res) => {
        setUser(res.data.data[0]);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const logOut = () => {
    localStorage.clear();
    Swal.fire({
      title: 'Account already logout',
      showConfirmButton: false,
      icon: 'success',
      target: '#custom-target',
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        container: 'position-absolute',
      },
      toast: true,
      position: 'bottom-right',
    });
  };

  return (
    <>
      <nav id="home-nav" className="navbar nav justify-content-center fixed-top navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container">
          <a className="logo-blanja mr-5" onClick={() => navigate('/')}>
            <img src={Logo} height={50} className="d-inline-block align-top" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-3 mt-lg-0">
              <li className="nav-item ml-2 form-inline row justify-content-center">
                <input id="searchbox" className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                <img className="searchLogo" src={Search} alt="" />
                <img id="homeFilter" className="mr-4" src={Filter} alt="filter" />
              </li>
            </ul>
            <form className="form-inline mt-2 d-flex justify-content-center">
              <a onClick={() => navigate('/cart')}>
                <img className="p-3 m-0 " src={Cart} alt="cart" />
              </a>
              <img className="p-3 m-0" src={Bell} alt="bell" />
              <img className="p-3 m-0" src={Mail} alt="mail" />
              {isSeller == 'seller' ? (
                <a onClick={() => navigate('/profile/seller')}>
                  {!user.photo ? <img className="p-3 m-0" src={Profile} alt="profile" /> : <img className="mr-2" src={user.photo} height={32} width={32} style={{borderRadius: '50%'}} alt="profile" />}
                </a>
              ) : (
                <a onClick={() => navigate('/profile')}>
                  {!user.photo ? <img className="p-3 m-0" src={Profile} alt="profile" /> : <img className="mr-2" src={user.photo} height={32} width={32} style={{borderRadius: '50%'}} alt="profile" />}{' '}
                </a>
              )}
              <button className="btn btn-danger rounded-pill" onClick={logOut}>
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogin;
