/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel } from '@material-ui/core';
import styles from './ContactDetails.module.scss';
import TextInput from '../../../UI/Input/TextInput';
import FormikControl from '../../../UI/FormikControl';
import createOrder from '../../../../api/createOrder';
import deleteCart from '../../../../api/deleteCart';
import {
  cartDeleteAction,
  deleteLocalCartAction,
} from '../../../../store/cart/actions';
import getOneProduct from '../../../../api/getOneProduct';
import RadioInput from '../../../UI/RadioInput/RadioInput';
import RadioInput2 from '../../../UI/RadioInput2/RadioInput';
import FinalModal from '../../../FinalModal/FinalModal';
import sendMessageToTelegram from '../../../../api/telegram';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
    paddingLeft: 0,
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const ContactDetails = ({ currentUser }) => {
  const cart = useSelector((state) => state.cart.cart);
  const isLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  // const currentUser = useSelector((state) => state.admin.currentUser);
  const dispatch = useDispatch();
  const currentUserId = useSelector((state) => state.admin.currentUser._id);
  const [selectedValueDelivery, setSelectedValueDelivery] = React.useState('a');
  const [orderNoState, setorderNo] = React.useState('');

  const [modalActive, setModalActive] = useState(false);
  // const handleOrderConfirm = () => {
  //   setModalActive(true);
  // };

  const orderProducts = [];
  if (!isLoggedIn) {
    cart.forEach((product) => {
      console.log(product);
      getOneProduct(product.itemNo).then((res) => {
        /* Do something with product */
        console.log('GETTED', res);
        const productObj = {
          product: res.data,
          cartQuantity: product.count,
        };
        orderProducts.push(productObj);
        console.log(orderProducts);
      });
    });
  }
  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    console.log('CREATE ORDER');
    console.log(values);
    console.log('selectedValueDelivery', selectedValueDelivery);
    const orderNo = Math.floor(Math.random() * 999999);
    setorderNo(orderNo);
    let deliveryOption = '';
    if (selectedValueDelivery === 'a') {
      deliveryOption = values.optionsSelfDelivery;
    }
    if (selectedValueDelivery === 'b') {
      deliveryOption = values.optionsNPDelivery;
    }
    if (selectedValueDelivery === 'c') {
      deliveryOption = values.address;
    }

    const newOrder = {
      deliveryAddress: JSON.stringify({
        country: 'Ukraine',
        city: 'Kiev',
        deliveryOption,
      }),
      shipping: JSON.stringify('Kiev 50UAH'),
      paymentInfo: JSON.stringify('Credit card'),
      name: values.name,
      email: values.email,
      mobile: values.phone,
      letterSubject: 'ABC_Photo_ordering confirm',
      letterHtml: `<h1>${values.name}, Ваш заказ принят. Номер заказа ${orderNo}.</h1><p>Мы свяжемся с Вами в ближайшее время</p>`,
    };
    if (isLoggedIn) {
      newOrder.customerId = currentUserId;
    } else {
      newOrder.products = JSON.stringify(orderProducts);
    }
    console.log('NEWORDER', newOrder);
    if (isLoggedIn) {
      createOrder(newOrder);
      dispatch(cartDeleteAction());
    } else {
      createOrder(newOrder);
      // clear cart in REDUX & LocalStorege
      dispatch(deleteLocalCartAction());
    }
    sendMessageToTelegram(`Номер заказа: №${orderNo}, Имя: ${values.name}, Телефон: ${values.phone}, Email: ${values.email}`);
    resetForm();
    setModalActive(true);
  };

  const handleChangeDelivery = (e) => {
    console.log(e.target.value);
    setSelectedValueDelivery(e.target.value);
  };
  // ==================================================
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  let validation = yup.object().shape({
    name: yup.string().typeError('Должна быть строка').required('Введите имя'),
    radioButton: yup.string(),
    phone: yup
      .string()
      .matches(
        phoneRegExp,
        'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.'
      )
      .required('Введите номер телефона +380 XX XXX XXXX'),
    email: yup
      .string()
      .email('Введите корректный email')
      .required('Введите емэйл'),

    // optionsSelfDelivery: yup.string().required('Выберите пункт выдачи'),
    // optionsNPDelivery: yup.string().required('Введите емэйл'),
    // address: yup.string().required('Введите емэйл'),
  });
  if (selectedValueDelivery === 'a') {
    validation = yup.object().shape({
      name: yup
        .string()
        .typeError('Должна быть строка')
        .required('Введите имя'),
      radioButton: yup.string(),
      phone: yup
        .string()
        .matches(
          phoneRegExp,
          'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.'
        )
        .required('Введите номер телефона +380 XX XXX XXXX'),
      email: yup
        .string()
        .email('Введите корректный email')
        .required('Введите емэйл'),
      optionsSelfDelivery: yup.string().required('Выберите пункт выдачи'),
      // optionsNPDelivery: yup.string().required('Введите емэйл'),
      // address: yup.string().required('Введите емэйл'),
    });
  }
  if (selectedValueDelivery === 'c') {
    validation = yup.object().shape({
      name: yup
        .string()
        .typeError('Должна быть строка')
        .required('Введите имя'),
      radioButton: yup.string(),
      phone: yup
        .string()
        .matches(
          phoneRegExp,
          'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.'
        )
        .required('Введите номер телефона +380 XX XXX XXXX'),
      email: yup
        .string()
        .email('Введите корректный email')
        .required('Введите емэйл'),
      // optionsSelfDelivery: yup.string().required('Выберите пункт выдачи'),
      // optionsNPDelivery: yup.string().required('Введите емэйл'),
      address: yup.string().required('Введите емэйл'),
    });
  }
  if (selectedValueDelivery === 'b') {
    validation = yup.object().shape({
      name: yup
        .string()
        .typeError('Должна быть строка')
        .required('Введите имя'),
      radioButton: yup.string(),
      phone: yup
        .string()
        .matches(
          phoneRegExp,
          'Номер телефона должен начинаться с "+380", допустимые символы - от 0 до 9.'
        )
        .required('Введите номер телефона +380 XX XXX XXXX'),
      email: yup
        .string()
        .email('Введите корректный email')
        .required('Введите емэйл'),

      optionsNPDelivery: yup.string().required('Выберите отделение НП'),
      // address: yup.string().required('Введите емэйл'),
    });
  }

  const optionsSelfDelivery = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="self-01">г.Киев, ул. Гната Юры, 15б</option>
      <option value="self-02">
        г.Киев, ул. Б. Васильковская (Красноармейская), 132...
      </option>
      <option value="self-03">г.Киев, ул. Ромена Роллана 24</option>
    </>
  );
  const optionsNP = (
    <>
      <option value="-" hidden>
        -
      </option>
      <option value="NP_01">
        Киев, ул. Гната Хоткевича, 8 (м.Черниговская)
      </option>
      <option value="NP_02">Киев, ул. Бережанская, 9 (Оболонь Луговая)</option>
      <option value="NP_03">
        Киев, ул. Николая Василенко, 2 (метро Берестейская)
      </option>
    </>
  );

  const initialValues1 = {
    name: '123',
    phone: '',
    email: '',
    address: '',
    optionsSelfDelivery: '',
    optionsNPDelivery: '',
  };

  const initialValues2 = {
    name: currentUser.firstName,
    phone: currentUser.phone,
    email: currentUser.email,
    address: '',
    optionsSelfDelivery: '',
    optionsNPDelivery: '',
    hiddenInput: selectedValueDelivery,
    RadioInput2: '',
  };
  // console.log(currentUser.firstName);
  // console.log(initialValues2);
  return (
    <div className={styles.ContactDetails}>
      <Formik
        initialValues={initialValues2}
        validateOnBlur
        validationSchema={validation}
        onSubmit={handleFormSubmit}
      >
        {(formik) => (
          <Form className={styles.FormWrapper} id="orderCheckoutForm">
            <div className={styles.FormBlock}>
              <div className={styles.FormBlockTitleWrapper}>
                <h2 className={styles.FormBlockTitle}>Контактные данные</h2>
                <p>*Поля, обязательные для заполнения</p>
              </div>

              <label htmlFor="name">Имя получителя*</label>
              <TextInput
                name="name"
                type="text"
                placeholder="Введиде ваше имя"
              />
              <label htmlFor="phone">Телефон*</label>
              <TextInput name="phone" type="text" placeholder="+380970001234" />
              <label htmlFor="email">E-mail*</label>
              <TextInput
                name="email"
                type="text"
                placeholder="example@gmail.com"
              />
              <input name="hiddenInput" type="hidden" value="hiddenValue" />
            </div>
            <div className={styles.FormBlock}>
              <div className={styles.FormBlockTitleWrapper}>
                <h2 className={styles.FormBlockTitle}>Способы доставки</h2>
              </div>
              <div className={styles.radioOptionBlock}>
                <GreenRadio
                  checked={selectedValueDelivery === 'a'}
                  onChange={handleChangeDelivery}
                  value="a"
                  name="radioButtonA"
                  inputProps={{ 'aria-label': 'A' }}
                  id="pointOfDelivery"
                />
                <label htmlFor="pointOfDelivery">
                  Самовывоз из пункта выдачи
                </label>
                {selectedValueDelivery === 'a' && (
                  <FormikControl
                    control="select"
                    name="optionsSelfDelivery"
                    options={optionsSelfDelivery}
                  />
                )}
              </div>
              <div className={styles.radioOptionBlock}>
                <GreenRadio
                  checked={selectedValueDelivery === 'b'}
                  onChange={handleChangeDelivery}
                  value="b"
                  name="radioButtonB"
                  inputProps={{ 'aria-label': 'B' }}
                  id="pointOfDelivery"
                />
                <label htmlFor="pointOfDelivery">
                  Новая почта (в отделение)
                </label>
                {selectedValueDelivery === 'b' && (
                  <FormikControl
                    control="select"
                    name="optionsNPDelivery"
                    options={optionsNP}
                  />
                )}
              </div>
              <div className={styles.radioOptionBlock}>
                <GreenRadio
                  checked={selectedValueDelivery === 'c'}
                  onChange={handleChangeDelivery}
                  value="c"
                  name="radioButtonC"
                  inputProps={{ 'aria-label': 'C' }}
                  id="pointOfDelivery"
                />
                <label htmlFor="pointOfDelivery">Курьерская доставка</label>
                {selectedValueDelivery === 'c' && (
                  <TextInput
                    name="address"
                    type="text"
                    placeholder="Адрес доставки"
                  />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <FinalModal
        active={modalActive}
        setActive={setModalActive}
        orderNo={orderNoState}
      />
    </div>
  );
};

export default ContactDetails;
