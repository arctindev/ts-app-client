import React, {useRef, useEffect} from 'react';
import styles from './PageStore.module.scss';
import { Title } from '../../components/Title/Title';
import ServiceList from '../../components/ServiceList/ServiceList';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { RootStateOrAny, useSelector } from 'react-redux';

const PageStore = (): JSX.Element => {
  const ref:any = useRef();
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  useEffect(() => {
    const scroll = ref.current.el.childNodes[2].childNodes[0];
    darkMode?
    scroll.className += ` ${styles.DarkScrollColor}`
    :
    scroll.className += ` ${styles.ScrollColor}`

    console.log('performanceCheck')
  },[darkMode]);

  return (
    <div>
      <SimpleBar ref={ref} className={styles.Wrapper}>
        <Title titleText="Store" />
        <ServiceList />
      </SimpleBar>
    </div>
  );
};

export default PageStore;
