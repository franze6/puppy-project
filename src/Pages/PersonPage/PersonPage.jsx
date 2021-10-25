import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';

import Table from '../../Components/Table/Table';
// import Search from '../../Components/Search/Search';
import Footer from '../../Components/Table/Footer';
import { getPersons } from '../../utils/api';

import styles from './PesonPage.scss';

const PersonPage = () => {
  const [list, setList] = useState([]);
  const [pageCount, setPageCount] = useState();
  const [activePage, setActivePage] = useState(1);
  const [recordCount, setRecordCount] = useState();
  const history = useHistory();
  const { searchText } = useParams();

  async function onPageChange(e) {
    setActivePage(e);
    const data = await getPersons('', e);
    setList(data?.results || []);
  }

  useEffect(async () => {
    const data = await getPersons(searchText || '');
    if (searchText && data?.record_count === 1) history.replace(`/persons/${data?.results?.[0]?.id}`);
    setList(data?.results || []);
    setPageCount(data?.page_count || 1);
    setRecordCount(data?.record_count);
  }, [searchText]);

  const columns = [
    {
      name: 'last_name',
      display: 'Фамилия',
      width: 100,
      format: 'default',
    },
    {
      name: 'first_name',
      display: 'Имя',
      width: 100,
      format: 'default',
    },
    {
      name: 'second_name',
      display: 'Отчество',
      width: 180,
      format: 'default',
    },
    {
      name: 'birth_date',
      display: 'Дата рождения',
      width: 180,
      format: 'date',
    },
    {
      name: 'tax_id',
      display: 'ИНН',
      width: 150,
      format: 'default',
    },
    {
      name: 'insurance_number',
      display: 'СНИЛС',
      width: 150,
      format: 'default',
    },
    {
      name: 'gender',
      display: 'Пол',
      width: 120,
      format: 'default',
    },
  ];
  return (
    <div className={styles.page}>
      {/* <div className={styles.search}>
        <Search onSearch={onSearch} />
      </div> */}
      <Table
        tableName={'Сотрудники'}
        columns={columns}
        rows={list}
        onRowClick={id => history.replace(`/persons/${id}`)}
      />
      <div className={styles.pagination}>
        <Footer
          activePageCount={`${(activePage - 1) * 10 + 1}-${recordCount < 10 ? recordCount : activePage * 10}`}
          recordCount={recordCount}
          pageCount={pageCount}
          activePage={activePage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PersonPage;
