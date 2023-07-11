import React from 'react';

const CheckOut = () => {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Shopping summary</h5>
            <div className="d-flex justify-content-between">
              <p className="card-text text-secondary">Total Price</p>
              <h5 className="card-title">Rp 400.000</h5>
            </div>
            <a href="checkOut.html">
              <button className="btn btn-danger rounded-pill mt-2 w-100">Buy</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
