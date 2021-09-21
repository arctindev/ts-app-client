import React, { useEffect } from 'react';
import { HistoryCalendarItem } from '../../components/HistoryCalendarItem/HistoryCalendarItem';
import styles from './HistoryCalendarList.module.scss';
import { useGetHistoryMutation } from '../../store';

const HistoryCalendarList = () => {
  const [getHistory, { data, isSuccess }] = useGetHistoryMutation();

  useEffect(() => {
    getHistory({});
  }, [getHistory]);

  return (
    <div className={styles.HistoryList}>
      {isSuccess &&
        data.data.map((item: any) => (
          <HistoryCalendarItem key={item._id} itemData={item} />
        ))}
    </div>
  );
};

export default HistoryCalendarList;
