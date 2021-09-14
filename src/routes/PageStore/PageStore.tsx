import React from 'react';
import styles from './PageStore.module.scss';
import { Title } from '../../components/Title/Title';
import ServiceList from '../../components/ServiceList/ServiceList';

const PageStore = (): JSX.Element => {
  return (
    <div className={styles.Wrapper}>
      <Title titleText="Store" />
      <ServiceList />
    </div>
  );
};

export default PageStore;
