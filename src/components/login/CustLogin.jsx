import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const CustLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  let [token, setToken] = useState('');
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let onClick = (e) => {
    axios
      .post('http://localhost:4000/user/login', data)
      .then((res) => {
        alert('Login succes');
        localStorage.setItem('token', res.data.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        alert('Login Failed');
      });
  };
  return (
    <>
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <form>
          <div className="form-group">
            <input name="" className="form-control" placeholder="Email" type="email" onChange={onChange} />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" type="password" onChange={onChange} />
          </div>
          <div className="form-group mb-0">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>
            <button onClick={onClick} className="btn btn-danger btn-block rounded-pill">
              LOGIN
            </button>
          </div>
        </form>
        <p className="text-regis">
          Don't have blanja account?
          <span onClick={() => navigate('/register')} className="text-danger">
            {' '}
            Register
          </span>
        </p>
      </div>
    </>
  );
};

export default CustLogin;
