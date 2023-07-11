import React from 'react';
import Suit from '../../assets/img/jazz-order.png';
import Jacket from '../../assets/img/Zara-Jacket.png';

const ItemOrder = () => {
  return (
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body col-sm-12">
          <h5 className="card-title">Andreas Jane</h5>
          <p className="card-text">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181.</p>
          {/* Button trigger modal */}
          <button className="btn border rounded-pill" data-toggle="modal" data-target="#addressModal">
            Choose another address
          </button>
          <div className="modal fade" id="addressModal" tabIndex={-1} aria-labelledby="addressModal" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Choose another address
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="col-md-12 border border-secondary rounded">
                    <p
                      className="col-12 pt-3"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      Add new address
                    </p>
                  </div>
                  <div className="card-body col-md-12 border border-danger rounded mt-4">
                    <h5 className="card-title">Andreas Jane</h5>
                    <p className="card-text">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181.</p>
                    <h5 className="text-danger">Change address</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Item cart 1*/}
      <div className="card mb-3">
        <div className="card-body p-4">
          <form className="form-inline">
            <img className="rounded mr-4 col-md-2 col-4" src={Suit} alt="Clothes" />
            <div className="col-md-6 col-6 p-sm-0">
              <h5 className="card-title">Men's formal suit - Black</h5>
              <p className="card-text text-secondary">Zalora Cloth</p>
            </div>
            <h5 className="card-title col-md-3 pt-2 d-flex justify-content-center">Rp 200.000</h5>
          </form>
        </div>
      </div>
      {/* Item cart 2  */}
      <div className="card mb-3">
        <div className="card-body p-4">
          <form className="form-inline">
            <img className="rounded mr-4 col-md-2 col-4" src={Jacket} alt="Clothes" />
            <div className="col-md-6 col-6 p-sm-0">
              <h5 className="card-title">Men's Jacket jeans</h5>
              <p className="card-text text-secondary">Zalora Cloth</p>
            </div>
            <h5 className="card-title col-md-3 pt-2 d-flex justify-content-center">Rp 200.000</h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
