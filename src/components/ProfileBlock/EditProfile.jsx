/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import styles from './ProfileBlock.module.scss';

const EditProfile = () => {
  const handleSubmitForm = (values, { setSubmitting }) => {
    const { firstName, lastName, age, address, email, phone } = values;
    // const isPasswordMatch = newPassword === confirmPassword;
    const isFormValid =
      firstName && lastName && age && address && email && phone;

    if (isFormValid) {
      setSubmitting(true);

      setSubmitting(false);
      const form = {
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        address: values.address,
        phone: values.phone,
      };
      console.log(form);
    }
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, 'Must be 10 characters or less')
      .required('First name is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    age: Yup.number()
      .max(99, 'Must be 2 characters or less')
      .required('Age is required'),
    address: Yup.string()
      .max(40, 'Must be 40 characters or less')
      .required('Address is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phone: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Phone is required'),
  });

  console.log('Edit');
  return (
    <div className={styles.edit_Prpfile_Wrapper}>
      <h2>Профиль пользователя</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          address: '',
          email: '',
          phone: '',
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validate}
      >
        {(formik) => (
          <Form className={styles.formWrapper}>
            <div className={styles.inputsWrapper}>
              <TextInput label="First name" name="firstName" type="text" />
              <TextInput label="Last name" name="lastName" type="text" />
              <TextInput label="Age" name="age" type="number" />
              <TextInput label="Address" name="address" type="text" />
              <TextInput label="Email" name="email" type="email" />
              <TextInput label="Phone" name="phone" type="text" />
            </div>
            <div className="form-btn-group">
              <button type="submit" className="btn">
                Готово
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
