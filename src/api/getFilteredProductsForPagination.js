import axios from 'axios';

const filteredProductsForPagination = (currentCategory, addQuery) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get(
      `https://intense-hamlet-33316.herokuapp.com/api/products/filter?category=${currentCategory}${addQuery}`
    )
    .catch((err) => {
      /* Do something with error, e.g. show error to user */
      console.log(err);
    });

export default filteredProductsForPagination;