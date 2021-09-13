import React from 'react';
import styles from './Title.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

interface TitleProps {
  titleText: string;
}

export const Title = ({ titleText }: TitleProps): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <h1
      className={
        darkMode ? `${styles.Title} ${styles['is-dark']}` : `${styles.Title}`
      }
    >
      {titleText}
    </h1>
  );
};
