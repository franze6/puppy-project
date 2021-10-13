import React from 'react';
import { renderRoutes } from 'react-router-config';

import style from './App.scss';
import Search from './Components/Search/Search';
import SidePanel from './Components/SidePanel/SidePanel';

// eslint-disable-next-line react/prop-types
export const App = ({ route }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.SidePanel}>
        <SidePanel />
      </div>
      <div className={style.search}>
        <Search />
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      <div className={style.page}>{renderRoutes(route.routes)}</div>
    </div>
  );
};
