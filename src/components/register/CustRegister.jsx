import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const CustRegister = () => {
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPasword] = useState('');
  const [isError, setIsError] = useState('');
  const [data, setData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'customer',
  });

  const checkValidation = (e) => {
    const confirm = e.target.value;
    setConfirmPasword(confirm);
    const cek = data.password;
    if (cek !== confirm) {
      setIsError('Password not match!');
    } else {
      setIsError('');
    }
  };

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const cek = data.password;

    if (cek !== confirmPassword) {
      return;
    }
    axios
      .post('https://stormy-moth-tuxedo.cyclic.app/users/register', data)
      .then((res) => {
        Swal.fire({
          title: 'Account created',
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
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response);
        Swal.fire({
          title: 'Account failed to create',
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
      <div className="tab-pane fade show active" id="pills-regisCust" role="tabpanel" aria-labelledby="pills-home-tab">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="fullname" className="form-control" placeholder="Full name" type="text" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="email" className="form-control" placeholder="email" type="email" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="password" className="form-control" placeholder="password" type="password" onChange={onChange} />
          </div>
          <div className="form-group">
            <input name="Confirm password" className="form-control" placeholder="Confirm password" type="password" onChange={(e) => checkValidation(e)} />
            <p className="text-danger">{isError}</p>
          </div>
          <div className="form-group">
            <p className="float-right py-3 text-danger mb-0" href="#">
              Forgot password?
            </p>{' '}
            <button type="submit" className="btn btn-danger btn-block rounded-pill">
              SIGN UP
            </button>
          </div>
          <p className="text-regis">
            Already have blanja account?
            <span onClick={() => navigate('/login')} className="text-danger">
              {' '}
              Login
            </span>{' '}
          </p>
        </form>
      </div>
    </>
  );
};

export default CustRegister;
