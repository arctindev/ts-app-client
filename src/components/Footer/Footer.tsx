import React from 'react';
import styles from './Footer.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const Footer = () => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <footer
      className={
        darkMode ? `${styles.Footer} ${styles['is-dark']}` : `${styles.Footer}`
      }
    >
      <h2>Copyright Arctindev</h2>
    </footer>
  );
};

export default Footer;
