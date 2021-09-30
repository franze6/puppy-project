import React, { useEffect, useState } from 'react';

import Table from '../Components/Table/Table';
import { getPersons } from '../utils/api';

const Person = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getPersons();
    setList(data);
  }, []);

  const columns = [
    {
      name: 'last_name',
      display: 'Фамилия',
      width: 100,
    },
    {
      name: 'first_name',
      display: 'Имя',
      width: 100,
    },
    {
      name: 'second_name',
      display: 'Отчесво',
      width: 150,
    },
    {
      name: 'birth_date',
      display: 'Дата рождения',
      width: 150,
    },
    {
      name: 'tax_id',
      display: 'Номер ИНН',
      width: 150,
    },
    {
      name: 'insurance_number',
      display: 'СНИЛС',
      width: 150,
    },
    {
      name: 'gender',
      display: 'Пол',
      width: 30,
    },
  ];
  return (
    <div>
      <Table columns={columns} rows={list} />
    </div>
  );
};

export default Person;
