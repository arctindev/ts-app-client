import React from 'react';
import { Label } from '../Label/Label';

export interface ServiceListItemProps {
  id: number;
  name: string;
  hour: string;
  service: string;
}

export const ServiceListItem = (serviceData: ServiceListItemProps) => {
  return (
    <li>
      <Label labelText={serviceData.hour} />
      <Label labelText={serviceData.name} />
      <Label labelText={serviceData.service} />
    </li>
  );
};
