import React from 'react';
import styles from './HistorySidebar.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';
import HistoryCalendarList from '../HistoryCalendarList/HistoryCalendarList';

const HistorySidebar = () => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <div
      className={
        darkMode
          ? `${styles.HistorySidebar} ${styles['is-dark']}`
          : `${styles.HistorySidebar}`
      }
    >
      <h1
        className={
          darkMode
            ? `${styles.HistoryTitle} ${styles['is-dark']}`
            : `${styles.HistoryTitle}`
        }
      >
        History
      </h1>
      <HistoryCalendarList />
    </div>
  );
};

export default HistorySidebar;
