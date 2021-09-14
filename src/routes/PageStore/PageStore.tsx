import React from 'react';
import styles from './PageStore.module.scss';
import { Title } from '../../components/Title/Title';
import { Label } from '../../components/Label/Label';
import ServiceList from '../../components/ServiceList/ServiceList';

const PageStore = (): JSX.Element => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <Title titleText="Booking" />
        <Label classConfig="isBookingDate" labelText="22 / 07" />
      </div>
      <ServiceList />
    </div>
  );
};

export default PageStore;
