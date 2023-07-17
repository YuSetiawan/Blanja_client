import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import stars from '../assets/img/stars.png';
import color1 from '../assets/img/Ellipse.png';
import color2 from '../assets/img/Ellipse 6.png';
import color3 from '../assets/img/Ellipse 7.png';
import color4 from '../assets/img/Ellipse 8.png';
import minus from '../assets/icon/minus.png';
import plus from '../assets/icon/plus.png';
import rateStar from '../assets/img/rateStar.png';
import singleStar from '../assets/img/singleStar.png';
import ProductCard from '../components/home/ProductCard';
import NavbarLogin from '../components/navbar/NavbarLogin';

const Detail = () => {
  const isLogin = localStorage.getItem('token');
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => {
        setProduct(res.data.data[0]);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!isLogin) {
    return (
      <>
        <Navbar />
        <section className="menu mt-5">
          <div className="container">
            <br />
            <br />
            <p className="text-secondary">Home &gt; Category &gt; Shoes</p>
          </div>
        </section>
        <section className="Image-product mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="row mb-4">
                  <div id="carouselDetail" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active col-12">
                        <img src={product.photo} crossOrigin="anonymous" className="w-100" alt="first" />
                      </div>
                      <div className="carousel-item col-12">
                        <img src={product.photo} crossOrigin="anonymous" className="w-100" alt="second" />
                      </div>
                      <button className="carousel-control-prev" type="button" data-target="#carouselDetail" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-target="#carouselDetail" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12 pl-4">
                <h2>{product.name}</h2>
                <p className="text-secondary">Stock: {product.stock}</p>
                <img className="align-top" src={stars} alt="" style={{margin: 0}} />
                <div className="price mt-3">
                  <p className="text-secondary">Price</p>
                  <h1>Rp. {product.price}</h1>
                </div>
                <div className="Color mt-4">
                  <h5>Color</h5>
                  <div className="row col-7">
                    <img className="col-sm-3 col-4" alt="..." src={color1} />
                    <img className="col-sm-3 col-4" alt="..." src={color2} />
                    <img className="col-sm-3 col-4" alt="..." src={color3} />
                    <img className="col-sm-3 col-1" alt="..." src={color4} />
                  </div>
                </div>
                <div className="custom-order row ml-1 mt-3">
                  <div className="Size mt-3">
                    <h5>Size</h5>
                    <div className="row mt-3">
                      <button className="rounded-circle btn btn-secondary ml-3" style={{border: 'none'}} alt="">
                        <img className="pb-1" src={minus} alt="" />
                      </button>
                      <p className="ml-3 mr-3">28</p>
                      <button className="rounded-circle btn btn-light" style={{border: 'none', boxShadow: 'black 20px'}} alt="">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="Size ml-5 mt-3">
                    <h5>Quantity</h5>
                    <div className="row mt-3">
                      <button className="rounded-circle btn btn-secondary ml-3" style={{border: 'none'}} alt="">
                        <img className="pb-1" src={minus} alt="" />
                      </button>
                      <p className="ml-3 mr-3">1</p>
                      <button className="rounded-circle btn btn-light" style={{border: 'none', boxShadow: 'black 20px'}} alt="">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 ml-1">
                  <button type="button" className="btn btn-outline-dark rounded-pill col-md-4 col-5">
                    Chat
                  </button>
                  <button type="button" className="btn btn-outline-dark rounded-pill col-md-4 col-5 ml-3">
                    Add bag
                  </button>
                </div>
                <div className="Buy-button mt-3">
                  <button onClick={() => navigate('/')} className="col-md-9 col-11 btn btn-danger rounded-pill mt-2 w-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Product-information mt-5">
          <div className="container">
            <h2>Product Information</h2>
            <div className="condition mt-5 mb-5">
              <h5>Condition</h5>
              <h5 className="text-danger">New</h5>
            </div>
            <div className="description">
              <h5>Description</h5>
              <p className="text-secondary text-justify">{product.description}</p>
            </div>
          </div>
        </section>
        <section className="Product-review mt-5">
          <div className="container">
            <h3>Product Review</h3>
            <div className="row ml-1 mt-sm-0">
              <div className="col-md-2 col-4">
                <div className="row mt-4 pt-5">
                  <h1 style={{fontSize: '50pt'}}>5.0</h1>
                  <h5 className="text-secondary" style={{display: 'flex', alignItems: 'end'}}>
                    /5
                  </h5>
                </div>
                <img src={rateStar} style={{marginLeft: '-15px'}} />
              </div>
              <div className="col-md-4 col-8 mt-3 ml-sm-5" style={{marginLeft: '-25px'}}>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">5</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">10</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">4</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">3</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">2</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">1</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
            <h2 className="ml-3">You can also like this</h2>
            <p className="ml-3">You've never seen before!</p>
            <div className="container mt-5">
              <ProductCard />
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <NavbarLogin />
        <section className="menu mt-5">
          <div className="container">
            <br />
            <br />
            <p className="text-secondary">Home &gt; Category &gt; Shoes</p>
          </div>
        </section>
        <section className="Image-product mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-12">
                <div className="row mb-4">
                  <div id="carouselDetail" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active col-12">
                        <img src={product.photo} crossOrigin="anonymous" className="w-100" alt="first" />
                      </div>
                      <div className="carousel-item col-12">
                        <img src={product.photo} crossOrigin="anonymous" className="w-100" alt="second" />
                      </div>
                      <button className="carousel-control-prev" type="button" data-target="#carouselDetail" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-target="#carouselDetail" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-12 pl-4">
                <h2>{product.name}</h2>
                <p className="text-secondary">Stock: {product.stock}</p>
                <img className="align-top" src={stars} alt="" style={{margin: 0}} />
                <div className="price mt-3">
                  <p className="text-secondary">Price</p>
                  <h1>Rp. {product.price}</h1>
                </div>
                <div className="Color mt-4">
                  <h5>Color</h5>
                  <div className="row col-7">
                    <img className="col-sm-3 col-4" alt="..." src={color1} />
                    <img className="col-sm-3 col-4" alt="..." src={color2} />
                    <img className="col-sm-3 col-4" alt="..." src={color3} />
                    <img className="col-sm-3 col-1" alt="..." src={color4} />
                  </div>
                </div>
                <div className="custom-order row ml-1 mt-3">
                  <div className="Size mt-3">
                    <h5>Size</h5>
                    <div className="row mt-3">
                      <button className="rounded-circle btn btn-secondary ml-3" style={{border: 'none'}} alt="">
                        <img className="pb-1" src={minus} alt="" />
                      </button>
                      <p className="ml-3 mr-3">28</p>
                      <button className="rounded-circle btn btn-light" style={{border: 'none', boxShadow: 'black 20px'}} alt="">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="Size ml-5 mt-3">
                    <h5>Quantity</h5>
                    <div className="row mt-3">
                      <button className="rounded-circle btn btn-secondary ml-3" style={{border: 'none'}} alt="">
                        <img className="pb-1" src={minus} alt="" />
                      </button>
                      <p className="ml-3 mr-3">1</p>
                      <button className="rounded-circle btn btn-light" style={{border: 'none', boxShadow: 'black 20px'}} alt="">
                        <img src={plus} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 ml-1">
                  <button type="button" className="btn btn-outline-dark rounded-pill col-md-4 col-5">
                    Chat
                  </button>
                  <button type="button" className="btn btn-outline-dark rounded-pill col-md-4 col-5 ml-3">
                    Add bag
                  </button>
                </div>
                <div className="Buy-button mt-3">
                  <button onClick={() => navigate('/')} className="col-md-9 col-11 btn btn-danger rounded-pill mt-2 w-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Product-information mt-5">
          <div className="container">
            <h2>Product Information</h2>
            <div className="condition mt-5 mb-5">
              <h5>Condition</h5>
              <h5 className="text-danger">New</h5>
            </div>
            <div className="description">
              <h5>Description</h5>
              <p className="text-secondary text-justify">{product.description}</p>
            </div>
          </div>
        </section>
        <section className="Product-review mt-5">
          <div className="container">
            <h3>Product Review</h3>
            <div className="row ml-1 mt-sm-0">
              <div className="col-md-2 col-4">
                <div className="row mt-4 pt-5">
                  <h1 style={{fontSize: '50pt'}}>5.0</h1>
                  <h5 className="text-secondary" style={{display: 'flex', alignItems: 'end'}}>
                    /5
                  </h5>
                </div>
                <img src={rateStar} style={{marginLeft: '-15px'}} />
              </div>
              <div className="col-md-4 col-8 mt-3 ml-sm-5" style={{marginLeft: '-25px'}}>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">5</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">10</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">4</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">3</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">2</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
                <div className="form-inline mb-1 mt-3" style={{display: 'flex', alignItems: 'center'}}>
                  <img className="col-md-2 col-3" src={singleStar} alt="" />
                  <h5 className="col-md-1 col-1 text-secondary mr-2">1</h5>
                  <div className="progress col-5 pl-0 pr-0">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '0%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={0} />
                  </div>
                  <h5 className="col-md-1 col-1 text-secondary">0</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
            <h2 className="ml-3">You can also like this</h2>
            <p className="ml-3">You've never seen before!</p>
            <div className="container mt-5">
              <ProductCard />
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Detail;
