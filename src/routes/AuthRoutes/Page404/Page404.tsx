import React from 'react';
import styles from './Page404.module.scss';
import { Title } from '../../../components/Title/Title';

const Page404 = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <div className={styles.PageTitle}>
      <Title titleText="404 Page not found" />
    </div>
  </div>
);

export default Page404;
