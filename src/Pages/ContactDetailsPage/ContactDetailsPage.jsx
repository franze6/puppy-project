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
      width: 180,
      format: 'default',
    },
    {
      name: 'basic',
      display: 'Основной',
      width: 180,
      format: 'bool',
    },
    {
      name: 'active',
      display: 'Действующий',
      width: 180,
      format: 'bool',
    },
    {
      name: 'UID',
      display: 'UID',
      width: 200,
      format: 'default',
    },
  ];
  return (
    <div className={styles.page}>
      <Table columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

export default ContactDetailsPage;
