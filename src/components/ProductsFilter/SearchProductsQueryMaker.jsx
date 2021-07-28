/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProductsAction } from '../../store/products/actions';

const FilterQueryMaker = ({
  brandState,
  priceState,
}) => {
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  const sortBy = useSelector((state) => state.productsPage.sortBy);
  const dispatch = useDispatch();

  const rangeQuery = `&minPrice=${priceState[0]}&maxPrice=${priceState[1]}`;
  const addQuerySortBy = `&sort=${sortBy}`;

  const result = useMemo(() => {
    const brandArr = Object.keys(brandState).map((item) => {
      if (item === 'checkboxA' && brandState[item].status) {
        return 'Canon';
      }
      if (item === 'checkboxB' && brandState[item].status) {
        return 'Nikon';
      }
      if (item === 'checkboxC' && brandState[item].status) {
        return 'Fuji';
      }
      if (item === 'checkboxD' && brandState[item].status) {
        return 'Olympus';
      }
      if (item === 'checkboxE' && brandState[item].status) {
        return 'Sony';
      }
      return null;
    });
    const filteredBrandArr = brandArr.filter((item) => item !== null);
    let addQueryBrand = '';
 
    if (filteredBrandArr.length > 0) {
      addQueryBrand = `&brand=${filteredBrandArr.join(',')}`;
    }

    const finalQuery =
      addQueryBrand +
      addQuerySortBy +
      rangeQuery;
    if (finalQuery) {
      // console.log('FINAL QUERY: ', finalQuery);
      dispatch(
        getFilteredProductsAction(currentCategory, page, perPage, finalQuery)
      );
    } else {
      // console.log('SHOW ALL!!!');
      dispatch(getFilteredProductsAction(currentCategory, page, perPage, ''));
    }
  }, [brandState, currentCategory, dispatch, page, perPage, rangeQuery, addQuerySortBy]);

  return null;
};

export default memo(FilterQueryMaker);
