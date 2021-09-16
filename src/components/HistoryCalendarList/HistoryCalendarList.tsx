import React from 'react';
import { HistoryCalendarItem } from '../../components/HistoryCalendarItem/HistoryCalendarItem';
import styles from './HistoryCalendarList.module.scss';
import { useGetHistoryQuery } from '../../store';

const HistoryCalendarList = () => {
  const { data, isSuccess } = useGetHistoryQuery([]);
  return (
    <div className={styles.HistoryList}>
      {isSuccess &&
        data.data.map((item: object, index: number) => (
          <HistoryCalendarItem key={index} itemData={item} />
        ))}
    </div>
  );
};

export default HistoryCalendarList;
