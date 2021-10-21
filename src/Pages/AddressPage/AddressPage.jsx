import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { setAddress } from '../../utils/api';

import Table from '../../Components/Table/Table';

import styles from './AddressPage.scss';

const AddressPage = ({ person }) => {
  const [list, setList] = useState([]);
  const [personId, setPersonId] = useState();

  useEffect(async () => {
    const data = person;
    setPersonId(data.id);
    setList(data.address || []);
  }, []);

  function onCreate(arr) {
    setAddress(arr, personId);
  }

  const columns = [
    {
      name: 'address_plain',
      display: 'Адрес',
      width: 350,
      format: 'default',
    },
    {
      name: 'is_active',
      display: 'Актуальный',
      width: 180,
      format: 'bool',
    },
  ];
  return (
    <div className={styles.page}>
      <Table tableName={'Место жительства'} onCreate={onCreate} columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

AddressPage.propTypes = {
  person: PropTypes.object,
};

export default AddressPage;
