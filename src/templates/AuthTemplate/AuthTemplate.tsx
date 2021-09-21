import React from 'react';
import styles from './AuthTemplate.module.scss';
import MobileNav from '../../components/MobileNav/MobileNav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { RootStateOrAny, useSelector } from 'react-redux';
import HistorySidebar from '../../components/HistorySidebar/HistorySidebar';

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
      <Navigation />
      {children}
      <MobileNav />
      <HistorySidebar />
      <Footer />
    </div>
  );
};

export default AuthTemplate;
