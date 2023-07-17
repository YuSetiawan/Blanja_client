import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

const CustRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let onClick = (e) => {
    axios
      .post('http://localhost:4000/user/register', data)
      .then((res) => {
        swal({
          title: 'Register Succesful',
          text: 'You can login to your account!',
          icon: 'Success',
          button: 'Login Now!',
        });
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response);
        alert('gagal register');
      });
  };
  return (
    <>
      <div className="tab-pane fade show active" id="pills-regisCust" role="tabpanel" aria-labelledby="pills-home-tab">
        <form>
          <div className="form-group">
            <input name="name" className="form-control" placeholder="name" type="text" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="email" className="form-control" placeholder="email" type="email" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="password" className="form-control" placeholder="password" type="password" onChange={onChange} />
          </div>
          <div className="form-group">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>{' '}
            <button onClick={onClick} className="btn btn-danger btn-block rounded-pill">
              SIGN UP
            </button>
          </div>
        </form>
        <p className="text-regis">
          Already have blanja account?
          <span onClick={() => navigate('/login')} className="text-danger" href="/pages/signUp.html">
            {' '}
            Login
          </span>
        </p>
      </div>
    </>
  );
};

export default CustRegister;
