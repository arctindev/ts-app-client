import React from 'react';
import styles from './HeaderLogo.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';
import LogoSvgPath from './LogoSvgPath';
import LogoSvgFilter from './LogoSvgFilter';

const HeaderLogo = (): JSX.Element => {
  const darkMode: boolean = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <svg
      className={
        darkMode
          ? `${styles.LogoSVG} ${styles['is-dark']}`
          : `${styles.LogoSVG}`
      }
      width="215"
      height="34"
      viewBox="0 0 215 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <LogoSvgPath />
      <LogoSvgFilter darkMode={darkMode} />
    </svg>
  );
};

export default HeaderLogo;
