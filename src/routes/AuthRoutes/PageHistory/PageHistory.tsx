import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './PageHistory.module.scss';
import { Title } from '../../../components/Title/Title';
import HistoryCalendarList from '../../../components/HistoryCalendarList/HistoryCalendarList';
import useWindowResize from '../../../hooks/useWindowResize';

const PageHistory = (): JSX.Element => {
  const {width, height} = useWindowResize();

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
