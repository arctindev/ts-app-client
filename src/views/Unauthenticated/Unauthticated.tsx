import React from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../store';

const Unauthenticated = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(authLogin());
  };
  return (
    <div>
      <p>Login</p>
      <input></input>
      <p>Passowrd</p>
      <input></input>
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default Unauthenticated;
