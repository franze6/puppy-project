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
  const options = [
    {
      id: 1,
      type_name: 'Телефон',
    },
    {
      id: 2,
      type_name: 'telegram',
    },
    {
      id: 3,
      type_name: 'e-mail',
    },
    {
      id: 4,
      type_name: 'WhatsApp',
    },
  ];
  const columns = [
    {
      name: 'type',
      display: 'Тип',
      display_field: 'type_name',
      width: 180,
      format: 'dropdown',
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
      <div className={styles.name__table}>Контактная информация</div>
      <Table columns={columns} options={options} rows={list} canDelete canUpdate />
    </div>
  );
};

export default ContactDetailsPage;
