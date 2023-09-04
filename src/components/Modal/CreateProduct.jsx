import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux';
import CreateProductAction from '../../config/redux/actions/CreateProductAction';

function CreateProduct() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [data, setData] = useState({
    name: '',
    stock: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const [photo, setPhoto] = useState(null);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateProductAction(data, photo, setShow));
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow} className="mt-3 w-50 rounded-pill">
        Create Product{' '}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input className="form-control mt-3" type="text" placeholder="name" name="name" value={data.name} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="stock" name="stock" value={data.stock} onChange={handleChange} />
            <input className="form-control mt-3" type="text" placeholder="price" name="price" value={data.price} onChange={handleChange} />
            <input className="form-control mt-3 p-1" type="file" placeholder="photo" name="photo" value={data.photo} onChange={handleUpload} />
            <textarea className="form-control mt-3" type="text" placeholder="description" name="description" value={data.description} onChange={handleChange} />
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

export default CreateProduct;
