import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemOrder = () => {
  const idUser = localStorage.getItem('id');
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-moth-tuxedo.cyclic.app/shipping/${idUser}`)
      .then((res) => {
        setAddress(res.data.data[0]);
        console.log(address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-moth-tuxedo.cyclic.app/order/${idUser}`)
      .then((res) => {
        setOrder(res.data.data);
        console.log(order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body col-sm-12">
          <h5 className="card-title">Receiver: {address.name}</h5>
          <p className="card-text">
            Place : {address.address_as}, Phone : {address.phone}
          </p>
          <p className="card-text">
            {address.address}, {address.city}. {address.postal_code}
          </p>
          {/* Button trigger modal */}
          <button className="btn border rounded-pill w-50" data-toggle="modal" data-target="#addressModal">
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
      {order.map((item) => (
        <div className="card mb-3">
          <div className="card-body p-4">
            <form className="form-inline">
              <img className="rounded mr-4 col-md-2 col-4" src={item.photo} alt="Clothes" />
              <div className="col-md-6 col-6 p-sm-0">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-secondary">
                  Size: {item.size}, Quantity: {item.quantity_order}
                </p>
              </div>
              <h5 className="card-title col-md-3 pt-2 d-flex justify-content-center">
                {' '}
                {new Intl.NumberFormat('Rp', {
                  style: 'currency',
                  currency: 'idr',
                }).format(item.price)}
              </h5>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemOrder;
