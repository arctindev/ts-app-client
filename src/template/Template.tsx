import React from 'react';
import styles from './Template.module.scss';
import MobileNav from '../components/MobileNav/MobileNav';
import Header from '../components/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Template: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.template}>
      <Header />
      {children}
      <MobileNav />
    </div>
  );
};

export default Template;
