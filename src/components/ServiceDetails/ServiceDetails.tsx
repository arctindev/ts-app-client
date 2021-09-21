import React from 'react';
import styles from './ServiceDetails.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const ServiceDetails = ({ serviceDetails }: any) => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <div
      className={
        darkMode
          ? `${styles.ServiceDetailsWrapper} ${styles['is-dark']}`
          : `${styles.ServiceDetailsWrapper}`
      }
    >
      <p>name: {serviceDetails.name}</p>
      <p>hour: {serviceDetails.hour}</p>
      <p>service: {serviceDetails.service}</p>
    </div>
  );
};

export default ServiceDetails;
