import React, { lazy, Suspense } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { ServiceListItemProps } from '../../components/ServiceListItem/ServiceListItem';
import ServiceListSuspence from '../ServiceListSuspense/ServiceListSuspence';
import styles from './ServiceList.module.scss';
const ServiceListItem = lazy(
  () => import('../../components/ServiceListItem/ServiceListItem')
);

const ServiceList = () => {
  const services = useSelector((state: RootStateOrAny) => state.service);
  return (
    <ul className={styles.ServiceList}>
      <Suspense fallback={<ServiceListSuspence />}>
        {services.length >= 0 ? (
          services.map((serviceData: ServiceListItemProps) => (
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
