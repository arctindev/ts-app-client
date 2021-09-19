import React from 'react';
import styles from './PageSettings.module.scss';
import { Label } from '../../../components/Label/Label';
import { Title } from '../../../components/Title/Title';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../store';

const PageSettings = (): JSX.Element => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  const dispatch = useDispatch();

  const handleDarkModeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SettingsMenu}>
        <Title titleText="Settings" />
        <Label
          classConfig="isSettingsMenu"
          labelText="Change account details"
        />
        <button
          className={styles.SettingsButton}
          onClick={handleDarkModeChange}
        >
          <Label
            classConfig="isSettingsMenu"
            labelText={
              darkMode ? 'Switch to light theme' : 'Switch to dark theme'
            }
          />
        </button>
      </div>
    </div>
  );
};

export default PageSettings;
