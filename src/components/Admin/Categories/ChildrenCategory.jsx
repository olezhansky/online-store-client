/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Categories.module.scss';

const ChildrenCategory = ({ category }) => {
  console.log('CHILD', category);

  return (
    <div className={styles.ChildCategoryCard}>
      <div className={styles.ChildCategoryTitle}>{category.name}</div>
    </div>
  );
};

export default ChildrenCategory;
