import React from 'react';

import PropTypes from 'prop-types';

import Input from '../../Kit/Input/Input';
import Icon from '../../Kit/Icon/Icon';

import styles from './InputSearch.scss';

const InputSearch = ({ value, onChange, onEnterKeyDown, onCrossButtonClick }) => {
  return (
    <div className={styles.rectangle}>
      <Input
        placeholder={'Введите фамилию полностью...'}
        value={value}
        onChange={onChange}
        onEnterKeyDown={onEnterKeyDown}
        className={styles.searchInput}
        onCrossButtonClick={onCrossButtonClick}
      />
      <Icon name="search" className={styles.icon} />
    </div>
  );
};

InputSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onCrossButtonClick: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
};
InputSearch.defaultProps = {
  value: '',
  onChange: () => {},
  onCrossButtonClick: () => {},
  onEnterKeyDown: () => {},
};

export default InputSearch;
