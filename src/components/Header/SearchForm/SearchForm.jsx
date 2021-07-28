import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const handleClick = () => {
    console.log(value);
  };
  
  return (
    <div className={styles.searchFormWrapper}>
      <form className={styles.searchForm}>
        <input
          value={value}
          type="text"
          className={styles.searchInput}
          placeholder="Search text"
          onChange={(e) => handleChange(e)}
        />
        <button
          className={styles.searchButton}
          type="button"
          onClick={handleClick}
        >
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
