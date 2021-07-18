/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
// /* eslint-disable import/no-unresolved */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable react/prop-types */
// import React from 'react';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import styles from './Breadcrumbs.module.scss';

// export default function CustomSeparator() {
//   return (
//     <div className={styles.Breadcrumbs}>
//       <Breadcrumbs
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         <Link color="black" to="/">
//           Главная
//         </Link>
//         <Link color="black" to="/products">
//           Цифровая техника
//         </Link>
//         <Typography color="#7D7D7D"> Фотоаппараты</Typography>
//         <Link color="black" to="/single-product">
//           name
//         </Link>
//       </Breadcrumbs>
//     </div>
//   );
// }

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
