/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { IoMdOptions } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchProductsContainer.module.scss';
import PhotoCamerasFilter from '../../components/ProductsFilter/PhotoCamerasFilter';
import {
  getAllProductsCurrentCategoryAction,
  getFilteredProductsAction,
} from '../../store/products/actions';
import Loader from '../../components/UI/Loader/Loader';
import VideoCamerasFilter from '../../components/ProductsFilter/VideoCamerasFilter';
import ActionCamerasFilter from '../../components/ProductsFilter/ActionCamerasFilter';
import LensesFilter from '../../components/ProductsFilter/LensesFilter';
import SearchProductsFilter from '../../components/ProductsFilter/SearchProductsFilter';
import SearchProductsField from '../../components/SearchProductsField/SearchProductsField';
import PaginationSearchProducts from '../../components/PaginationSearchProducts/PaginationSearchProducts';

const SearchProductsContainer = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state) => state.productsPage.currentCategory
  );
  const page = useSelector((state) => state.productsPage.currentPage);
  const perPage = useSelector((state) => state.productsPage.currentPerPage);
  useEffect(() => {
    dispatch(getFilteredProductsAction(currentCategory, page, perPage, ''));
    dispatch(getAllProductsCurrentCategoryAction(currentCategory));
  }, [currentCategory, dispatch, page, perPage]);
  const searchProducts = useSelector((state) => state.searchProducts.searchProducts);
  const isLoadingProducts = useSelector(
    (state) => state.productsPage.isLoadingProducts
  );

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    console.log('Close');
    document.body.classList.toggle('no-scroll');
    setIsActive(!isActive);
  };
  const filtersMobile = classNames({
    [styles.filtersContainerMobile]: true,
    [styles.filtersContainerMobile_active]: isActive,
  });
  const filtersOverLay = classNames({
    [styles.filtersOverlay]: true,
    [styles.filtersOverlay_active]: isActive,
  });
  const showFiltersBtn = classNames({
    [styles.showFiltersBtn]: true,
    [styles.showFiltersBtn_hidden]: isActive,
  });

  const [currentPage2, setCurrentPage2] = useState(1);
  const [productsPerPage] = useState(5);

  const lastProductsIndex = currentPage2 * productsPerPage;
  const firstProductsIndex = lastProductsIndex - productsPerPage;
  const currentProduct = searchProducts.slice(firstProductsIndex, lastProductsIndex);

  const paginate = (pageNumber) => {
    setCurrentPage2(pageNumber);
  };

  return (
    <div className={styles.ProductsBlock}>
      <div className="container">
        <div className={styles.ProductsContainer}>
          <div className={showFiltersBtn} onClick={handleClick}>
            <IoMdOptions />
          </div>
          <div className={styles.filterContainer}>
            <SearchProductsFilter />
          </div>
          {searchProducts.length === 0 ? (
            <div className={styles.PrductsFieldLoader}>
              <Loader />
            </div>
          ) : (
            !isLoadingProducts && <SearchProductsField searchProducts={currentProduct} />
          )}
        </div>
      </div>

      <div className={filtersOverLay} onClick={handleClick}></div>
      <div className={filtersMobile}>
        <div className={styles.filtersCloseBtn} onClick={handleClick}>
          <VscChromeClose />
        </div>
        <PhotoCamerasFilter />
      </div>
      <PaginationSearchProducts
        productsPerPage={productsPerPage}
        totalProducts={searchProducts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchProductsContainer;
