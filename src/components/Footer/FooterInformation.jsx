import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const FooterInformation = ({title, links}) => (
  <div className={styles.FooterInformation}>
    <h6>{title}</h6>
    {links.map((link) => (
      <p key={link.text} to={link.to}>
        {link.text}
      </p>
      // <FooterLinkItem key={link.text} to={link.to} onClick={() => window.scrollTo(0, 0)}>
      //   {link.text}
      // </FooterLinkItem>
    ))}
  </div>
);
FooterInformation.propTypes = {
  title: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};
export default FooterInformation;