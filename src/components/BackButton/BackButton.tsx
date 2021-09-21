import React from 'react';
import styles from './BackButton.module.scss';
import { useHistory } from 'react-router-dom';
import { ReactComponent as GoBackSVG } from '../../assets/svg/GoBackSVG.svg';
import { RootStateOrAny, useSelector } from 'react-redux';

export const BackButton = ({ stateChange }: any) => {
  const history = useHistory();
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <button
      className={
        darkMode ? `${styles.Button} ${styles['is-dark']}` : `${styles.Button}`
      }
      onClick={
        stateChange ? () => stateChange({ active: false }) : handleBackClick
      }
    >
      <GoBackSVG />
    </button>
  );
};
