import React from 'react';
import styles from './Label.module.scss';

export interface LabelProps {
  labelText: string;
  classConfig: string | undefined;
}

export const Label = ({ labelText, classConfig }: LabelProps): JSX.Element => (
  <p className={classConfig ? `${styles.Label} ${styles[classConfig]}` : `${styles.Label}`}>{labelText}</p>
);
