import React from 'react';
import styles from './MobileNav.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as StoreSVG } from '../../assets/svg/StoreSVG.svg';
import { ReactComponent as HistorySVG } from '../../assets/svg/HistorySVG.svg';
import { ReactComponent as SettingsSVG } from '../../assets/svg/SettingsSVG.svg';
import { ReactComponent as LogoutSVG } from '../../assets/svg/LogoutSVG.svg';

const MobileNav = () => {
  return (
    <nav className={styles.NavWrapper}>
      <div className={styles.LinkWrapper}>
        <NavLink className={styles.NavLink} activeClassName={styles['is-active']} to="/store">
          <StoreSVG />
          <span>Store</span>
        </NavLink>
      </div>
      <div className={styles.LinkWrapper}>
        <NavLink className={styles.NavLink} activeClassName={styles['is-active']} to="/history">
          <HistorySVG />
          <span>History</span>
        </NavLink>
      </div>
      <div className={styles.LinkWrapper}>
        <NavLink className={styles.NavLink} activeClassName={styles['is-active']} to="/settings">
          <SettingsSVG />
          <span>Settings</span>
        </NavLink>
      </div>
      <div className={styles.LinkWrapper}>
        <NavLink className={styles.NavLink} activeClassName={styles['is-active']} exact to="/">
          <LogoutSVG />
          <span>Logout</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
