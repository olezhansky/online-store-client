/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Categories.module.scss';
import ChildrenCategory from './ChildrenCategory';

const Category = ({ category, childrenCategoryArray }) => {
  console.log('test');
  console.log(category);
  console.log(childrenCategoryArray);

  return (
    <div className={styles.CategoryWrapper}>
      <div className={styles.CategoryCard}>{category.name}</div>
      <div className={styles.CildrenCategoryWrapper}>
        {childrenCategoryArray.map((item) => (
          <ChildrenCategory category={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
