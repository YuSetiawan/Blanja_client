import React, {useEffect, useState} from 'react';
import '../../assets/css/checkBox.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const CheckOut = () => {
  const navigate = useNavigate();
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

  let totalPrice = order.reduce((val, item) => {
    return val + item.total_price;
  }, 0);

  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Shopping summary</h5>
            <div className="d-flex justify-content-between">
              <p className="card-text text-secondary">Total Price</p>
              <h5 className="card-title">
                {new Intl.NumberFormat('Rp', {
                  style: 'currency',
                  currency: 'idr',
                }).format(totalPrice)}
              </h5>
            </div>
            <button className="btn btn-danger rounded-pill mt-2 w-100" onClick={() => navigate('/order')}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
