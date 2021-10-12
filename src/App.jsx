import React from 'react';
import { renderRoutes } from 'react-router-config';

import './App.scss';
import SearchPanel from './Components/SearchPanel/SearchPanel';

// eslint-disable-next-line react/prop-types
export const App = ({ route }) => {
  return (
    <div>
      <div>
        <SearchPanel />
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      <div>{renderRoutes(route.routes)}</div>
    </div>
  );
};
