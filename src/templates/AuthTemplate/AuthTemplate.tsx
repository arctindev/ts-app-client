import React, { useState, useEffect } from 'react';
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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
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
      {width >= 768 && height >= 568 ? (
        <HistorySidebar /> ? (
          <HistorySidebar />
        ) : null
      ) : null}
      <Footer />
    </div>
  );
};

export default AuthTemplate;
