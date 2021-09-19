import React from 'react';
import styles from './PageCreateAccount.module.scss';
import CreateAccountForm from '../../../components/CreateAccountForm/CreateAccountForm';
import { Title } from '../../../components/Title/Title';
import { Link } from 'react-router-dom';

const PageCreateAccount = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <div className={styles.PageTitle}>
      <Title titleText="Sign up" />
      <Link to="/login">Back</Link>
    </div>
    <CreateAccountForm />
  </div>
);

export default PageCreateAccount;
