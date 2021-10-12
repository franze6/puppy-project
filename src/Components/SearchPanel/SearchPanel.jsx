import React from 'react';

import Search from '../Search/Search';

import styles from './SearchPanel.scss';

// eslint-disable-next-line react/prop-types
const SearchPanel = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
    </div>
  );
};

export default SearchPanel;
