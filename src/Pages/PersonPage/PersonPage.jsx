import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import Table from '../../Components/Table/Table';
import Search from '../../Components/Search/Search';
import Pagination from '../../Components/Pagination/Pagination';
import { getPersons } from '../../utils/api';

import styles from './PesonPage.scss';

const PersonPage = () => {
  const [list, setList] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [activePage, setActivePage] = useState(1);

  const history = useHistory();

  async function onPageChange(e) {
    setActivePage(e);
    const data = await getPersons('', e);
    setList(data?.results || []);
  }

  useEffect(async () => {
    const data = await getPersons();
    setList(data?.results || []);
    setPageCount(data?.page_count || 1);
  }, []);

  async function onSearch(searchTxt) {
    const data = await getPersons(searchTxt);
    setList(data?.results || []);
  }

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
      display: 'Отчество',
      width: 150,
    },
    {
      name: 'birth_date',
      display: 'Дата рождения',
      width: 150,
    },
    {
      name: 'tax_id',
      display: 'ИНН',
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
      width: 120,
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.search}>
        <Search onSearch={onSearch} />
      </div>
      <Table columns={columns} rows={list} onRowClick={id => history.push(`${history.location.pathname}${id}`)} />
      <div className={styles.pagination}>
        <Pagination pageCount={pageCount} activePage={activePage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default PersonPage;
