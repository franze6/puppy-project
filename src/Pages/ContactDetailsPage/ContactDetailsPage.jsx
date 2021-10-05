import React, { useEffect, useState } from 'react';

import Table from '../../Components/Table/Table';

import { getContactDetails } from '../../utils/api';

import styles from './ContactDetailsPage.scss';

const ContactDetailsPage = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getContactDetails();
    setList(data?.results || []);
  }, []);

  const columns = [
    {
      name: 'type',
      display: 'Тип',
      display_field: 'type_name',
      width: 120,
    },
    {
      name: 'basic',
      display: 'Основной',
      width: 120,
      format: 'bool',
    },
    {
      name: 'active',
      display: 'Действующий',
      width: 150,
      format: 'bool',
    },
    {
      name: 'UID',
      display: 'UID',
      width: 200,
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default ContactDetailsPage;
