import React from 'react';
import styles from './PageStore.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const PageStore = (): JSX.Element => {
  const services = useSelector((state : RootStateOrAny) => state.service);
  return (
    <div className={styles.Wrapper}>
      <h1>Store</h1>
      {services &&
        services.map((service: any) => (
          <div key={service.id}>
            <p>{service.hour}</p>
            <p>{service.name}</p>
            <p>{service.service}</p>
            <p>================</p>
          </div>
        ))}
    </div>
  );
};

export default PageStore;
