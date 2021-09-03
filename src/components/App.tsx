import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import axios, { AxiosError, AxiosResponse } from 'axios';

const PRODUCTION = '/endpoint';
const DEVELOPMENT = 'http://localhost:5000/endpoint';

const API_CALLS: string = DEVELOPMENT;

const App = (): JSX.Element => {
  const [state, setState] = useState('');

  const getHelloData = (): void => {
    axios({
      method: 'get',
      url: `${API_CALLS}/hello`,
    })
      .then((result: AxiosResponse) => {
        setState(result.data);
        console.log(result);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  const getOtherData = (): void => {
    axios({
      method: 'get',
      url: `${API_CALLS}/hellos`,
    })
      .then((result: AxiosResponse) => {
        console.log(result);
        setState(result.data);
      })
      .catch((err: AxiosError) => {
        console.log(err.response);
        setState(err.response?.data);
      });
  };

  const handleButtonClick = (): void => {
    getOtherData();
  };

  useEffect((): void => {
    getHelloData();
  }, []);

  return (
    <div className={styles.template}>
      <header className={styles.header}>
        <p>this is header</p>
      </header>
      <div className={styles.wrapper}>
        <h1>{state}</h1>
        <button onClick={handleButtonClick}>Change State</button>
      </div>
      <footer className={styles.footer}>this is footer</footer>
    </div>
  );
};

export default App;
