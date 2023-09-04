import axios from 'axios';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

function DeleteAddress({id}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      axios.delete(`https://stormy-moth-tuxedo.cyclic.app/shipping/${id}`);
      Swal.fire({
        title: 'Address deleted',
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
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete Address
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <h3 className="text-danger text-center">Sure wanna delete this Address? This action are permanent</h3>
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

export default DeleteAddress;
