import React from 'react';
import styles from './Template.module.scss';
import MobileNav from '../components/MobileNav/MobileNav';
import Header from '../components/Header/Header';
import { RootStateOrAny, useSelector } from 'react-redux';

type Props = {
  children: React.ReactNode;
};

const Template: React.FC<Props> = ({ children }) => {
  const darkMode = useSelector((state : RootStateOrAny) => state.darkMode);
  return (
    <div className={darkMode? `${styles.Template} ${styles.dark}` : `${styles.Template}` }>
      <Header />
      {children}
      <MobileNav />
    </div>
  );
};

export default Template;
