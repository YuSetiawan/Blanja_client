import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import DeleteAddress from '../Modal/DeleteAddress';

const CustAddres = () => {
  const idUser = localStorage.getItem('id');
  const [address, setAddress] = useState([]);
  useEffect(() => {
    axios
      .get(`https://stormy-moth-tuxedo.cyclic.app/shipping/${idUser}`)
      .then((res) => {
        setAddress(res.data.data);
        console.log(address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [data, setData] = useState({
    name: '',
    users_id: idUser,
    address_as: '',
    address: '',
    phone: '',
    postal_code: '',
    city: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleCreateAddress = (e) => {
    try {
      e.preventDefault();
      axios.post(`https://stormy-moth-tuxedo.cyclic.app/shipping/`, data);
      Swal.fire({
        title: 'Address created',
        showConfirmButton: false,
        icon: 'success',
        target: '#custom-target',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          container: 'position-absolute',
        },
        toast: true,
        position: 'bottom-right',
      });
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: 'Failed to create Address',
        showConfirmButton: false,
        icon: 'error',
        target: '#custom-target',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
          container: 'position-absolute',
        },
        toast: true,
        position: 'bottom-right',
      });
    }
  };
  return (
    <div className="tab-pane fade" id="list-Shipping" role="tabpanel" aria-labelledby="list-Shipping-list">
      <div className="card ml-3 shadow">
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
                      <form onSubmit={handleCreateAddress}>
                        <div className="form-row">
                          <div className="col-md-12 mb-3">
                            <label htmlFor="validationDefault01">Save address as (ex : home address, office address)</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your address" onChange={handleChange} name="address_as" required />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">Recipient name</label>
                            <input type="text" className="form-control" id="validationDefault01" onChange={handleChange} name="name" required />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault02">Recipient's telephone number</label>
                            <input type="text" className="form-control" id="validationDefault02" onChange={handleChange} name="phone" required />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault01">Postal code</label>
                            <input type="text" className="form-control" id="validationDefault01" onChange={handleChange} name="postal_code" required />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="validationDefault02">City or Subdistrict</label>
                            <input type="text" className="form-control" id="validationDefault02" onChange={handleChange} name="city" required />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-md-12 mb-3">
                            <label htmlFor="validationDefault03">Your Address</label>
                            <input type="text" className="form-control" id="validationDefault03" onChange={handleChange} name="address" required />
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
                        <div className="modal-footer d-flex justify-content-end pb-4">
                          <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn-outline-secondary rounded-pill mr-2" style={{width: 130}}>
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-danger rounded-pill" style={{width: 130}}>
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal end */}
              {address.map((item, index) => (
                <div className="card-body form-inline col-md-12 border border-danger rounded mt-4 pl-sm-5">
                  <>
                    <div key={index} className="col-9">
                      <h5 className="card-title">
                        {item.name}, address as: {item.address_as}{' '}
                      </h5>
                      <p className="card-text">
                        {item.address}, {item.city}. {item.postal_code}
                      </p>
                      <p className="card-text">{item.phone}</p>
                    </div>
                    <div className="col-3">
                      <DeleteAddress id={item.id} />
                    </div>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustAddres;
