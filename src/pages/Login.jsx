import React from 'react';
import CustLogin from '../components/login/CustLogin';
import SellerLogin from '../components/login/SellerLogin';
import Logo from '../assets/icon/logo.png';
import '../assets/css/formAuth.css';
import '../assets/css/buttonForm.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="formLogin" className="container">
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
        <p className="text-center py-3">Please login with your account</p>
        {/* Button role */}
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item border border-secondary rounded" role="presentation">
            <button className="nav-link btn-danger active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Customer
            </button>
          </li>
          <li className="nav-item border border-secondary rounded" role="presentation">
            <button className="nav-link btn-danger" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              Seller
            </button>
          </li>
        </ul>
        {/* Content */}
        <div className="tab-content" id="pills-tabContent">
          <CustLogin />
          <SellerLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
