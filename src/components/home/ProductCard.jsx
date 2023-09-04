import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import GetProductAction from '../../config/redux/actions/GetProductAction';
import stars from '../../assets/img/stars.png';
import Pagination from '../pagination/pagination';

const ProductCard = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const {product} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(GetProductAction());
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="row">
        {currentPosts.map((product) => (
          <div className="col-md-3 col-sm-6 mb-5">
            <Link to={`/product/${product.id}`}>
              <div className="border rounded product">
                <img src={product.photo} className="p-2 rounded" crossOrigin="anonymous" style={{height: 180, width: 220, objectFit: 'cover'}} alt="product-img" />{' '}
                <div className="p-3">
                  <h5 className="card-title text-muted">{product.name}</h5>
                  <h5 className="text-danger">
                    {new Intl.NumberFormat('Rp', {
                      style: 'currency',
                      currency: 'idr',
                    }).format(product.price)}
                  </h5>
                  <img className="justify-content-start" src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="row d-flex justify-content-center ">
        <Pagination totalPosts={product.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  );
};

export default ProductCard;
