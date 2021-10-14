import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';

import { useHistory } from 'react-router-dom';

import Search from './Components/Search/Search';

import { getPersons } from './utils/api';

import style from './App.scss';
import SidePanel from './Components/SidePanel/SidePanel';

// eslint-disable-next-line react/prop-types
export const App = ({ route }) => {
  // eslint-disable-next-line no-unused-vars
  const [Id, setId] = useState([]);
  const history = useHistory();
  async function onSearch(searchTxt) {
    const data = await getPersons(searchTxt);
    const listId = data?.results.map(curr => curr.id);
    setId(listId);
    if (listId.length === 0) {
      // eslint-disable-next-line no-alert
      alert('Ничего не найдено');
    } else if (listId.length > 1) {
      history.replace(`/persons`);
      history.location.list = data?.results;
    } else {
      history.replace(`/persons/${listId}`);
    }
  }
  return (
    <div className={style.wrapper}>
      <div className={style.SidePanel}>
        <SidePanel />
      </div>
      <div className={style.search}>
        <Search onSearch={onSearch} />
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      <div className={style.page}>{renderRoutes(route.routes)}</div>
    </div>
  );
};
