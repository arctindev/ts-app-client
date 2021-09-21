import React from 'react';
import { Label } from '../Label/Label';
import styles from './ServiceListItem.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface ServiceListItemProps {
  _id: string;
  name: string;
  hour: string;
  service: string;
  setServiceDetails?: any;
}

const ServiceListItem = ({ ...props }) => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  const handleButtonClick = () => {
    props.setServiceDetails({
      active: true,
      data: { name: props.name, hour: props.hour, service: props.service },
    });
  };
  return (
    <li className={styles.ListItem}>
      <Label classConfig="ListElipsedName" labelText={props.name} />
      <Label classConfig="ListHour" labelText={props.hour} />
      <Label classConfig="ListElipsedLabel" labelText={props.service} />
      <button
        onClick={handleButtonClick}
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
