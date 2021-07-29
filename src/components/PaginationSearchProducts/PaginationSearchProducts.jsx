/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

const PaginationSearchProducts = ({productsPerPage, totalProducts, paginate}) => {
    console.log('PaginationSearchProducts');
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
      <div>
        <ul>
          {pageNumbers.map((number) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li onClick={() => paginate(number)}>
              {number}
            </li>
            ))}
        </ul>
      </div>
    );
};

export default PaginationSearchProducts;