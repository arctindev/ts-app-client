import React from 'react';
import styles from './MobileNav.module.scss';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  return (
    <nav className={styles.NavWrapper}>
      <Link className={styles.NavLink} to="/">
        <span>Store</span>
      </Link>
      <Link className={styles.NavLink} to="/history">
        <span>History</span>
      </Link>
      <Link className={styles.NavLink} to="/settings">
        <span>Settings</span>
      </Link>
      <Link className={styles.NavLink} to="/">
        <span>Logout</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
