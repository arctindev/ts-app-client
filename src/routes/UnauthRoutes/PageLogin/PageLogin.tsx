import React from 'react';
import styles from './PageLogin.module.scss';
import LoginForm from '../../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import { ReactComponent as LoginLogoSVG } from '../../../assets/svg/LoginLogo.svg';
import { RootStateOrAny, useSelector } from 'react-redux';

const PageLogin = (): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <div
      className={
        darkMode
          ? `${styles.Wrapper} ${styles['is-dark']}`
          : `${styles.Wrapper}`
      }
    >
      <div
        className={
          darkMode
            ? `${styles.Header} ${styles['is-dark']}`
            : `${styles.Header}`
        }
      >
        <LoginLogoSVG />
      </div>
      <LoginForm />
      <div className={styles.LoginLinks}>
        <Link
          className={
            darkMode
              ? `${styles.LoginLinkForgotPass} ${styles['is-dark']}`
              : `${styles.LoginLinkForgotPass}`
          }
          to="/forgot_your_password"
        >
          Forgot your Password ?
        </Link>
        <Link
          className={
            darkMode
              ? `${styles.LoginLinkCreateAccount} ${styles['is-dark']}`
              : `${styles.LoginLinkCreateAccount}`
          }
          to="/create_account"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default PageLogin;
