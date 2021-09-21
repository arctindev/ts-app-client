import React from 'react';
import styles from './UnauthTemplate.module.scss';
import Header from '../../components/Header/Header';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ReactComponent as LandscapeDecorationSVG } from '../../assets/svg/LandscapeDecorationSVG.svg';

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
      <LandscapeDecorationSVG />
      {children}
    </div>
  );
};

export default AuthTemplate;
