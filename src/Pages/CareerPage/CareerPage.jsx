import React, { useEffect, useState } from 'react';

import Table from '../../Components/Table/Table';

import { getCareer } from '../../utils/api';

import styles from './CareerPage.scss';

const CareerPage = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getCareer();
    setList(data?.results || []);
  }, []);

  const columns = [
    {
      name: 'date',
      display: 'Дата',
      width: 120,
    },
    {
      name: 'company',
      display: 'Название компании',
      width: 120,
    },
    {
      name: 'position',
      display: 'Должность',
      width: 120,
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default CareerPage;
