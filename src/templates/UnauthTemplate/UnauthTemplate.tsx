import React from 'react';
import styles from './UnauthTemplate.module.scss';
import Header from '../../components/Header/Header';
import { RootStateOrAny, useSelector } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

const AuthTemplate: React.FC<Props> = ({ children }) => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <div
      className={
        darkMode
          ? `${styles.Template} ${styles['is-dark']}`
          : `${styles.Template}`
      }
    >
      <Header />
      {children}
    </div>
  );
};

export default AuthTemplate;
