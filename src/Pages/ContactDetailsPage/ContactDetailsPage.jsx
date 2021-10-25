import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { setMessengers, deleteMessengers, updateMessengers } from '../../utils/api';

import Table from '../../Components/Table/Table';

import styles from './ContactDetailsPage.scss';

const ContactDetailsPage = ({ person }) => {
  const [list, setList] = useState([]);
  const [personId, setPersonId] = useState();

  useEffect(async () => {
    const data = person;
    setPersonId(data.id);
    setList(data.messenger || []);
  }, []);

  function onDelete(id) {
    deleteMessengers(id);
  }
  function onCreate(arr) {
    setMessengers(arr, personId);
  }

  function onUpdate(arr) {
    const rowId = arr.id;
    updateMessengers(arr, rowId);
  }

  const columns = [
    {
      name: 'uid',
      display: 'UID',
      width: 350,
      format: 'default',
    },
    {
      name: 'name',
      display: 'Тип',
      // display_field: 'type_name',
      width: 300,
      format: 'default',
    },
    {
      name: 'is_active',
      display: 'Действующий',
      width: 200,
      format: 'bool',
    },
  ];
  return (
    <div className={styles.page}>
      <Table
        tableName={'Контактная информация'}
        onCreate={onCreate}
        onUpdate={onUpdate}
        columns={columns}
        rows={list}
        canDelete
        canUpdate
        onDelete={onDelete}
      />
    </div>
  );
};

ContactDetailsPage.propTypes = {
  person: PropTypes.object,
};

export default ContactDetailsPage;
