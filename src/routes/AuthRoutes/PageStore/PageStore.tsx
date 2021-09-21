import React, { useEffect, useState } from 'react';
import styles from './PageStore.module.scss';
import { Title } from '../../../components/Title/Title';
import { Label } from '../../../components/Label/Label';
import ServiceList from '../../../components/ServiceList/ServiceList';
import { useGetDayByIdMutation } from '../../../store';
import { dataUtility } from '../../../utils/dataUtility';

const PageStore = (): JSX.Element => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();
  const [serviceDetails, setServiceDetails] = useState({ active: false });

  useEffect(() => {
    getServices({ id: 'today' });
  }, [getServices]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <Title titleText="Booking" />
        {data
          ? data.data[0] && (
              <Label
                classConfig="isBookingDate"
                labelText={data && dataUtility(data.data[0].date)}
              />
            )
          : null}
      </div>
      <ServiceList
        data={data}
        isSuccess={isSuccess}
        setServiceDetails={setServiceDetails}
      />
    </div>
  );
};

export default PageStore;
