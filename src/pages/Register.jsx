import React from 'react';
import Logo from '../assets/icon/logo.png';
import CustRegister from '../components/register/CustRegister';
import SellerRegister from '../components/register/SellerRegister';
import '../assets/css/formAuth.css';
import '../assets/css/buttonForm.css';

const Register = () => {
  return (
    <>
      <div className="container">
        <img id="formRegis" src={Logo} alt="logo" />
        <p className="text-center py-3">Please login with your account</p>
        {/* Button role */}
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link btn-danger active" id="pills-home-tab" data-toggle="pill" data-target="#pills-regisCust" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link btn-danger" id="pills-profile-tab" data-toggle="pill" data-target="#pills-regisSeller" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
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
