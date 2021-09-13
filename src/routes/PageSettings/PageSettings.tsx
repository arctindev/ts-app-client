import React from 'react';
import styles from './PageSettings.module.scss';
import { Label } from '../../components/Label/Label';
import { Title } from '../../components/Title/Title';

const PageSettings = (): JSX.Element => (
  <div className={styles.Wrapper}>
    <Title titleText="Settings" />
    <Label classConfig="isSettingsMenu" labelText="Change account details" />
    <Label classConfig="isSettingsMenu" labelText="Switch to dark theme" />
  </div>
);

export default PageSettings;
