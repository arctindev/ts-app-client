import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageLogin from './PageLogin/PageLogin';
import PageForgotYourPassword from './PageForgotYourPassword/PageForgotYourPassword';
import PageCreateAccount from './PageCreateAccount/PageCreateAccount';

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/create_account">
      <PageCreateAccount />
    </Route>
    <Route exact path="/forgot_your_password">
      <PageForgotYourPassword />
    </Route>
    <Route exact path="/login">
      <PageLogin />
    </Route>
    <Route>
      <Redirect to="/login" />
    </Route>
  </Switch>
);

export default Routes;
