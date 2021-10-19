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
      <div className={styles.name__table}>Место жительства</div>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default AddressPage;
