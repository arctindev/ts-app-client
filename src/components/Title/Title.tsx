import React from 'react';
import styles from './Title.module.scss';

interface TitleProps {
  titleText: string;
}

export const Title = ({ titleText }: TitleProps): JSX.Element => <h1 className={styles.Title}>{titleText}</h1>;
