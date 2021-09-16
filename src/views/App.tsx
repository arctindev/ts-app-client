import React from 'react';
import Authenticated from './Authenticated/Authenticated';
import Unauthenticated from './Unauthenticated/Unauthticated';
import { RootStateOrAny, useSelector } from 'react-redux';

const AuthCode: any = `${process.env.REACT_APP_SECRET_NAME}`;

const App = (): JSX.Element => {
  const auth = useSelector((state: RootStateOrAny) => state.authentication);

  if (auth === AuthCode) {
    return <Authenticated />;
  }
  return <Unauthenticated />;
};

export default App;
