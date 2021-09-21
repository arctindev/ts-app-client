import React, { useState, useEffect } from 'react';
import styles from './HistorySidebar.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';
import HistoryCalendarList from '../HistoryCalendarList/HistoryCalendarList';

const HistorySidebar = () => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  const [showSidebar, setShowSidebar] = useState(false);

  const HideSidebarFN = () => {
    setShowSidebar(false);
  };
  const handleButtonClick = async () => {
    setShowSidebar(true);
  };
  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('click', HideSidebarFN);
    }

    return () => document.removeEventListener('click', HideSidebarFN);
  }, [showSidebar]);

  return (
    <div
      className={
        showSidebar
          ? darkMode
            ? `${styles.HistorySidebar} ${styles['is-dark']} ${styles['show']}`
            : `${styles.HistorySidebar} ${styles['show']}`
          : darkMode
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
      <button onClick={handleButtonClick}>History</button>
    </div>
  );
};

export default HistorySidebar;
