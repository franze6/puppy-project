import React from 'react';
import { renderRoutes } from 'react-router-config';

import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import Search from './Components/Search/Search';

import style from './App.scss';
import SidePanel from './Components/SidePanel/SidePanel';

const App = ({ route }) => {
  const history = useHistory();
  async function onSearch(searchTxt) {
    history.replace(`/persons/search/${searchTxt}`);
  }
  return (
    <div className={style.wrapper}>
      <div>
        <SidePanel />
      </div>
      <div className={style.search}>
        <Search onSearch={onSearch} />
      </div>
      <div className={style.page}>{renderRoutes(route.routes)}</div>
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object,
};

export { App };
