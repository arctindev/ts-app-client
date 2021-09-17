import React, { useEffect, lazy, Suspense } from 'react';
import { ServiceListItemProps } from '../../components/ServiceListItem/ServiceListItem';
import ServiceListSuspence from '../ServiceListSuspense/ServiceListSuspence';
import styles from './ServiceList.module.scss';
import { useGetDayByIdMutation } from '../../store';
const ServiceListItem = lazy(
  () => import('../../components/ServiceListItem/ServiceListItem')
);

export interface ListProps {
  id?: string | undefined;
}

const ServiceList = ({ id }: ListProps) => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();

  useEffect(() => {
    if (id) {
      getServices({ id: id });
    } else {
      getServices({ id: '23-07' });
    }
  }, [getServices, id]);

  return (
    <ul className={styles.ServiceList}>
      <Suspense fallback={<ServiceListSuspence />}>
        {isSuccess && data.data[0] ? (
          data.data[0].data.map((serviceData: ServiceListItemProps) => (
            <ServiceListItem key={serviceData.id} {...serviceData} />
          ))
        ) : (
          <ServiceListSuspence />
        )}
      </Suspense>
    </ul>
  );
};

export default ServiceList;
