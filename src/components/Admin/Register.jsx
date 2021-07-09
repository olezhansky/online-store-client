/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import userRegister from '../../api/register';
import TextInput from '../UI/Input/TextInput';

const Register = () => {
  const takenEmailsFromDB = [
    'test01@gmail.com',
    'test02@gmail.com',
    'test03@gmail.com',
  ];
  const registrationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(7, 'Must be 7 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .notOneOf(takenEmailsFromDB, 'Email already taken')
      .required('Email is required'),
    login: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Phone is required'),
    password: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('Phone is required'),
  });

  const handleRegister = (values, { setSubmitting }) => {
    console.log('Register');
    const { firstName, lastName, email, login, phone, password, isAdmin } =
      values;
    const isFormValid =
      firstName && lastName && email && login && phone && password && isAdmin;
    if (isFormValid) {
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
        const form = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          login: values.login,
          phone: values.phone,
          password: values.password,
          isAdmin: values.isAdmin,
        };
        console.log(form);
        userRegister(form);
      }, 1000);
    }
  };

  return (
    <div className="formBlock register">
      <h2 className="form-name">Register form</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          login: '',
          phone: '',
          password: '',
          isAdmin: 'true',
        }}
        onSubmit={handleRegister}
        validationSchema={registrationSchema}
      >
        {(formik) => (
          <Form className="cart-form">
            <div className="cart-inputs-area">
              <TextInput label="First name" name="firstName" type="text" />
              <TextInput label="Last name" name="lastName" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextInput label="Login" name="login" type="text" />
              <TextInput label="Phone" name="phone" type="text" />
              <TextInput label="Password" name="password" type="text" />
              <TextInput label="" name="isAdmin" type="hidden" />
            </div>
            <div className="form-btn-group">
              <button type="submit" className="btn cart-body-order">
                Regiser
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;