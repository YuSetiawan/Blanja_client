import React from 'react';
import clothes from '../../assets/img/clothe.png';
import stars from '../../assets/img/stars.png';

const Recomendation = () => {
  return (
    <>
      <div class="container">
        <h2 class="ml-3">You can also like this</h2>
        <p class="ml-3">You've never seen before!</p>
        <div class="container mt-5">
          <div class="row">
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-5">
              <div class="border rounded product">
                <img class="w-100" src={clothes} alt="cloth" />
                <div class="p-2 mt-2">
                  <h5 class="card-title">Men's formal suit - Black & White</h5>
                  <h5 class="text-danger">Rp 200.000</h5>
                  <img src={stars} alt="stars" style={{margin: 0}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomendation;
