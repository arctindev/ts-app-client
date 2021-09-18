import React, { useEffect} from 'react';
import styles from './PageHistoryItem.module.scss';
import { Title } from '../../components/Title/Title';
import { Label } from '../../components/Label/Label';
import ServiceList from '../../components/ServiceList/ServiceList';
import { useParams } from 'react-router-dom';
import { dataUtility } from '../../utils/dataUtility';
import { useGetDayByIdMutation } from '../../store';

const PageHistoryItem = (): JSX.Element => {
  const [getServices, { data, isSuccess }] = useGetDayByIdMutation();
  const { id }: any = useParams();
  console.log(data)
  useEffect(() => {
      getServices({ id: id });
  }, [getServices, id]);
  
  return (
    <div className={styles.Wrapper}>
      <div className={styles.PageTitle}>
        <Title titleText="History" />
        <Label classConfig="isBookingDate" labelText={data && dataUtility(data.data[0].date)} />
      </div>
      <ServiceList data={data} isSuccess={isSuccess} />
    </div>
  );
};

export default PageHistoryItem;
