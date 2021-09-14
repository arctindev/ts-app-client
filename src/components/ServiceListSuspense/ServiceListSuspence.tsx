import React from 'react';
import styles from './ServiceListSuspence.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const ServiceListSuspence = () => {
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  return (
    <ul>
      <li
        className={
          darkMode
            ? `${styles.ListItem} ${styles['is-dark']}`
            : `${styles.ListItem}`
        }
      >
        <div
          className={
            darkMode
              ? `${styles.ListNameSuspence} ${styles['is-dark']}`
              : `${styles.ListNameSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListHourandServiceSuspence} ${styles['is-dark']}`
              : `${styles.ListHourandServiceSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListButtonSuspence} ${styles['is-dark']}`
              : `${styles.ListButtonSuspence}`
          }
        />
      </li>
      <li
        className={
          darkMode
            ? `${styles.ListItem} ${styles['is-dark']}`
            : `${styles.ListItem}`
        }
      >
        <div
          className={
            darkMode
              ? `${styles.ListNameSuspence} ${styles['is-dark']}`
              : `${styles.ListNameSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListHourandServiceSuspence} ${styles['is-dark']}`
              : `${styles.ListHourandServiceSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListButtonSuspence} ${styles['is-dark']}`
              : `${styles.ListButtonSuspence}`
          }
        />
      </li>
      <li
        className={
          darkMode
            ? `${styles.ListItem} ${styles['is-dark']}`
            : `${styles.ListItem}`
        }
      >
        <div
          className={
            darkMode
              ? `${styles.ListNameSuspence} ${styles['is-dark']}`
              : `${styles.ListNameSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListHourandServiceSuspence} ${styles['is-dark']}`
              : `${styles.ListHourandServiceSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListButtonSuspence} ${styles['is-dark']}`
              : `${styles.ListButtonSuspence}`
          }
        />
      </li>
      <li
        className={
          darkMode
            ? `${styles.ListItem} ${styles['is-dark']}`
            : `${styles.ListItem}`
        }
      >
        <div
          className={
            darkMode
              ? `${styles.ListNameSuspence} ${styles['is-dark']}`
              : `${styles.ListNameSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListHourandServiceSuspence} ${styles['is-dark']}`
              : `${styles.ListHourandServiceSuspence}`
          }
        />
        <div
          className={
            darkMode
              ? `${styles.ListButtonSuspence} ${styles['is-dark']}`
              : `${styles.ListButtonSuspence}`
          }
        />
      </li>
    </ul>
  );
};

export default ServiceListSuspence;
