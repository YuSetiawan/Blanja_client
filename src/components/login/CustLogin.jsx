import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const CustLogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
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

  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://stormy-moth-tuxedo.cyclic.app/users/login', data)
      .then((res) => {
        Swal.fire({
          title: 'Login Success, you can shop now!',
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
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('id', res.data.data.id);
        localStorage.setItem('role', res.data.data.role);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Email/Password incorrect',
          showConfirmButton: false,
          icon: 'error',
          target: '#custom-target',
          timer: 2000,
          timerProgressBar: true,
          customClass: {
            container: 'position-absolute',
          },
          toast: true,
          position: 'bottom-right',
        });
      });
  };
  return (
    <>
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="email" value={data.email} className="form-control" placeholder="Email" type="email" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="password" value={data.password} className="form-control" placeholder="Password" type="password" onChange={onChange} />
          </div>
          <div className="form-group mb-0">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>
            <button type="submit" className="btn btn-danger btn-block rounded-pill">
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
