import React from 'react';
import Suit from '../../assets/img/jazz-order.png';
import Jacket from '../../assets/img/Zara-Jacket.png';
import PlusMinus from '../../assets/img/plusbag.png';

const ItemCart = () => {
  return (
    <>
      <div className="col-sm-8">
        <div className="card pl-3 mb-3" style={{justifyContent: 'center'}}>
          <div className="card-body row">
            <label className="container-check col-md-1 col-1">
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <h5 className="card-title col-md-9 col-7">
              Select all items
              <span className="text-secondary"> (2 items selected) </span>
            </h5>
            <p className="card-text text-danger col-md-2 col-3">Delete</p>
          </div>
        </div>
        {/* Item cart 1*/}
        <div className="card pl-3 mb-3">
          <div className="card-body row d-flex align-items-center">
            <label className="container-check col-md-1 col-2">
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <img className="rounded col-md-2 col-3" src={Suit} alt="Clothes" />
            <div className="col-md-4 col-6 mb-2">
              <h5 className="card-title">Men's formal suit - Black</h5>
              <p className="card-text text-secondary">Zalora Cloth</p>
            </div>
            <img className="rounded col-md-2 col-5" src={PlusMinus} alt="Clothes" />
            <h5 className="card-title col-md-3 col-6">Rp 200.000</h5>
          </div>
        </div>
        {/* Item cart 2  */}
        <div className="card pl-3 mb-3">
          <div className="card-body row d-flex align-items-center">
            <label className="container-check col-md-1 col-2">
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <img className="rounded col-md-2 col-3" src={Jacket} alt="Clothes" />
            <div className="col-md-4 col-6 mb-2">
              <h5 className="card-title">Men's Jacket jeans</h5>
              <p className="card-text text-secondary">Zalora Cloth</p>
            </div>
            <img className="rounded col-md-2 col-5" src={PlusMinus} alt="Clothes" />
            <h5 className="card-title col-md-3 col-6">Rp 200.000</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
