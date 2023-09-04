import axios from 'axios';
import Swal from 'sweetalert2';
const updateProductAction = (data, id, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('stock', data.stock);
    formData.append('price', data.price);
    formData.append('photo', photo);
    formData.append('description', data.description);
    const products = await axios.put(`https://stormy-moth-tuxedo.cyclic.app/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(products);
    Swal.fire({
      title: 'Product updated',
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
    const result = products.data.data;
    dispatch({type: 'UPDATE_PRODUCT', payload: result});
    setTimeout(function () {
      window.location.reload(1);
    }, 1500);
  } catch (err) {
    console.error(err.message);
    Swal.fire({
      title: 'Product failed to updated',
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

export default updateProductAction;
