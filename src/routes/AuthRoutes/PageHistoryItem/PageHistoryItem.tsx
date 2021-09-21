import React, { useEffect, useState } from 'react';
import styles from './PageHistoryItem.module.scss';
import { Title } from '../../../components/Title/Title';
import ServiceList from '../../../components/ServiceList/ServiceList';
import { useParams } from 'react-router-dom';
import { dataUtility } from '../../../utils/dataUtility';
import { useGetDayByIdMutation } from '../../../store';
import { ReactComponent as UxHelperSVG } from '../../../assets/svg/UxHelperSVG.svg';
import { BackButton } from '../../../components/BackButton/BackButton';
import ServiceDetails from '../../../components/ServiceDetails/ServiceDetails';
import { RootStateOrAny, useSelector } from 'react-redux';

const serviceDetailsInitialState = {
  active: false,
  data: {
    name: '',
    hour: '',
    service: '',
  },
};
const PageHistoryItem = (): JSX.Element => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();
  const { id }: any = useParams();
  const darkMode = useSelector((state: RootStateOrAny) => state.darkMode);
  const [serviceDetails, setServiceDetails] = useState(
    serviceDetailsInitialState
  );

  useEffect(() => {
    setServiceDetails(serviceDetailsInitialState);
  },[id])

  useEffect(() => {
    getServices({ id: id });
  }, [getServices, id]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <div
          className={
            darkMode
              ? `${styles.TitleDate} ${styles['is-dark']}`
              : `${styles.TitleDate}`
          }
        >
          {!serviceDetails.active ? (
            <>
              <Title titleText="History" />
              <UxHelperSVG />
              <Title titleText={data && dataUtility(data.data[0].date)} />
            </>
          ) : (
            <>
              <Title titleText={data && dataUtility(data.data[0].date)} />
              <UxHelperSVG />
              <Title titleText={serviceDetails.data.hour} />
            </>
          )}
        </div>
        <BackButton stateChange={serviceDetails.active && setServiceDetails} />
      </div>
      {!serviceDetails.active ? (
        <ServiceList
          data={data}
          isSuccess={isSuccess}
          setServiceDetails={setServiceDetails}
        />
      ) : (
        <ServiceDetails serviceDetails={serviceDetails.data} />
      )}
    </div>
  );
};

export default PageHistoryItem;
