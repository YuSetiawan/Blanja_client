import React from 'react';
import bigProfile from '../../assets/img/Big-profile.png';

const SellerProfile = () => {
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
                <div className="form-group row">
                  <label htmlFor="inputName" className="col-sm-3 col-form-label text-secondary">
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputName" placeholder="Johanes Mikael" />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label htmlFor="inputEmail" className="col-sm-3 col-form-label text-secondary">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputEmail" placeholder="johanes@gmail.com" />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label htmlFor="inputPhone" className="col-sm-3 col-form-label text-secondary">
                    Phone number
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="inputPhone" placeholder="08901289012" />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <label htmlFor="inputStoreDesc" className="col-sm-3 col-form-label text-secondary">
                    Store description
                  </label>
                  <div className="col-sm-9">
                    <textarea type="email" className="form-control" id="inputStoreDesc" placeholder="Input your store description here" />
                  </div>
                </div>
              </div>
              {/* Right Profile */}
              <div className="col-md-3 border-left">
                <img className="pl-5 mb-3" src={bigProfile} alt="" />
                <button type="button" className="btn btn-outline-secondary rounded-pill ml-5" style={{width: 'fit-content'}}>
                  Select image
                </button>
              </div>
              <div className="col-sm-2" />
              <div className="col-sm-2 mt-3">
                <button type="button" className="btn btn-danger rounded-pill w-100" style={{width: 'fit-content'}}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
