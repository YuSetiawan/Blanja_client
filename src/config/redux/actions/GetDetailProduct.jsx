import axios from 'axios';
const GetProductDetail = (id) => async (dispatch) => {
  try {
    const products = await axios.get(`http://localhost:4000/products/${id}`);
    const result = products.data.data[0];
    dispatch({type: 'GET_DETAIL_PRODUCT', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export default GetProductDetail;
