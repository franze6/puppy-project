import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../Kit/Button/Button';

import Input from '../Kit/Input/Input';
import Icon from '../Kit/Icon/Icon';

import styles from './Search.scss';

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');
  return (
    <div className={styles.fieldSearch}>
      <div className={styles.rectangle}>
        <Input
          placeholder={'Введите фамилию полностью...'}
          value={input}
          onChange={setInput}
          onEnterKeyDown={() => onSearch(input)}
          className={styles.searchInput}
          onCrossButtonClick={() => setInput('')}
        />
        <Icon name="search" className={styles.icon} />
      </div>
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
