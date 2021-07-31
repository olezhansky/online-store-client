/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import LoginApi from '../../api/login';
import TextInput from '../UI/Input/TextInput';
import {
  exitAction,
  isAdminAction,
  isLoggedInAction,
} from '../../store/admin/actions';
import styles from './LoginModal.module.scss';
import Button from '../UI/Button/Button';
import { loginModalCloseAction } from '../../store/madals/actions';

const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const loginSchema = Yup.object().shape({
    loginOrEmail: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .max(12, 'Must be 12 characters or less')
      .min(7, 'Must be 7 characters or more')
      .required('Password is required'),
  });

  const handleRemoveToken = () => {
    setTimeout(() => {
      dispatch(exitAction());
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    }, 36000000);
  };

  const handleLogin = (values, { setSubmitting, resetForm }) => {
    console.log('handleLogin');
    const { loginOrEmail, password } = values;
    setSubmitting(true);
    const loginData = {
      loginOrEmail,
      password,
    };
    console.log(loginData);
    LoginApi(loginData)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        resetForm();
        dispatch(loginModalCloseAction());
        dispatch(isLoggedInAction(res.data.userData));
        if (res.data.isAdmin) {
          dispatch(isAdminAction());
        }
      })
      .then(() => {
        alert('Login successful');
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        alert(
          'Login failed'
        ); /* Show error to customer, may be incorrect password or something else */
      });
  };
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {(formik) => (
          <Form className={styles.FormWrapper}>
            <div className={styles.InputsWrapper}>
              <TextInput label="Email" name="loginOrEmail" type="email" />
              <div className={styles.PasswordBlock}>
                <TextInput
                  label="Пароль"
                  name="password"
                  type={visiblePassword ? 'text' : 'password'}
                />
                <BsEye
                  display={visiblePassword ? 'block' : 'none'}
                  onClick={() =>
                    setVisiblePassword((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
                <BsEyeSlash
                  display={visiblePassword ? 'none' : 'block'}
                  onClick={() =>
                    setVisiblePassword((visibility) => !visibility)
                  }
                  className={styles.PasswordIcon}
                />
              </div>
            </div>
            <div className={styles.addFunctionsWrapper}>
              <div className={styles.CheckBoxWrapper}>
                <label htmlFor="comp">Чужой компьютер</label>
                <input
                  type="checkbox"
                  name="comp"
                  id="comp"
                  className={styles.checkBox}
                />
              </div>
              <p className={styles.forgotPass}>Забыли пароль?</p>
            </div>
            <div className={styles.BtnsWrapper}>
              <Button
                type="submit"
                addClass="loginForm"
                onClick={handleRemoveToken}
              >
                Войти
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
