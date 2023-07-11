import React, {useEffect, useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import CreateProduct from '../components/Modal/CreateProduct';
import UpdateProduct from '../components/Modal/UpdateProduct';
import axios from 'axios';
import DeleteProduct from '../components/Modal/DeleteProduct';
import {Link} from 'react-router-dom';

const Product = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {products.map((product) => (
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
      </div>
    </>
  );
};

export default Product;
