import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Search from '../../assets/icon/Search Glyph.png';
import UpdateProduct from '../../components/Modal/UpdateProduct';
import CreateProduct from '../../components/Modal/CreateProduct';
import DeleteProduct from '../../components/Modal/DeleteProduct';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import GetProductAction from '../../config/redux/actions/GetProductAction';
import Pagination from '../pagination/pagination';

const SellerProduct = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const {product} = useSelector((state) => state.product);
  const [search, setSearch] = useState('');
  console.log(search);
  useEffect(() => {
    dispatch(GetProductAction());
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="tab-pane fade ml-3" id="list-Product" role="tabpanel" aria-labelledby="list-Product-list">
        <div className="card shadow">
          <div className="container">
            <div className="pt-3 ">
              <h3>My product</h3>
            </div>
            <ul className="nav nav-pills border-bottom pt-3 pb-3 mb-3" id="pills-tab" role="tablist">
              <li className="nav-item pl-3 pr-3" role="presentation">
                <button className="nav-link btn btn-outline-danger active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  All items
                </button>
              </li>
              <li className="nav-item  pr-3" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-create-tab" data-toggle="pill" data-target="#pills-create" type="button" role="tab" aria-controls="pills-create" aria-selected="false">
                  Sold Out
                </button>
              </li>
              <li className="nav-item pr-3" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-archived-tab" data-toggle="pill" data-target="#pills-archived" type="button" role="tab" aria-controls="pills-archived" aria-selected="false">
                  Archived
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="container pl-4 pr-4">
                <Card className="mb-4 rounded">
                  <Card.Header className="bg-secondary text-white">Store Product</Card.Header>
                  <Card.Body>
                    <div className="container nav-item form-inline pl-0">
                      <input id="searchbox" className="form-control w-100" type="Search Products" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                      <img className="searchLogo" src={Search} alt="" />
                    </div>
                    <CreateProduct />
                    <div className="row d-flex justify-content-around mt-3">
                      {currentPosts
                        .filter((item) => {
                          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                        })
                        .map((product) => (
                          <div className="card mb-3 form-inline" style={{maxWidth: 400}}>
                            <div className="row ">
                              <div className="col-md-4 d-flex align-items-center pr-0 ">
                                <img className="pl-md-3" style={{width: 200}} src={product.photo} crossOrigin="anonymous" />
                              </div>
                              <div className="col-md-8 pl-md-0">
                                <div className="card-body" key={product.id}>
                                  <h5 className="card-title">{product.name}</h5>
                                  <p className="card-text">{product.stock} </p>
                                  <p className="card-text">
                                    {new Intl.NumberFormat('Rp', {
                                      style: 'currency',
                                      currency: 'idr',
                                    }).format(product.price)}
                                  </p>
                                  <div className="dropdown">
                                    <button className="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                      Product Settings
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="#">
                                        <Link to={`/product/${product.id}`}>
                                          <button className="btn btn-primary" style={{marginRight: '10px'}}>
                                            Detail
                                          </button>
                                        </Link>
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <UpdateProduct id={product.id} name={product.name} stock={product.stock} price={product.price} description={product.description}>
                                          Update
                                        </UpdateProduct>{' '}
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <DeleteProduct id={product.id}></DeleteProduct>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className="row d-flex justify-content-center ">
                      <Pagination totalPosts={product.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-archived" role="tabpanel" aria-labelledby="pills-archived-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProduct;
