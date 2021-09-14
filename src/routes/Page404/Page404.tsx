import React from 'react';
import styles from './Page404.module.scss';
import { Title } from '../../components/Title/Title';

const Page404 = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <Title titleText="404 Page not found" />
  </div>
);

export default Page404;
