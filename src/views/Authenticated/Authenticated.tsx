import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes/AuthRoutes/Routes';

const Authenticated = (): JSX.Element => {
  return (
    <Router>
      <AuthTemplate>
        <Routes />
      </AuthTemplate>
    </Router>
  );
};

export default Authenticated;
