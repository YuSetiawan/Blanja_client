import React, {useEffect, useState} from 'react';
import bigProfile from '../../assets/img/Big-profile.png';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

const CustProfile = () => {
  const idUser = localStorage.getItem('id');
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-moth-tuxedo.cyclic.app/users/${idUser}`)
      .then((res) => {
        setUser(res.data.data[0]);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [data, setData] = useState({
    fullname: '',
    email: '',
    phone: '',
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
      .put(`https://stormy-moth-tuxedo.cyclic.app/users/customer/${idUser}`, data)
      .then((res) => {
        Swal.fire({
          title: 'Personal info changed',
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
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Personal info failed to change',
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

  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    const img = e.target.files[0];
    setPhoto(img);
    setPreview(URL.createObjectURL(img));
  };

  const handleSubmitUserImg = (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      if (photo) {
        formData.append('photo', photo);
      }
      axios.put(`https://stormy-moth-tuxedo.cyclic.app/users/profile/${idUser}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Swal.fire({
        title: 'Photo profile changed',
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
      setTimeout(function () {
        window.location.reload();
      }, 1000);
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: 'Update photo profile failed',
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
    }
  };
  return (
    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      <div className="container ml-3">
        <div className="card pl-3 shadow">
          <div className="card-body">
            <div className="pt-3 border-bottom">
              <h3>My profile</h3>
              <p className="text-secondary">Manage your profile information</p>
            </div>
            {/* Left Profile */}
            <div className="row pt-5">
              <div className="col-md-8 col 12">
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-3 col-form-label text-secondary">
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" id="inputName" placeholder={user.fullname} value={data.fullname} name="fullname" onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-secondary">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input type="email" className="form-control" id="inputEmail" placeholder={user.email} value={data.email} name="email" onChange={onChange} />
                    </div>
                  </div>
                  <div className="form-group row mt-4">
                    <label htmlFor="inputPhone" className="col-sm-3 col-form-label text-secondary">
                      Phone number
                    </label>
                    <div className="col-sm-9">
                      {!user.phone ? (
                        <input type="text" className="form-control" id="inputPhone" placeholder="phone number not added" name="phone" onChange={onChange} />
                      ) : (
                        <input type="text" className="form-control" id="inputPhone" placeholder={user.phone} value={data.phone} name="phone" onChange={onChange} />
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 my-4 mx-auto">
                    <button type="submit" className="btn btn-danger rounded-pill w-100" style={{width: 'fit-content'}}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
              {/* Right Profile */}
              <div className="col-md-3 border-left">
                {!user.photo ? <img className="pl-5 mb-3" src={bigProfile} alt="" /> : <img className=" mb-3" height={120} width={120} style={{borderRadius: '50%'}} src={user.photo} alt="" />}
                <form onSubmit={handleSubmitUserImg} className="text-center">
                  <label className="form-label">Upload Image</label>
                  <div className="col-12 text-center">
                    <input className="form-control mb-3" type="file" id="formFile" name="photo" onChange={handleUpload} required />
                    {preview ? <img src={preview} alt="avatar" height={120} width={120} className="my-2" style={{borderRadius: '50%', width: '100'}} /> : ''}
                  </div>
                  <Button className="btn btn-danger rounded-pill w-100" type="submit">
                    Edit Photo Profile
                  </Button>
                </form>
              </div>
              <div className="col-sm-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustProfile;
