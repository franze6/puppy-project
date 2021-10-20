import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';

// import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import cn from 'classnames';

import Search from './Components/Search/Search';

// import Icon from './Components/Kit/Icon/Icon';

import style from './App.scss';
import SidePanel from './Components/SidePanel/SidePanel';

const App = ({ route }) => {
  // const history = useHistory();
  // async function onSearch(searchTxt) {
  //   history.replace(`/persons/search/${searchTxt}`);
  // }
  const [showNav, setShowNav] = useState(false);
  return (
    <div className={style.wrapper}>
      <div className={style.sidePanel}>
        <SidePanel show={showNav} onClick={() => setShowNav(!showNav)} />
      </div>
      <div className={cn(style.content, { [style.content_active]: showNav })}>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.page}>{renderRoutes(route.routes)}</div>
      </div>
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object,
};

export { App };
