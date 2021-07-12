import axios from 'axios';
// import { product03 } from '../Data/products';

const createCategory = (category) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return axios
    .post('https://intense-hamlet-33316.herokuapp.com/api/catalog', category, {
      headers,
    })
    .then((newCategory) => {
      /* Do something with newProduct */
      console.log('Product has been added', newCategory);
    })
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });
};

export default createCategory;