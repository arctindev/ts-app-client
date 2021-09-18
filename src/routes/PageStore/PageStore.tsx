import React, {useEffect} from 'react';
import styles from './PageStore.module.scss';
import { Title } from '../../components/Title/Title';
import { Label } from '../../components/Label/Label';
import ServiceList from '../../components/ServiceList/ServiceList';
import { useGetDayByIdMutation } from '../../store';

const PageStore = (): JSX.Element => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();

  useEffect(() => {
      getServices({ id: "today" });
  }, [getServices]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <Title titleText="Booking" />
        <Label classConfig="isBookingDate" labelText="22 / 07" />
      </div>
      <ServiceList data={data} isSuccess={isSuccess}/>
    </div>
  );
};

export default PageStore;
