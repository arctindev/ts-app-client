import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as LogoSVG } from '../../assets/svg/LogoSVG.svg';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      {/* <h1 className={styles.title}>Your Store</h1>
      <div className={styles.mask}>
        <h1>Your Store</h1>
      </div> */}
      <LogoSVG />
    </header>
  );
};

export default Header;
