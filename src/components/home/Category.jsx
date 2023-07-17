import React from 'react';
import shirt from '../../assets/img/category-t-shirt.png';
import bagpack from '../../assets/img/category-bagba.png';
import jacket from '../../assets/img/category-jacket.png';
import pants from '../../assets/img/category-pants.png';
import shoes from '../../assets/img/category-shoes.png';
import watch from '../../assets/img/category-watch.png';
import handbag from '../../assets/img/category-handbag.png';
import shorts from '../../assets/img/category-shorts.png';

const Category = () => {
  return (
    <>
      <div className="container">
        <h2 className="ml-3">Category</h2>
        <p className="ml-3">What are you currently looking for?</p>
        <div>
          <div className="container">
            <div className="row">
              <div id="carouselCategory" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselCategory" data-slide-to={0} className="active" />
                  <li data-target="#carouselCategory" data-slide-to={1} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active col-md-12">
                    <div className="row">
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={shirt} alt="pants" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={bagpack} alt="shorts" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={pants} alt="t-shirt" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={shoes} alt="shorts" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item col-12">
                    <div className="row">
                      <div className="col-md-3 col-6 mb-5 ">
                        <div>
                          <img className="category" src={watch} alt="pants" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={jacket} alt="shorts" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={shorts} alt="t-shirt" />
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-5">
                        <div>
                          <img className="category" src={handbag} alt="shorts" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-target="#carouselCategory" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-target="#carouselCategory" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
