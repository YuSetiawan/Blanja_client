import axios from 'axios';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

function EditOrder({id_order, id_product, size, quantity_order}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    id_order,
    id_product,
    size,
    quantity_order,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleChangeOrder = (e) => {
    try {
      e.preventDefault();
      axios.put(`https://stormy-moth-tuxedo.cyclic.app/order/${id_order}`, data);
      Swal.fire({
        title: 'Order changed',
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
      }, 2000);
    } catch (error) {
      Swal.fire({
        title: 'Failed to changed',
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
    <>
      <Button variant="warning" onClick={handleShow} className="mb-2">
        Change
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleChangeOrder}>
          <Modal.Body>
            <div className=" d-flex justify-content-around p-3 ">
              <div className=" mt-3">
                <div>
                  <h5>Quantity</h5>
                  <div className="color-groups row mt-3">
                    <div
                      className="color color-white text-center"
                      style={{
                        fontSize: 20,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#D4D4D4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={() => {
                        setData({
                          ...data,
                          quantity_order: Math.max(1, data.quantity_order - 1),
                        });
                      }}
                    >
                      -
                    </div>

                    <input
                      type="text"
                      className="color color text-center"
                      style={{
                        borderColor: 'transparent',
                        width: '70px',
                      }}
                      placeholder="1"
                      name="quantity_order"
                      value={data.quantity_order}
                      onChange={handleChange}
                    />

                    <div
                      className="color color-white text-center"
                      style={{
                        fontSize: 20,
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#D4D4D4',
                        boxShadow: '0px 0px 4px rgba(142, 142, 142, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                      }}
                      onClick={() => {
                        setData({
                          ...data,
                          quantity_order: data.quantity_order + 1,
                        });
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-3 ml-5">
                <h5 className="ml-2">Note</h5>
                <div className="row mt-3">
                  <textarea
                    type="text"
                    className="color color text-center"
                    style={{
                      borderColor: 'transparent',
                      width: '90px',
                    }}
                    placeholder="XL / EU 43"
                    name="size"
                    value={data.size}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <input type="hidden" name="id_product" value={id_product} onChange={handleChange} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default EditOrder;
