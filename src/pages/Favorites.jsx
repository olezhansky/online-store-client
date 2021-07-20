import React from 'react';
import Breadcrumbs from '../containers/Breadcrumbs/Breadcrumbs';
import FavoriteContainer from '../containers/FavoriteContainer/FavoriteContainer';

const Favorites = () => {
    console.log('favorites');
    return (
      <>
        <Breadcrumbs />
        <FavoriteContainer />
      </>
    );
};

export default Favorites;