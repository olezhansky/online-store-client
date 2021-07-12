/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import createCategory from '../../api/createCategory';
import createProductLocalHost5000 from '../../api/createProductLocalHost5000';
import TextInput from './Input/TextInput';
import { sony02 } from '../../Data/products';
import FormikControl from './FormikControl';

const CreateCategoryForm = () => {
  // const handleCreateCategory2 = () => {
  //   console.log('CREATE2');
  //   createProductLocalHost5000();
  // };
  const handleCreateCategory = (values, { setSubmitting }) => {
    console.log(values);
    const { id, name, parentId, imgUrl, description, level } = values;
    setSubmitting(true);
    const newCategory = {
      id,
      name,
      parentId,
      imgUrl,
      description,
      level,
    };
    createCategory(newCategory);
    console.log(newCategory);
    setSubmitting(false);
  };
  const productSchema = Yup.object().shape({
    id: Yup.string().required('Is required'),
    name: Yup.string().required('Is required'),
    parentId: Yup.string().required('Is required'),
    imgUrl: Yup.string().required('Is required'),
    description: Yup.string().required('Is required'),
    level: Yup.string().required('Is required'),
  });

  return (
    <div className="formBlock create">
      <h2 className="form-name">Create new category</h2>
      <Formik
        initialValues={{
          id: '',
          name: '',
          parentId: '',
          imgUrl: '',
          description: '',
          level: '',
        }}
        onSubmit={handleCreateCategory}
        // validationSchema={productSchema}
      >
        {(formik) => (
          <Form className="product-form">
            <div className="product-inputs-area">
              <TextInput label="Идентификатор" name="id" type="text" />
              <TextInput label="Название" name="name" type="text" />
              <TextInput
                label="Родительская категория"
                name="parentId"
                type="text"
              />
              <TextInput label="Изображение" name="imgUrl" type="text" />
              <FormikControl
                control="textarea"
                label="Описание"
                name="description"
                type="text"
              />
              <TextInput
                label="Уровень вложенности"
                name="level"
                type="number"
              />
            </div>
            <div className="form-btn-group">
              <button type="submit" className="btn cart-body-order">
                Create
              </button>
              <button type="reset" className="btn cart-body-order reset">
                Reset data
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateCategoryForm;