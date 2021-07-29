/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './PaginationSearchProducts.module.scss';

const PaginationSearchProducts = ({
productsPerPage, totalProducts, paginate, currentPage, scrollToTop
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePaginate = (item) => {
      paginate(item);
      scrollToTop();
    };
    return (
      <div className={styles.Pagination}>
        <FaChevronLeft className={styles.ButtonPrev} />
        {pageNumbers.map((item) => (
          <div
            className={classNames({
            [styles.PaginationItem]: true,
            [styles.PaginationItem_active]: currentPage === item,
          })}
            key={item}
            onClick={() => handlePaginate(item)}
          >
            {item}
          </div>
      ))}
        <FaChevronRight className={styles.ButtonNext} />
      </div>
    );
};

export default PaginationSearchProducts;