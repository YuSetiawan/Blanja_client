import axios from 'axios';
import Swal from 'sweetalert2';
const CreateProductAction = (data, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('stock', data.stock);
    formData.append('price', data.price);
    formData.append('photo', photo);
    formData.append('description', data.description);
    const products = await axios.post('https://stormy-moth-tuxedo.cyclic.app/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(products);
    Swal.fire({
      title: 'Product created',
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
    setShow(false);
    setTimeout(function () {
      window.location.reload();
    }, 1500);
    const result = products.data.data;
    dispatch({type: 'CREATE_PRODUCT', payload: result});
  } catch (err) {
    console.error(err.message);
    Swal.fire({
      title: 'Product failed to create',
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
    setShow(false);
  }
};

export default CreateProductAction;
