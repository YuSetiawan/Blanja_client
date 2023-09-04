import React from 'react';
import Logo from '../assets/icon/logo.png';
import CustRegister from '../components/register/CustRegister';
import SellerRegister from '../components/register/SellerRegister';
import '../assets/css/formAuth.css';
import '../assets/css/buttonForm.css';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <div id="formLogin" className="container">
        <img src={Logo} alt="logo" onClick={() => navigate('/')} />
        <p className="text-center py-3">Please login with your account</p>
        {/* Button role */}
        <ul className="nav nav-pills mb-3 justify-content-center text-dark" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link btn-danger active text-dark" id="pills-home-tab" data-toggle="pill" data-target="#pills-regisCust" type="button" role="tab" aria-controls="pills-regisCust" aria-selected="true">
              Customer
            </button>
          </li>
          <li className="nav-item " role="presentation">
            <button className="nav-link btn-danger text-dark" id="pills-profile-tab" data-toggle="pill" data-target="#pills-regisSeller" type="button" role="tab" aria-controls="pills-regisSeller" aria-selected="false">
              Seller
            </button>
          </li>
        </ul>
        {/* Content */}
        <div className="tab-content" id="pills-tabContent">
          <CustRegister />
          <SellerRegister />
        </div>
      </div>
    </>
  );
};

export default Register;
