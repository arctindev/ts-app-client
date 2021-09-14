import React from 'react';
import styles from './PageHistory.module.scss';
import { Title } from '../../components/Title/Title';

const PageHistory = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <Title titleText="History" />
  </div>
);

export default PageHistory;
