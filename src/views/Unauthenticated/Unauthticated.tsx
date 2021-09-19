import React from 'react';
import Routes from '../../routes/UnauthRoutes/Routes';
import UnauthTemplate from '../../templates/UnauthTemplate/UnauthTemplate';
import { BrowserRouter as Router } from 'react-router-dom';

const Unauthenticated = (): JSX.Element => {
  return (
    <Router>
      <UnauthTemplate>
        <Routes />
      </UnauthTemplate>
    </Router>
  );
};

export default Unauthenticated;
