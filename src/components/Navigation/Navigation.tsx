import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const Navigation = () => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <nav className={styles.Navigation}>
      <NavLink
        className={
          darkMode
            ? `${styles.NavLink} ${styles['is-dark']}`
            : `${styles.NavLink}`
        }
        exact
        to="/store"
      >
        Store
      </NavLink>
      <NavLink
        className={
          darkMode
            ? `${styles.NavLink} ${styles['is-dark']}`
            : `${styles.NavLink}`
        }
        exact
        to="/settings"
      >
        Settings
      </NavLink>
      <NavLink
        className={
          darkMode
            ? `${styles.NavLink} ${styles['is-dark']}`
            : `${styles.NavLink}`
        }
        exact
        to="/"
      >
        Logout
      </NavLink>
    </nav>
  );
};

export default Navigation;
