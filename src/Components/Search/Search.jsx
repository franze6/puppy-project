import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';

import styles from './Search.scss';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');
  return (
    <div className={styles.fieldSearch}>
      <Input placeholder={'Поиск'} label={''} value={input} onChange={e => setInput(e.currentTarget.value)} />
      <Button onClick={() => onSearch(input)}>Найти</Button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
