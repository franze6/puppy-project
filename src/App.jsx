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
    setId(data?.results.map(curr => curr.id));
    history.replace(`/persons/${data?.results.map(curr => curr.id)}`);
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
