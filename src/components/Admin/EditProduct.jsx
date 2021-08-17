/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import editProductApi from '../../api/editProduct';
import TextInput from './Input/TextInput';
import FormikControl from './FormikControl';
import { editProductModalClose } from '../../store/madals/actions';
import Button from '../UI/Button/Button';
import { editProduct } from '../../store/admin/actions';

const EditProduct = ({ product }) => {
  console.log(product);
  console.log(product.characteristics);

  const characteristicsObj = {};
  Object.keys(product.characteristics).forEach((key) => {
    console.log(key);
    console.log(product.characteristics[key][1]);
    characteristicsObj[key] = product.characteristics[key][1];
  });

  console.log(characteristicsObj);
  const formik = useFormikContext();
  const dispatch = useDispatch();
  const productId = product._id;

  const handleEditProduct = (values, { setSubmitting }) => {
    console.log(values);
    const {
      _id,
      brand,
      name,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      description,
      imageUrl01,
      imageUrl02,
      imageUrl03,
      imageUrl04,
    } = values;
    setSubmitting(true);
    const newProduct = {
      _id,
      brand,
      name,
      model: name,
      currentPrice,
      previousPrice,
      quantity,
      artical,
      hitSale,
      categories,
      description,
      imageUrls: [imageUrl01, imageUrl02, imageUrl03, imageUrl04],
    };
    editProductApi(productId, newProduct);
    // dispatch(authorizationPopupAction('Авторизация прошла успешно'));
    console.log(newProduct);
    setSubmitting(false);
    dispatch(editProductModalClose());
    dispatch(editProduct(newProduct));
  };
  const productSchema = Yup.object().shape({
    brand: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    currentPrice: Yup.string().required('Is required'),
    previousPrice: Yup.string().required('Is required'),
    quantity: Yup.string().required('Is required'),
    artical: Yup.string().required('Is required'),
    hitSale: Yup.string().required('Is required'),
    categories: Yup.string().required('Is required'),
    description: Yup.string().required('Is required'),
    imageUrl01: Yup.string().required('Is required'),
    imageUrl02: Yup.string().required('Is required'),
    imageUrl03: Yup.string().required('Is required'),
    imageUrl04: Yup.string().required('Is required'),
  });
  // const temp = {
  //   waranty: product.waranty,
  //   set: product.set,
  //   type: product.type,
  //   megapixels: product.megapixels,
  //   matrixType: product.matrixType,
  //   matrixSize: product.matrixSize,
  //   screenDiagonal: product.screenDiagonal,
  //   sensorScreen: product.sensorScreen,
  //   digitalMagnification: product.digitalMagnification,
  //   stabilization: product.stabilization,
  //   opticalMagnification: product.opticalMagnification,
  //   focusDistance: product.focusDistance,
  // }
  const initialValuesGeneral = {
    _id: product._id,
    brand: product.brand,
    name: product.model,
    currentPrice: product.currentPrice,
    previousPrice: product.previousPrice,
    quantity: product.quantity,
    artical: product.artical,
    hitSale: product.hit,
    categories: product.category,

    description: product.description,
    imageUrl01: product.imageUrls[0],
    imageUrl02: product.imageUrls[1],
    imageUrl03: product.imageUrls[2],
    imageUrl04: product.imageUrls[3],
  };
  // const initialValues = Object.assign(initialValuesGeneral, characteristicsObj);
  return (
    <div className="formBlock create">
      <Formik
        initialValues={initialValuesGeneral}
        onSubmit={handleEditProduct}
        validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form" id="edit-product">
            <div className="product-inputs-area">
              <TextInput label="" name="_id" type="hidden" />

              <TextInput label="Производитель" name="brand" type="text" />
              <TextInput label="Модель" name="name" type="text" />
              <TextInput label="Текущая цена" name="currentPrice" type="text" />
              <TextInput
                label="Предыдущая цена"
                name="previousPrice"
                type="text"
              />
              <TextInput
                label="Количество на складе"
                name="quantity"
                type="number"
              />
              <TextInput label="Артикул" name="artical" type="number" />
              <TextInput
                label="Хит продаж (да/нет)"
                name="hitSale"
                type="text"
              />
              <TextInput label="Категория" name="categories" type="text" />
              <FormikControl
                control="textarea"
                label="Описание"
                name="description"
                type="text"
              />
              <TextInput
                label="Ссылка на изобажение 1"
                name="imageUrl01"
                type="text"
              />
              <TextInput
                label="Ссылка на изобажение 2"
                name="imageUrl02"
                type="text"
              />
              <TextInput
                label="Ссылка на изобажение 3"
                name="imageUrl03"
                type="text"
              />
              <TextInput
                label="Ссылка на изобажение 4"
                name="imageUrl04"
                type="text"
              />
            </div>
            <div className="form-btn-group" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProduct;
