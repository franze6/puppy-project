import React from 'react';

import Table from './Components/Table/Table';

export const App = () => {
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
  ];

  const rows = [
    {
      id: 1,
      last_name: 'Андрусяк',
      first_name: 'Кирилл',
    },
    {
      id: 2,
      last_name: 'Андрюшин',
      first_name: 'Александр',
    },
    {
      id: 3,
      last_name: 'Красавцев',
      first_name: 'Сергей',
    },
  ];

  return <Table columns={columns} rows={rows} />;
};
