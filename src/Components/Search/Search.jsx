import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../Kit/Button/Button';

import styles from './Search.scss';
import InputSearch from './InputSearch/InputSearch';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');
  return (
    <div className={styles.fieldSearch}>
      <InputSearch
        onChange={setInput}
        value={input}
        onEnterKeyDown={() => onSearch(input)}
        onCrossButtonClick={() => setInput('')}
      />
      <Button className={styles.findButton} onClick={() => onSearch(input)}>
        Найти
      </Button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
