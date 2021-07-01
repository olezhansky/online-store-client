import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './OrderingInfo.module.scss';

const OrderingInfo = () => {
  const validation = yup.object().shape({
    name: yup.string().typeError('Должна быть строка').required('Введите имя'),
    phone: yup.number().typeError('Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.').required('Введите Ваш номер телефона +380 XX XXX XXXX'),
    email: yup.string().email('Введите корректный email')
    
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: ''
      }}
      validateOnBlur
      validationSchema={validation}
    >

      {({
values, errors, touched, handleChange, handleBlur,
}) => (
  <div className={styles.ContactsData}>
    <div className={styles.ContactsDataTitleBlock}>
      <h2>Контактные данные</h2>
      <p>*Поля, обязательные для заполнения</p>
    </div>
    <form className={styles.ContactsDataFormBlock}>
      <div className={styles.ContactsDataField}>
        <label htmlFor="name">Имя получителя*</label>
        <input name="name" id="name" type="text" placeholder="Иван Петрович" onChange={handleChange} onBlur={handleBlur} value={values.name} />
        {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
      </div>
      <div className={styles.ContactsDataField}>
        <label htmlFor="phone">Телефон*</label>
        <input name="phone" id="phone" type="text" placeholder="+38063 111 33 44" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
        {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
      </div>
      <div className={styles.ContactsDataField}>
        <label htmlFor="email">E-mail</label>
        <input name="email" id="email" type="text" placeholder="Ivanov444@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
        {touched.email && errors.email && <p className={styles.Error}>{errors.email }</p>}
      </div>
    </form>
  </div>
      )}
    
    </Formik>
  );
};

export default OrderingInfo;