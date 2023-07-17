import React from 'react';

const SellerOrder = () => {
  return (
    <>
      <div className="tab-pane fade ml-3 shadow" id="list-order" role="tabpanel" aria-labelledby="list-order-list">
        <div className="card shadow">
          <div className="container">
            <ul className="nav nav-pills d-flex justify-content-around pt-3 mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                  All items
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-notPaid-tab" data-toggle="pill" data-target="#pills-notPaid" type="button" role="tab" aria-controls="pills-notPaid" aria-selected="false">
                  Not yet paid
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-Packed-tab" data-toggle="pill" data-target="#pills-Packed" type="button" role="tab" aria-controls="pills-Packed" aria-selected="false">
                  Packed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-Sent-tab" data-toggle="pill" data-target="#pills-Sent" type="button" role="tab" aria-controls="pills-Sent" aria-selected="false">
                  Sent
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-Completed-tab" data-toggle="pill" data-target="#pills-Completed" type="button" role="tab" aria-controls="pills-Completed" aria-selected="false">
                  Completed
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link btn btn-outline-danger" id="pills-Order-tab" data-toggle="pill" data-target="#pills-Order" type="button" role="tab" aria-controls="pills-Order" aria-selected="false">
                  Order cancel
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
            <div className="tab-pane fade" id="pills-notPaid" role="tabpanel" aria-labelledby="pills-notPaid-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
            <div className="tab-pane fade" id="pills-Packed" role="tabpanel" aria-labelledby="pills-Packed-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
            <div className="tab-pane fade" id="pills-Sent" role="tabpanel" aria-labelledby="pills-Sent-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
            <div className="tab-pane fade" id="pills-Completed" role="tabpanel" aria-labelledby="pills-Completed-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
            <div className="tab-pane fade" id="pills-Order" role="tabpanel" aria-labelledby="pills-Order-tab">
              <div className="container pl-4 pr-4" style={{height: '50vh'}}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerOrder;
