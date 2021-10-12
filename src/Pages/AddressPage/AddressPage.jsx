import React, { useEffect, useState } from 'react';

// import { useHistory } from 'react-router-dom';

import Table from '../../Components/Table/Table';
// import Search from '../../Components/Search/Search';
import { getAddress } from '../../utils/api';

import Map1 from '../../Components/Map/Map';

import styles from './AddressPage.scss';

const AddressPage = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getAddress();
    setList(data?.results || []);
  }, []);

  const columns = [
    {
      name: 'address',
      display: 'Адрес',
      width: 350,
      format: 'default',
    },
    {
      name: 'date_start',
      display: 'Дата заезда',
      width: 180,
      format: 'date',
    },
    {
      name: 'date_end',
      display: 'Дата выезда',
      width: 180,
      format: 'date',
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
      <Map1 />
    </div>
  );
};

export default AddressPage;
