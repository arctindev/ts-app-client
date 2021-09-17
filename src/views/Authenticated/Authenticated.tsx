import React from 'react';
import Template from '../../template/Template';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../../routes/Routes';

const Authenticated = (): JSX.Element => {
  return (
    <Router>
      <Template>
        <Routes />
      </Template>
    </Router>
  );
};

export default Authenticated;
