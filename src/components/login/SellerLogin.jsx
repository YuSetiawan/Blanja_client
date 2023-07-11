import React from 'react';
import {useNavigate} from 'react-router-dom';

const SellerLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <form>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Email" type="email" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" type="password" />
          </div>
          <div className="form-group mb-0">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>
            <button onClick={() => navigate('/home')} className="btn btn-danger btn-block rounded-pill">
              LOGIN
            </button>
          </div>
        </form>
        <p className="text-regis">
          Don't have blanja account?
          <span onClick={() => navigate('/register')} className="text-danger" href="/pages/signUp.html">
            {' '}
            Register
          </span>
        </p>
      </div>
    </>
  );
};

export default SellerLogin;
