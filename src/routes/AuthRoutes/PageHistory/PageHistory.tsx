import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './PageHistory.module.scss';
import { Title } from '../../../components/Title/Title';
import HistoryCalendarList from '../../../components/HistoryCalendarList/HistoryCalendarList';

const PageHistory = (): JSX.Element => {
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

  if (width >= 768 && height >= 568) {
    return <Redirect to="/store" />;
  }

  return (
    <div className={styles.Wrapper}>
      <Title titleText="History" />
      <HistoryCalendarList />
    </div>
  );
};

export default PageHistory;
