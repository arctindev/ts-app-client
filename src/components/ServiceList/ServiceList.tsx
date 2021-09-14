import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import {
  ServiceListItem,
  ServiceListItemProps,
} from '../../components/ServiceListItem/ServiceListItem';

const ServiceList = () => {
  const services = useSelector((state: RootStateOrAny) => state.service);
  return (
    <ul>
      {services &&
        services.map((serviceData: ServiceListItemProps) => (
          <ServiceListItem key={serviceData.id} {...serviceData} />
        ))}
    </ul>
  );
};

export default ServiceList;
