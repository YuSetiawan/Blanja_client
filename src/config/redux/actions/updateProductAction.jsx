import axios from 'axios';
const updateProductAction = (data, id, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('stock', data.stock);
    formData.append('price', data.price);
    formData.append('photo', photo);
    formData.append('description', data.description);
    const products = await axios.put(`http://localhost:4000/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(products);
    alert('update product successful');
    setShow(false);
    const result = products.data.data;
    dispatch({type: 'UPDATE_PRODUCT', payload: result});
    setTimeout(function () {
      window.location.reload(1);
    }, 1500);
  } catch (err) {
    console.error(err.message);
    alert('update product failed');
    setShow(false);
  }
};

export default updateProductAction;
