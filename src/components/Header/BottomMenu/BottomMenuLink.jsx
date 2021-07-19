/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getFilteredProducts from '../../../api/getFilteredProducts';
import { setCurrentCategoryAction } from '../../../store/products/actions';
import DropdownMenu from '../Dropdown/Dropdown';
import styles from './BottomMenu.module.scss';

const BottomMenuLink = ({ parentId, path, title, key }) => {
  const [dropActive, setdropActive] = useState(false);
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setdropActive(!dropActive);
  };
  const handleDropdownClick = (id) => {
    setdropActive(false);
    console.log('MENU clicked', id);
    getFilteredProducts(id);
    dispatch(setCurrentCategoryAction(id));
  };
  return (
    <li
      key={key}
      className={styles.BottomLink}
      onMouseEnter={handleDropdown}
      onMouseLeave={handleDropdown}
      // onClick={handleDropdownClick}
    >
      <NavLink
        to={path}
        activeClassName="selected"
        className={styles.bottomLinks}
      >
        {title}
      </NavLink>
      {dropActive && (
        <DropdownMenu
          parentId={parentId}
          handleClick={handleDropdownClick}
          dropActive={dropActive}
        />
      )}
    </li>
  );
};

export default BottomMenuLink;
