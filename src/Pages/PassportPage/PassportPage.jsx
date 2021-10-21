import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Table from '../../Components/Table/Table';

import { deletePassports } from '../../utils/api';

import styles from './PassportPage.scss';

const PassportPage = ({ person }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = person;
    setList(data.passport || []);
  }, []);

  function onDelete(id) {
    deletePassports(id);
  }

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
      name: 'issued_by_code',
      display: 'Код подразделения',
      width: 180,
      format: 'default',
    },
    {
      name: 'issued_date',
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
      <Table tableName={'Паспортные Даннные'} onDelete={onDelete} columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

PassportPage.propTypes = {
  person: PropTypes.object,
};

export default PassportPage;
