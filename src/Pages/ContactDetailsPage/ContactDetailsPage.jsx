import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Table from '../../Components/Table/Table';

import styles from './ContactDetailsPage.scss';

const ContactDetailsPage = ({ person }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = person;
    setList(data.messenger || []);
  }, []);

  const columns = [
    {
      name: 'name',
      display: 'Тип',
      // display_field: 'type_name',
      width: 180,
      format: 'default',
    },
    {
      name: 'is_active',
      display: 'Действующий',
      width: 180,
      format: 'bool',
    },
    {
      name: 'uid',
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

ContactDetailsPage.propTypes = {
  person: PropTypes.object,
};

export default ContactDetailsPage;
