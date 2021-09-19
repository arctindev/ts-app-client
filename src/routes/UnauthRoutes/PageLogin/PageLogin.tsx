import React from 'react';
import styles from './PageLogin.module.scss';
import LoginForm from '../../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const PageLogin = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <LoginForm />
    <div className={styles.LoginLinks}>
      <Link className={styles.LoginLinkForgotPass} to="/forgot_your_password">
        Forgot your Password ?
      </Link>
      <Link className={styles.LoginLinkCreateAccount} to="/create_account">
        Create Account
      </Link>
    </div>
  </div>
);

export default PageLogin;
