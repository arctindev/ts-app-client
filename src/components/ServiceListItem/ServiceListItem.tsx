import React from 'react';
import { Label } from '../Label/Label';
import styles from './ServiceListItem.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface ServiceListItemProps {
  id: number;
  name: string;
  hour: string;
  service: string;
}

const ServiceListItem = (serviceData: ServiceListItemProps) => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <li className={styles.ListItem}>
      <Label classConfig="ListElipsedName" labelText={serviceData.name} />
      <Label classConfig="ListHour" labelText={serviceData.hour} />
      <Label classConfig="ListElipsedLabel" labelText={serviceData.service} />
      <button
        className={
          darkMode
            ? `${styles.ListButton} ${styles['is-dark']}`
            : `${styles.ListButton}`
        }
      >
        Check
      </button>
    </li>
  );
};

export default ServiceListItem;
