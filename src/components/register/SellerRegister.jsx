import React from 'react';
import {useNavigate} from 'react-router-dom';

const SellerRegister = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="tab-pane fade" id="pills-regisSeller" role="tabpanel" aria-labelledby="pills-profile-tab">
        <form>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Name" type="text" />
          </div>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Email" type="email" />
          </div>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Phone number" type="text" />
          </div>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Store name" type="text" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" type="password" />
          </div>
          <div className="form-group">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>{' '}
            <button onClick={() => navigate('/home')} className="btn btn-danger btn-block rounded-pill">
              SIGN UP
            </button>
          </div>
        </form>
        <p className="text-regis">
          Already have blanja account?
          <span onClick={() => navigate('/login')} className="text-danger">
            {' '}
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default SellerRegister;
