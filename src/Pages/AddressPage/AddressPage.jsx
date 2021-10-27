import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { setAddress, deleteAddresses, updateAddress } from '../../utils/api';

import Table from '../../Components/Table/Table';

import Maps from '../../Components/Map/Map';

import styles from './AddressPage.scss';

const AddressPage = ({ person }) => {
  const [list, setList] = useState([]);
  const [personId, setPersonId] = useState();

  useEffect(async () => {
    const data = person;
    setPersonId(data.id);
    setList(data.address || []);
  }, []);

  function onDelete(id) {
    deleteAddresses(id);
  }

  function onCreate(arr) {
    setAddress(arr, personId);
  }

  function onUpdate(arr) {
    const rowId = arr.id;
    updateAddress(arr, rowId);
  }

  const columns = [
    {
      name: 'address_plain',
      display: 'Адрес',
      width: 550,
      format: 'default',
    },
    {
      name: 'is_active',
      display: 'Актуальный',
      width: 300,
      format: 'bool',
    },
  ];
  return (
    <div className={styles.page}>
      <Table
        tableName={'Место жительства'}
        onCreate={onCreate}
        onDelete={onDelete}
        onUpdate={onUpdate}
        columns={columns}
        rows={list}
        canDelete
        canUpdate
      />
      <div className={styles.map}>
        <Maps />
      </div>
    </div>
  );
};

AddressPage.propTypes = {
  person: PropTypes.object,
};

export default AddressPage;
