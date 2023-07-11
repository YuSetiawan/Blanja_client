import React from 'react';

const CustAddres = () => {
  return (
    <div className="tab-pane fade" id="list-Shipping" role="tabpanel" aria-labelledby="list-Shipping-list">
      <div className="card ml-3">
        <div className="card-body">
          <div className="pt-3 border-bottom">
            <h3>Choose another address</h3>
            <p className="text-secondary">Manage your shipping address</p>
          </div>
          <div className="pt-3">
            <div className="container pl-5 pr-5 mb-5">
              {/* Button trigger modal */}
              <div
                className="col-md-12 mb-4"
                data-toggle="modal"
                data-target="#exampleModal"
                style={{
                  border: '2px dashed lightgray',
                  borderRadius: 4,
                }}
              >
                <p className="col-12 text-secondary pt-3" style={{display: 'flex', justifyContent: 'center'}}>
                  Add new address
                </p>
              </div>
              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="col-12 pt-3"
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        Add new address
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{marginLeft: '-100px'}}>
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-row">
                          <div className="col-md-12 mb-3">
                            <label htmlFor="validationDefault01">Save address as (ex : home address, office address)</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your address" required="" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">Recipient’s name</label>
                            <input type="text" className="form-control" id="validationDefault01" required="" />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault02">Recipient's telephone number</label>
                            <input type="text" className="form-control" id="validationDefault02" required="" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">Postal code</label>
                            <input type="text" className="form-control" id="validationDefault01" required="" />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault02">Postal code</label>
                            <input type="text" className="form-control" id="validationDefault02" required="" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault03">City or Subdistrict</label>
                            <input type="text" className="form-control" id="validationDefault03" required="" />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required="" />
                            <label className="form-check-label" htmlFor="invalidCheck2">
                              {' '}
                              Agree to terms and conditionsMake it the primary address{' '}
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer d-flex justify-content-end pb-4">
                      <button type="button" className="btn btn-outline-secondary rounded-pill mr-2" style={{width: 130}}>
                        Cancel
                      </button>
                      <button type="button" className="btn btn-danger rounded-pill" data-dismiss="modal" style={{width: 130}}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal end */}
              <div className="card-body col-md-12 border border-danger rounded mt-4 pl-sm-5">
                <h5 className="card-title">Andreas Jane</h5>
                <p className="card-text">Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181.</p>
                <h5 className="text-danger">Change address</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustAddres;
