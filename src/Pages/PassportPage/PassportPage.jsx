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
      width: 180,
      format: 'default',
    },
    {
      name: 'number',
      display: 'Номер',
      width: 180,
      format: 'default',
    },
    {
      name: 'department_code',
      display: 'Код подразделения',
      width: 180,
      format: 'default',
    },
    {
      name: 'date_issue',
      display: 'Дата выдачи',
      width: 180,
      format: 'date',
    },
    {
      name: 'issued_by',
      display: 'Кем выдан',
      width: 250,
      format: 'default',
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default PassportPage;
