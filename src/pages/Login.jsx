import React from 'react';
import CustLogin from '../components/login/CustLogin';
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
        <div className="tab-content" id="pills-tabContent">
          <CustLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
