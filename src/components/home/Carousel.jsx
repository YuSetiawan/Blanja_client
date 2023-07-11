import React from 'react';
import Promo from '../../assets/img/Card Promotion.png';
import Promo2 from '../../assets/img/Card Promotion2.png';

const Carousel = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div id="carouselHome" className="carousel slide" data-ride="carousel" style={{marginTop: 100}}>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active col-12">
                <img src={Promo} className="w-100" alt="Promotion" />
              </div>
              <div className="carousel-item col-12">
                <img src={Promo2} className="w-100" alt="Promotion2" />
              </div>
              <div className="carousel-item col-12">
                <img src={Promo} className="w-100" alt="Promotion" />
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselHome" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselHome" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
