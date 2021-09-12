import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from '../components/ViewWrapper/ViewWrapper.module.scss';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <div className={styles.wrapper}>
        <p>Store</p>
      </div>
    </Route>
    <Route exact path="/history">
      <div className={styles.wrapper}>
        <p>History</p>
      </div>
    </Route>
    <Route exact path="/settings">
      <div className={styles.wrapper}>
        <p>Settings</p>
      </div>
    </Route>
    <Route exact path="/404">
      <div className={styles.wrapper}>
        <h1>Module not found</h1>
      </div>
    </Route>
    <Route>
      <Redirect to="/404" />
    </Route>
  </Switch>
);

export default Routes;
