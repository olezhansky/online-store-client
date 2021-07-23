import React from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styles from './Pages.module.scss';

const ErrorPage = () => (
  <div className={styles.Error}>
    <h2>Ooops! Error 404</h2>
    <p>Возможно, вы посетили несуществующую страницу нашего сайта</p>
    <Link to="/">
      <div className={styles.GoHome}>
        <HiOutlineChevronRight />
        <p>Нажмите сюда, что бы перейти на главную страницу</p>
        <HiOutlineChevronLeft />
      </div>
    </Link>
  </div>
);

export default ErrorPage;
