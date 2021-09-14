import React from 'react';
import styles from './Header.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = (): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <header
      className={
        darkMode ? `${styles.Header} ${styles['is-dark']}` : `${styles.Header}`
      }
    >
      <HeaderLogo />
    </header>
  );
};

export default Header;
