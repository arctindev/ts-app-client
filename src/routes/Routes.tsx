import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page404 from './Page404/Page404';
import PageHistory from './PageHistory/PageHistory';
import PageStore from './PageStore/PageStore';
import PageSettings from './PageSettings/PageSettings';
import PageHistoryItem from './PageHistoryItem/PageHistoryItem';

const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/history/:id">
      <PageHistoryItem />
    </Route>
    <Route exact path="/store">
      <PageStore />
    </Route>
    <Route exact path="/history">
      <PageHistory />
    </Route>
    <Route exact path="/settings">
      <PageSettings />
    </Route>
    <Route exact path="/404">
      <Page404 />
    </Route>
    <Route exact path="/">
      <Redirect to="/store" />
    </Route>
    <Route>
      <Redirect to="/404" />
    </Route>
  </Switch>
);

export default Routes;
