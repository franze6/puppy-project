import React, { useEffect, useState } from 'react';

// import { useHistory } from 'react-router-dom';

import Table from '../../Components/Table/Table';
// import Search from '../../Components/Search/Search';
import { getPassport } from '../../utils/api';

import styles from './PassportPage.scss';

const PassportPage = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getPassport();
    setList(data?.results || []);
  }, []);

  const columns = [
    {
      name: 'series',
      display: 'Серия',
      width: 120,
    },
    {
      name: 'number',
      display: 'Номер',
      width: 120,
    },
    {
      name: 'department_code',
      display: 'Код подразделения',
      width: 170,
    },
    {
      name: 'date_issue',
      display: 'Дата выдачи',
      width: 120,
    },
    {
      name: 'issued_by',
      display: 'Кем выдан',
      width: 250,
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default PassportPage;
