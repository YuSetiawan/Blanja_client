import React from 'react';
import gopay from '../../assets/img/Gopay.png';
import pos from '../../assets/img/POSin.png';
import master from '../../assets/img/Master.png';

const MakeOrder = () => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Shopping summary</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text text-secondary">Order</p>
            <h5 className="card-title">Rp 400.000</h5>
          </div>
          <div className="d-flex justify-content-between border-bottom">
            <p className="card-text text-secondary">Delivery</p>
            <h5 className="card-title">Rp 50.000</h5>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <h5 className="card-title">Shopping summary</h5>
            <h5 className="card-title text-danger">Rp 450.000</h5>
          </div>
          {/* Button trigger modal */}
          <button className="btn btn-danger rounded-pill mt-2 w-100" data-toggle="modal" data-target="#exampleModal">
            Select Payment
          </button>
          {/* Modal */}
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header border-bottom">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Payment
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="method">
                    <h5 className="col-md-12 mb-4">Payment Method</h5>
                    <div className="Gopay d-flex justify-content-between mb-5">
                      <img className="col-md-3 col-3 p-1" src={gopay} alt="" />
                      <h5 className="col-md-4">Gopay</h5>
                      <label className="container-check col-md-1 col-2">
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="POS d-flex justify-content-between mb-5">
                      <img className="col-md-3 col-3" src={pos} alt="" />
                      <h5 className="col-md-4">Pos Indonesia</h5>
                      <label className="container-check col-md-1 col-2">
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="master d-flex justify-content-between mb-5">
                      <img className="col-md-3 col-3" src={master} alt="" />
                      <h5 className="col-md-4">Mastercard</h5>
                      <label className="container-check col-md-1 col-2">
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div>
                    <h5 className="col-md-12 col-8 mt-3">Shopping summary</h5>
                    <div className="summary pl-3 pr-3">
                      <div className="d-flex justify-content-between">
                        <p className="card-text text-secondary">Order</p>
                        <h5 className="card-title">Rp 400.000</h5>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="card-text text-secondary">Delivery</p>
                        <h5 className="card-title">Rp 50.000</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between pl-3 pr-3">
                  <div>
                    <h5 className="card-title">Shopping summary</h5>
                    <h5 className="card-text text-danger">Rp 450.000</h5>
                  </div>
                  <button type="button" className="btn btn-danger rounded-pill" style={{width: 120}} data-dismiss="modal">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOrder;
