import PropTypes from 'prop-types';

import React, { memo } from 'react';

import cn from 'classnames';

import Icon from '../Icon/Icon';

import style from './Input.scss';

const Input = memo(({ placeholder, isError, onChange, value, onCrossButtonClick, onEnterKeyDown, className }) => {
  const onChangeHandler = val => {
    onChange(val);
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') onEnterKeyDown();
  };

  return (
    <div className={style.wrapper}>
      <input
        value={value}
        placeholder={placeholder}
        className={cn(style.input, { [style.error]: isError }, className)}
        onChange={e => onChangeHandler(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {value && (
        <button onClick={onCrossButtonClick} className={cn(style.cross, style.button)} type="button">
          <Icon name="clear" className={style.icon} />
        </button>
      )}
    </div>
  );
});

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.oneOf([true, false]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  onCrossButtonClick: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
  className: PropTypes.string,
};

Input.defaultProps = {
  isError: false,
  onChange: () => {},
  value: '',
  onCrossButtonClick: () => {},
  onEnterKeyDown: () => {},
  className: '',
};

Input.displayName = 'SearchInput';

export default Input;
