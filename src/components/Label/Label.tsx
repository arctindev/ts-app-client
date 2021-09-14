import React from 'react';
import styles from './Label.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

export interface LabelProps {
  labelText: string;
  classConfig?: string;
}

export const Label = ({ labelText, classConfig }: LabelProps): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <p
      className={
        darkMode
          ? classConfig
            ? `${styles.Label} ${styles[classConfig]} ${styles['is-dark']}`
            : `${styles.Label} ${styles['is-dark']}`
          : classConfig
          ? `${styles.Label} ${styles[classConfig]}`
          : `${styles.Label}`
      }
    >
      {labelText}
    </p>
  );
};
