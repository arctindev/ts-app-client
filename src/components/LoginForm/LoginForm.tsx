import React, { useRef, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { useDispatch, RootStateOrAny, useSelector } from 'react-redux';
import { authLogin, useLoginMutation } from '../../store';

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const passRef = useRef(null);
  const [getUser, { isError, data, isSuccess }] = useLoginMutation();
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  const handleLoginClick = () => {
    const login = (loginRef as any).current.value;
    const pass = (passRef as any).current.value;
    getUser({ login: login, pass: pass });
  };

  useEffect(() => {
    if (isSuccess && data.message === 'Success') {
      console.log('Succesfully loged in');
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('me', data.me);
      dispatch(authLogin());
    }
    if (isError) {
      console.log('Sth is wrong');
    }
  }, [data, dispatch, isError, isSuccess]);

  return (
    <div className={styles.LoginFormWrapper}>
      <input
        className={
          darkMode
            ? `${styles.FormInput} ${styles['is-dark']}`
            : `${styles.FormInput}`
        }
        ref={loginRef}
        placeholder="Login"
      ></input>
      <input
        className={
          darkMode
            ? `${styles.FormInput} ${styles['is-dark']}`
            : `${styles.FormInput}`
        }
        ref={passRef}
        placeholder="Password"
      ></input>
      <button
        className={
          darkMode
            ? `${styles.LoginButton} ${styles['is-dark']}`
            : `${styles.LoginButton}`
        }
        onClick={handleLoginClick}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginForm;
