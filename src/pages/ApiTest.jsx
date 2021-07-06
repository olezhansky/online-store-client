/* eslint-disable no-shadow */
import React, { useState } from 'react';
import createProduct from '../api/createProduct';

const ApiTest = () => {
  const [values, setValues] = useState({
    email: '',
    Password: '',
    confirmPassword: '',
  });
  const productObj = {
    name: 'Фотоаппарат CANON EOS M50 EF-M 15-45mm f/3.5-6.3 IS STM',
    currentPrice: 199.99,
    previousPrice: 250,
    'Кол-во эффективных мегапикселей': '24.1',
    'Тип матрицы': 'CMOS (КМОП)',
    'Размер матрицы': 'APS-C (22.3 х 14.9 мм)',
    imageUrls: [
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/02_dcfvib.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/04_wo7dij.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/03_snk43l.jpg',
      'https://res.cloudinary.com/finalprojectfe242021/image/upload/v1625583314/OnlineStore/Cameras/CANON%20EOS%20M50%20EF-M/01_jcwqkb.jpg',
    ],
    quantity: 100,
    color: 'red',
    productUrl: '/men',
    brand: 'braaaand',
    myCustomParam: 'some string or json for custom param',
  };
  console.log('Api');
  const handleRegister = () => {
    console.log('Register');
  };
  const handleCreateProduct = (product) => {
    console.log('Create');
    createProduct(product);
  };
  const handleChange = (event) => {
    const { name } = event.target;
    setValues((values) => ({ ...values, [name]: event.target.value }));
  };
  return (
    <div className="container">
      <h1>Api test</h1>
      <div className="apiBlock">
        <h2>Register form</h2>
        <form onSubmit={handleRegister}>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              onChange={handleChange}
              value={values.email}
              id="email"
              type="text"
            />
          </div>

          <input type="text" name="name" />
        </form>
        <button
          type="button"
          className="btn"
          onClick={() => handleCreateProduct(productObj)}
        >
          Register
        </button>
      </div>
      <div className="apiBlock">
        <form>
          <input type="text" name="name" />
        </form>
        <button
          type="button"
          className="btn"
          onClick={() => handleCreateProduct(productObj)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ApiTest;
