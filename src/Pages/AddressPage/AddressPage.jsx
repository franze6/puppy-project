import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Table from '../../Components/Table/Table';

import styles from './AddressPage.scss';

const AddressPage = ({ person }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    // const data = await getPerson();
    setList(person.address || []);
  }, []);

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
      <Table tableName={'Место жительства'} columns={columns} rows={list} canDelete canUpdate />
    </div>
  );
};

AddressPage.propTypes = {
  person: PropTypes.object,
};

export default AddressPage;
