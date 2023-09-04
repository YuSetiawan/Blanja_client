import React, {useEffect, useState} from 'react';
import medProfile from '../../assets/img/Medium-profile.png';
import pen from '../../assets/icon/pen.png';
import home from '../../assets/icon/home.png';
import box from '../../assets/icon/package.png';
import whiteCart from '../../assets/icon/shopping-cart-white.png';
import '../../assets/css/sideProfile.css';
import axios from 'axios';

const Sidebar = () => {
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
  return (
    <>
      <div className="col-md-3 col-12 sm-0 pt-5 bg-white">
        <div id="nav-content" className="container ml-4 ">
          <div className="row d-flex align-items-center mb-3">
            {!user.photo ? <img className="pb-3 m-4" src={medProfile} alt="" /> : <img className="m-3" height={70} width={70} style={{borderRadius: '50%'}} src={user.photo} alt="" />}
            <div className="pr-5">
              <h5>{user.fullname}</h5>
              <div className="form-inline">
                <img className="pb-3" src={pen} alt="" />
                <p className="">Change profile</p>
              </div>
            </div>
          </div>
          <div className="list-group align-items-center" id="list-tab" role="tablist">
            <a className="list-group-item btn btn-light list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-primary" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={home} alt="" />
                </button>
                <p className="pt-3 ml-3">Store</p>
              </div>
            </a>
            <a className="list-group-item btn btn-light list-group-item-action" id="list-Product-list" data-toggle="list" href="#list-Shipping" role="tab" aria-controls="Shipping" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-warning" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={box} alt="" />
                </button>
                <p className="pt-3 ml-3">Addres</p>
              </div>
            </a>
            <a className="list-group-item btn btn-light list-group-item-action" id="list-order-list" data-toggle="list" href="#list-order" role="tab" aria-controls="order" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-danger" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={whiteCart} alt="" />
                </button>
                <p className="pt-3 ml-3">Order</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
