import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import GetProductAction from '../../config/redux/actions/GetProductAction';
import stars from '../../assets/img/stars.png';

const ProductCard = () => {
  const dispatch = useDispatch();
  const {product} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(GetProductAction());
  }, []);
  return (
    <>
      <div className="row">
        {product.map((product) => (
          <div className="col-md-3 col-sm-6 mb-5">
            <Link to={`/product/${product.id}`}>
              <div className="border rounded product">
                <img src={product.photo} className="p-2 rounded" crossOrigin="anonymous" style={{height: 180, width: 220, objectFit: 'cover'}} alt="product-img" />{' '}
                <div className="p-3">
                  <h5 className="card-title text-muted">{product.name}</h5>
                  <h5 className="text-danger">Rp. {product.price}</h5>
                  <img className="justify-content-start" src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
