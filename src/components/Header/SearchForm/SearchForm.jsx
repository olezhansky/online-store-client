/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import {
 getSearchProductsAction,
 clearSearchProductsAction,
 setSearchValueAction,
 clearSearchValueAction,
 setSearchValueForUSerAction
} from '../../../store/searchProducts/actions';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchProducts.searchValue);
  const [brands, setBrands] = useState([
    'canon', 'nikon', 'sony', 'fuji'
  ]);
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const newArr = brands.filter((item) => item.includes(searchValue));
    setState(newArr);
    dispatch(setSearchValueAction(e.target.value));
  };

  const handleClick2 = (item) => {
    dispatch(clearSearchProductsAction());
    dispatch(setSearchValueForUSerAction(item));
    dispatch(getSearchProductsAction(item));
    dispatch(clearSearchValueAction());
  };

  const handleClick = () => {
    dispatch(clearSearchProductsAction());
    dispatch(setSearchValueForUSerAction(searchValue));
    dispatch(getSearchProductsAction(searchValue));
    dispatch(clearSearchValueAction());
  };

  return (
    <div className={styles.searchFormWrapper}>
      <form className={styles.searchForm}>
        <input
          value={searchValue}
          type="text"
          className={styles.searchInput}
          placeholder="Search text"
          onChange={(e) => handleChange(e)}
        />
        {searchValue && (
        <ul className={styles.Autocomplete}>
          {state.map((item) => (
            <Link to="/search-products">
              <li
                className={styles.AutocompleteItem}
                onClick={() => handleClick2(item)}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
)}
     
        {!searchValue ? (
          <button
            className={styles.searchButton}
            type="button"
          >
            <SearchIcon className={styles.searchIcon} />
          </button>
          ) : (
            <Link to="/search-products">
              <button
                className={styles.searchButton}
                type="button"
                onClick={handleClick}
              >
                <SearchIcon className={styles.searchIconActive} />
              </button>
            </Link>
          )}
      </form>
    </div>
  );
};

export default SearchForm;
