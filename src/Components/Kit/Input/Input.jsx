import PropTypes from 'prop-types';

import React, { memo } from 'react';

import cn from 'classnames';

import Icon from '../Icon/Icon';

import style from './Input.scss';

const Input = memo(
  ({
    placeholder,
    isError,
    onChange,
    value,
    onCrossButtonClick,
    onEnterKeyDown,
    className,
    size,
    suffix,
    hasCloseIcon,
    onClick,
    disabled,
  }) => {
    const onChangeHandler = val => {
      onChange(val);
    };

    const onKeyDown = event => {
      if (event.key === 'Enter') onEnterKeyDown();
    };

    const classes = {
      [style.error]: isError,
      [style.size_small]: size === 'small',
    };

    return (
      <div className={style.wrapper}>
        <input
          value={value}
          placeholder={placeholder}
          className={cn(style.input, classes, className)}
          onChange={e => onChangeHandler(e.target.value)}
          onKeyDown={onKeyDown}
          onClick={onClick}
          disabled={disabled}
        />
        {value && hasCloseIcon && (
          <button onClick={onCrossButtonClick} className={cn(style.cross, style.button)} type="button">
            <Icon name="clear" className={style.icon} />
          </button>
        )}
        {suffix && <div className={style.suffix}>{suffix}</div>}
      </div>
    );
  },
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isError: PropTypes.oneOf([true, false]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  onCrossButtonClick: PropTypes.func,
  onEnterKeyDown: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  hasCloseIcon: PropTypes.bool,
  onClick: PropTypes.func,
  suffix: PropTypes.node,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  isError: false,
  onChange: () => {},
  value: '',
  onCrossButtonClick: () => {},
  onEnterKeyDown: () => {},
  className: '',
  size: '',
  hasCloseIcon: true,
  suffix: null,
  onClick: () => {},
  disabled: false,
};

Input.displayName = 'SearchInput';

export default Input;
