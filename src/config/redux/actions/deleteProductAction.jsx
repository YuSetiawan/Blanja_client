import axios from 'axios';
import Swal from 'sweetalert2';
const deleteProductAction = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`https://stormy-moth-tuxedo.cyclic.app/products/${id}`);
    console.log(products);
    Swal.fire({
      title: 'Product deleted',
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
    dispatch({type: 'DELETE_PRODUCT', payload: result});
    setTimeout(function () {
      window.location.reload(1);
    }, 1500);
  } catch (err) {
    console.error(err.message);
    Swal.fire({
      title: 'Product failed to delete',
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

export default deleteProductAction;
