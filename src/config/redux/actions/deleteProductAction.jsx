import axios from 'axios';
const deleteProductAction = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`http://localhost:4000/products/${id}`);
    console.log(products);
    alert('delete success');
    setShow(false);
    const result = products.data.data;
    dispatch({type: 'DELETE_PRODUCT', payload: result});
    setTimeout(function () {
      window.location.reload(1);
    }, 1500);
  } catch (err) {
    console.error(err.message);
    alert('delete failed');
    setShow(false);
  }
};

export default deleteProductAction;
