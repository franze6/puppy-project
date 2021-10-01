import React, { useEffect, useState } from 'react';

// import { useHistory } from 'react-router-dom';

import Table from '../../Components/Table/Table';
// import Search from '../../Components/Search/Search';
import { getAddress } from '../../utils/api';

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
    },
    {
      name: 'date_start',
      display: 'Дата заезда',
      width: 120,
    },
    {
      name: 'date_end',
      display: 'Дата выезда',
      width: 120,
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default AddressPage;
