import React from 'react';
import styles from './PageCreateAccount.module.scss';
import CreateAccountForm from '../../../components/CreateAccountForm/CreateAccountForm';
import { Title } from '../../../components/Title/Title';
import { ReactComponent as LoginLogoSVG } from '../../../assets/svg/LoginLogo.svg';
import { RootStateOrAny, useSelector } from 'react-redux';
import { BackButton } from '../../../components/BackButton/BackButton';

const PageCreateAccount = (): JSX.Element => {
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
      <div className={styles.PageTitle}>
        <Title titleText="Sign up" />
        <BackButton />
      </div>
      <CreateAccountForm />
    </div>
  );
};

export default PageCreateAccount;
