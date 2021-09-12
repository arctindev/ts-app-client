import React from 'react';
import Template from '../template/Template';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';

const App = (): JSX.Element => {
  return (
    <Router>
      <Template>
        <Routes />
      </Template>
    </Router>
  );
};

export default App;
