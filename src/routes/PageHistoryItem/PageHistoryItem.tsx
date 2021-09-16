import React from 'react';
import styles from './PageHistoryItem.module.scss';
import { Title } from '../../components/Title/Title';
import { Label } from '../../components/Label/Label';
import ServiceList from '../../components/ServiceList/ServiceList';
import { useParams } from 'react-router-dom';
import { dataUtility } from '../../utils/dataUtility';

const PageHistoryItem = (): JSX.Element => {
  const { id }: any = useParams();
  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <Title titleText="History" />
        <Label classConfig="isBookingDate" labelText={dataUtility(id)} />
      </div>
      <ServiceList id={id} />
    </div>
  );
};

export default PageHistoryItem;
