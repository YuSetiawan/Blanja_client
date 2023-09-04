import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import updateProductAction from '../../config/redux/actions/updateProductAction';

function UpdateProduct({id, name, stock, price, description}) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [photo, setPhoto] = useState(null);
  let [data, setData] = useState({
    name,
    stock,
    price,
    description,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductAction(data, id, photo, setShow));
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="mr-2">
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" id={id} value={data.name} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="stock" name="stock" id={id} value={data.stock} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="price" name="price" id={id} value={data.price} onChange={handleChange} />
            <input className="form-control mt-3 p-1" type="file" placeholder="photo" name="photo" id={id} value={data.photo} onChange={handleUpload} />
            <textarea className="form-control mt-3" type="text" placeholder="description" name="description" id={id} value={data.description} onChange={handleChange} />
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

export default UpdateProduct;
