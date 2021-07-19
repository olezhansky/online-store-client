/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname }
  } = props;
  console.log(history.location);
  const pathnames = pathname.split('/').filter((x) => x);
  console.log(pathname);
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push('/')}>Главная</Link>
      ) : (
        <Typography> Главная </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);