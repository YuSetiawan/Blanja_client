import axios from 'axios';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

function DeleteOrder({id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios.delete(`https://stormy-moth-tuxedo.cyclic.app/order/${id}`);
      Swal.fire({
        title: 'Order Canceled',
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
        title: 'Failed to create Order',
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
      <Button variant="danger" onClick={handleShow}>
        Canceled
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel order </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna canceled this order? </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Delete
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default DeleteOrder;
