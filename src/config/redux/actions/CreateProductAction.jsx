import axios from 'axios';
const CreateProductAction = (data, photo, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('stock', data.stock);
    formData.append('price', data.price);
    formData.append('photo', photo);
    formData.append('description', data.description);
    const products = await axios.post('http://localhost:4000/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(products);
    alert('create product successful');
    setShow(false);
    const result = products.data.data;
    dispatch({type: 'CREATE_PRODUCT', payload: result});
  } catch (err) {
    console.error(err.message);
    alert('create product failed');
    setShow(false);
  }
};

export default CreateProductAction;
