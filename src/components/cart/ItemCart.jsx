import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PlusMinus from '../../assets/img/plusbag.png';

const ItemCart = () => {
  const idUser = localStorage.getItem('id');
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
    <>
      <div className="col-sm-8">
        <div className="card pl-3 mb-3" style={{justifyContent: 'center'}}>
          <div className="card-body row">
            <label className="container-check col-md-1 col-1">
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <h5 className="card-title col-md-9 col-7">Select items</h5>
          </div>
        </div>
        {/* Item cart 1*/}
        {order.map((item) => (
          <div className="card pl-3 mb-3">
            <div className="card-body row d-flex align-items-center">
              <label className="container-check col-md-1 col-2">
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
              </label>
              <img className="rounded col-md-2 col-3" src={item.photo} alt="Clothes" />
              <div className="col-md-4 col-6 mb-2">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-secondary">
                  Size: {item.size}, Quantity: {item.quantity_order}
                </p>
              </div>
              <img className="rounded col-md-2 col-5" src={PlusMinus} alt="Clothes" />
              <h5 className="card-title col-md-3 col-6">
                {' '}
                {new Intl.NumberFormat('Rp', {
                  style: 'currency',
                  currency: 'idr',
                }).format(item.price)}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemCart;
