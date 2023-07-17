import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import CreateProduct from '../components/Modal/CreateProduct';
import UpdateProduct from '../components/Modal/UpdateProduct';
import DeleteProduct from '../components/Modal/DeleteProduct';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import GetProductAction from '../config/redux/actions/GetProductAction';
import Pagination from '../components/pagination/pagination';

const Product = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const {product} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5 mb-5">
        <br className="mb-5" />
        <CreateProduct></CreateProduct>
        <table class="table mt-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Photo</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((product) => (
              <tr>
                <th>{product.id}</th>
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <img style={{width: 100, padding: 10}} src={product.photo} crossOrigin="anonymous" />
                <td>{product.description}</td>
                <td>
                  <Link to={`/product/${product.id}`}>
                    <button className="btn btn-primary" style={{marginRight: '10px'}}>
                      Detail
                    </button>
                  </Link>
                  <UpdateProduct id={product.id} name={product.name} stock={product.stock} price={product.price} description={product.description}>
                    Update
                  </UpdateProduct>
                  <DeleteProduct id={product.id}></DeleteProduct>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row d-flex justify-content-center ">
          <Pagination totalPosts={product.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </div>
      </div>
    </>
  );
};

export default Product;
