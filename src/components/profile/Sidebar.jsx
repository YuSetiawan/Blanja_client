import React from 'react';
import medProfile from '../../assets/img/Medium-profile.png';
import pen from '../../assets/icon/pen.png';
import userIcon from '../../assets/icon/user.png';
import locationIcon from '../../assets/icon/location.png';
import orderIcon from '../../assets/icon/order.png';

const Sidebar = () => {
  return (
    <>
      <div className="col-md-3 col-12 sm-0 pt-5 bg-white">
        <div id="nav-content" className="container ml-4">
          <div className="row d-flex align-items-center mb-5 pl-4">
            <img className="pb-3" src={medProfile} alt="" />
            <div className="ml-3">
              <h5>Johanes Mikael</h5>
              <div className="form-inline">
                <img className="pb-3" src={pen} alt="" />
                <p className="ml-2">Change profile</p>
              </div>
            </div>
          </div>
          <div className="list-group align-items-center" id="list-tab" role="tablist">
            <a className="list-group-item btn btn-light list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-primary" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={userIcon} alt="" />
                </button>
                <p className="pt-3 ml-3">My account</p>
              </div>
            </a>
            <a className="list-group-item btn btn-light list-group-item-action" id="list-Shipping-list" data-toggle="list" href="#list-Shipping" role="tab" aria-controls="Shipping" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-warning" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={locationIcon} alt="" />
                </button>
                <p className="pt-3 ml-3">Shipping address</p>
              </div>
            </a>
            <a className="list-group-item btn btn-light list-group-item-action" id="list-order-list" data-toggle="list" href="#list-order" role="tab" aria-controls="order" style={{border: 'none'}}>
              <div className="form-inline">
                <button className="rounded-circle btn btn-danger" style={{border: 'none'}} alt="">
                  <img className="pb-1 pt-1" src={orderIcon} alt="" />
                </button>
                <p className="pt-3 ml-3">My order</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
