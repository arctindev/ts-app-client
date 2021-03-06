import React, { useRef, useState } from 'react';
import styles from './CreateAccountForm.module.scss';
import { Label } from '../Label/Label';
import axios from 'axios';
import { Redirect } from 'react-router';
import { RootStateOrAny, useSelector } from 'react-redux';

const CreateAccountForm = (): JSX.Element => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const repeatPassRef = useRef(null);
  const [created, setCreated] = useState(false);
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  const handleCreateUser = async () => {
    const name = (nameRef as any).current.value;
    const email = (emailRef as any).current.value;
    const pass = (passRef as any).current.value;
    const repeatPassRef = (passRef as any).current.value;
    if (pass === repeatPassRef && name !== '' && email !== '' && pass !== '') {
      try {
        const res = await axios.post(`http://localhost:5000/create-user/`, {
          name: name,
          email: email,
          password: pass,
        });
        console.log('created account', res);
        setCreated(true);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('Passwords are not equal');
    }
  };
  if (created) {
    return <Redirect exact to="/login" />;
  }
  return (
    <div className={styles.LoginFormWrapper}>
      <div className={styles.FormField}>
        <Label labelText="Name" />
        <input
          ref={nameRef}
          className={
            darkMode
              ? `${styles.FormInput} ${styles['is-dark']}`
              : `${styles.FormInput}`
          }
          placeholder="Name"
        />
      </div>
      <div className={styles.FormField}>
        <Label labelText="Email" />
        <input
          ref={emailRef}
          className={
            darkMode
              ? `${styles.FormInput} ${styles['is-dark']}`
              : `${styles.FormInput}`
          }
          placeholder="Email"
        />
      </div>
      <div className={styles.FormField}>
        <Label labelText="Password" />
        <input
          ref={passRef}
          className={
            darkMode
              ? `${styles.FormInput} ${styles['is-dark']}`
              : `${styles.FormInput}`
          }
          placeholder="Password"
        />
      </div>
      <div className={styles.FormField}>
        <Label labelText="Repeat" />
        <input
          ref={repeatPassRef}
          className={
            darkMode
              ? `${styles.FormInput} ${styles['is-dark']}`
              : `${styles.FormInput}`
          }
          placeholder="Repeat Password"
        />
      </div>
      <button
        onClick={handleCreateUser}
        className={
          darkMode
            ? `${styles.LoginButton} ${styles['is-dark']}`
            : `${styles.LoginButton}`
        }
      >
        Sign up
      </button>
    </div>
  );
};

export default CreateAccountForm;
