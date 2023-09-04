import axios from 'axios';
const GetProductAction = () => async (dispatch) => {
  try {
    const products = await axios.get('https://stormy-moth-tuxedo.cyclic.app/products');
    const result = products.data.data;
    dispatch({type: 'GET_ALL_PRODUCT', payload: result});
  } catch (err) {
    console.error(err.message);
  }
};

export default GetProductAction;
