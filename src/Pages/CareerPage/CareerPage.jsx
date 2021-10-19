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
      width: 200,
      format: 'date',
    },
    {
      name: 'company',
      display: 'Название компании',
      display_field: 'company_name',
      width: 200,
      format: 'default',
    },
    {
      name: 'position',
      display: 'Должность',
      width: 200,
      format: 'default',
    },
    {
      name: 'project',
      display: 'Название проекта',
      width: 200,
      format: 'default',
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.name__table}>Карьерный путь</div>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default CareerPage;
