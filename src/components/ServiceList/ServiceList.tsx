import React from 'react';
import { ServiceListItemProps } from '../../components/ServiceListItem/ServiceListItem';
import ServiceListSuspence from '../ServiceListSuspense/ServiceListSuspence';
import styles from './ServiceList.module.scss';
import ServiceListItem from '../../components/ServiceListItem/ServiceListItem';
export interface ListProps {
  isSuccess: boolean;
  data: any;
  setServiceDetails?: any;
}

const ServiceList = ({ data, isSuccess, setServiceDetails }: ListProps) => {
  return (
    <ul className={styles.ServiceList}>
      {isSuccess && data.data[0] ? (
        data.data[0].data.map((serviceData: ServiceListItemProps) => (
          <ServiceListItem
            key={serviceData._id}
            setServiceDetails={setServiceDetails}
            {...serviceData}
          />
        ))
      ) : (
        <ServiceListSuspence />
      )}
    </ul>
  );
};

export default ServiceList;
