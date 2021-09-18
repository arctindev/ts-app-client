import React from 'react';
import styles from './HistoryCalendarItem.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataUtilityDay, dataUtilityMonth } from '../../utils/dataUtility';

export const HistoryCalendarItem = ({ itemData }: any) => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <Link
      to={`/history/` + itemData._id}
      className={
        darkMode
          ? `${styles.HistoryCalendarItem} ${styles['is-dark']}`
          : `${styles.HistoryCalendarItem}`
      }
    >
      <div className={styles.DateWrapper}>
        <span>{dataUtilityDay(itemData.date)}</span>
        <span>{dataUtilityMonth(itemData.date)}</span>
      </div>
    </Link>
  );
};
