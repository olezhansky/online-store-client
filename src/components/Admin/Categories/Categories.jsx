import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Categories.module.scss';
import Category from './Category';

const Categories = () => {
  const categories = useSelector((state) => state.admin.catalog);
  console.log(categories);
  return (
    <div className={styles.CategoriesWrapper}>
      {categories.map((category) => {
        const childrenCategoryArray = categories.filter(
          (item) => item.parentId === category.name
        );
        if (category.parentId === 'null') {
          return (
            <Category
              category={category}
              childrenCategoryArray={childrenCategoryArray}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Categories;
