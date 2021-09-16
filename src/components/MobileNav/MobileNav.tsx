import React from 'react';
import styles from './MobileNav.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as StoreSVG } from '../../assets/svg/StoreSVG.svg';
import { ReactComponent as HistorySVG } from '../../assets/svg/HistorySVG.svg';
import { ReactComponent as SettingsSVG } from '../../assets/svg/SettingsSVG.svg';
import { ReactComponent as LogoutSVG } from '../../assets/svg/LogoutSVG.svg';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { authLogout } from '../../store';

const MobileNav = (): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(authLogout());
  };

  return (
    <nav className={styles.NavWrapper}>
      <div
        className={
          darkMode
            ? `${styles.LinkWrapper} ${styles['is-dark-LinkWrapper']}`
            : `${styles.LinkWrapper}`
        }
      >
        <NavLink
          className={
            darkMode
              ? `${styles.NavLink} ${styles['is-dark-NavLink']}`
              : `${styles.NavLink}`
          }
          activeClassName={
            darkMode ? styles['is-active-dark'] : styles['is-active']
          }
          to="/store"
        >
          <StoreSVG />
          <span>Store</span>
        </NavLink>
      </div>
      <div
        className={
          darkMode
            ? `${styles.LinkWrapper} ${styles['is-dark-LinkWrapper']}`
            : `${styles.LinkWrapper}`
        }
      >
        <NavLink
          className={
            darkMode
              ? `${styles.NavLink} ${styles['is-dark-NavLink']}`
              : `${styles.NavLink}`
          }
          activeClassName={
            darkMode ? styles['is-active-dark'] : styles['is-active']
          }
          to="/history"
        >
          <HistorySVG />
          <span>History</span>
        </NavLink>
      </div>
      <div
        className={
          darkMode
            ? `${styles.LinkWrapper} ${styles['is-dark-LinkWrapper']}`
            : `${styles.LinkWrapper}`
        }
      >
        <NavLink
          className={
            darkMode
              ? `${styles.NavLink} ${styles['is-dark-NavLink']}`
              : `${styles.NavLink}`
          }
          activeClassName={
            darkMode ? styles['is-active-dark'] : styles['is-active']
          }
          to="/settings"
        >
          <SettingsSVG />
          <span>Settings</span>
        </NavLink>
      </div>
      <div
        className={
          darkMode
            ? `${styles.LinkWrapper} ${styles['is-dark-LinkWrapper']}`
            : `${styles.LinkWrapper}`
        }
      >
        <NavLink
          onClick={handleLogoutClick}
          className={
            darkMode
              ? `${styles.NavLink} ${styles['is-dark-NavLink']}`
              : `${styles.NavLink}`
          }
          activeClassName={
            darkMode ? styles['is-active-dark'] : styles['is-active']
          }
          exact
          to="/"
        >
          <LogoutSVG />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
