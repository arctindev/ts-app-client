import React, { useEffect } from 'react';
import styles from './PageHistoryItem.module.scss';
import { Title } from '../../../components/Title/Title';
import ServiceList from '../../../components/ServiceList/ServiceList';
import { useParams } from 'react-router-dom';
import { dataUtility } from '../../../utils/dataUtility';
import { useGetDayByIdMutation } from '../../../store';
import { ReactComponent as UxHelperSVG } from '../../../assets/svg/UxHelperSVG.svg';
import { BackButton } from '../../../components/BackButton/BackButton';
import { RootStateOrAny, useSelector } from 'react-redux';

const PageHistoryItem = (): JSX.Element => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();
  const { id }: any = useParams();
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);

  useEffect(() => {
    getServices({ id: id });
  }, [getServices, id]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <div className={darkMode
          ? `${styles.TitleDate} ${styles['is-dark']}`
          : `${styles.TitleDate}`}>
          <Title titleText="History" />
          <UxHelperSVG />
          <Title titleText={data && dataUtility(data.data[0].date)}
          />
        </div>
        <BackButton />
      </div>
      <ServiceList data={data} isSuccess={isSuccess} />
    </div>
  );
};

export default PageHistoryItem;
