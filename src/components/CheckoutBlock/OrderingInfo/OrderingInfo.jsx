/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Select from './Select/Select';
import styles from './OrderingInfo.module.scss';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    paddingLeft: 0
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const OrderingInfo = () => {
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const validation = yup.object().shape({
    name: yup.string().typeError('Должна быть строка').required('Введите имя'),
    phone: yup.string().matches(phoneRegExp, 'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.').required('Введите номер телефона +380 XX XXX XXXX'),
    email: yup.string().email('Введите корректный email')
    
  });

  const [selectedValueDelivery, setSelectedValueDelivery] = React.useState('a');
  const [selectedValuePaymant, setSelectedValuePaymant] = React.useState('e');

  const handleChangeDelivery = (event) => {
    setSelectedValueDelivery(event.target.value);
  };
  const handleChangePaymant = (event) => {
    setSelectedValuePaymant(event.target.value);
  };
  return (
    <div className={styles.OrderingInfo}>
      <div className={styles.ContactsData}>
        <div className={styles.ContactsDataTitleBlock}>
          <h2>Контактные данные</h2>
          <p>*Поля, обязательные для заполнения</p>
        </div>
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
values, errors, touched, handleChange, handleBlur
}) => (
  <form className={styles.ContactsDataFormBlock}>
    <div className={styles.ContactsDataField}>
      <label htmlFor="name">Имя получителя*</label>
      <input name="name" id="name" type="text" placeholder="Иван Петрович" onChange={handleChange} onBlur={handleBlur} value={values.name} />
      {touched.name && errors.name && <p className={styles.Error}>{errors.name }</p>}
    </div>
    <div className={styles.ContactsDataField}>
      <label htmlFor="phone">Телефон*</label>
      <input name="phone" id="phone" type="text" placeholder="+380631113344" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
      {touched.phone && errors.phone && <p className={styles.Error}>{errors.phone }</p>}
    </div>
    <div className={styles.ContactsDataField}>
      <label htmlFor="email">E-mail</label>
      <input name="email" id="email" type="text" placeholder="Ivanov444@gmail.com" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      {touched.email && errors.email && <p className={styles.Error}>{errors.email }</p>}
    </div>
  </form>
    )}
        </Formik>
      </div>
      <div className={styles.Delivery}>
        <h2>Способы доставки</h2>
        <form className={styles.DeliveryForm}>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'a'}
              onChange={handleChangeDelivery}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
              id="pointOfDelivery"
            />
            <label htmlFor="pointOfDelivery">Самовывоз из пункта выдачи</label>
            {selectedValueDelivery === 'a' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'b'}
              onChange={handleChangeDelivery}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
              id="newMail"
            />
            <label htmlFor="newMail">Новая почта (в отделение)</label>
            {selectedValueDelivery === 'b' && <Select />}
          </div>
          <div>
            <GreenRadio
              checked={selectedValueDelivery === 'c'}
              onChange={handleChangeDelivery}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
              id="courierDelivery"
            />
            <label htmlFor="courierDelivery">Курьерская доставка</label>
            {selectedValueDelivery === 'c' && <Select />}
          </div>
        </form>
      </div>
      <div className={styles.WaysOfPayment}>
        <h2>Способы оплаты</h2>
        <form className={styles.WaysOfPaymentForm}>
          <div className={styles.WaysOfPaymentFormLeft}>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'd'}
                onChange={handleChangePaymant}
                value="d"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
                id="cash"
              />
              <label htmlFor="cash">
                Наличными при получении
              </label>
            </div>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'e'}
                onChange={handleChangePaymant}
                value="e"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'E' }}
                id="card"
              />
              <label htmlFor="card">Картой при получении</label>
            </div>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'f'}
                onChange={handleChangePaymant}
                value="f"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'F' }}
                id="cashless"
              />
              <label htmlFor="cashless">Безналичный расчет</label>
            </div>
          </div>
          <div className={styles.WaysOfPaymentFormRight}>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'g'}
                onChange={handleChangePaymant}
                value="g"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'G' }}
                id="alfa"
              />
              <label htmlFor="alfa">Кредит Альфа Банк</label>
            </div>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'h'}
                onChange={handleChangePaymant}
                value="h"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'H' }}
                id="credit"
              />
              <label htmlFor="credit">Кредит Credit Agricole</label>
            </div>
            <div>
              <GreenRadio
                checked={selectedValuePaymant === 'i'}
                onChange={handleChangePaymant}
                value="i"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'I' }}
                id="UKRSIBBANK"
              />
              <label htmlFor="UKRSIBBANK">Кредит УКРСИББАНК</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderingInfo;