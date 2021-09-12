import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Your Store</h1>
      <div className={styles.mask}>
        <h1>Your Store</h1>
      </div>
    </header>
  );
};

export default Header;
