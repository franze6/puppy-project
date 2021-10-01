import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.scss';

const Input = props => {
  return (
    <div className={styles.default}>
      <input
        className={cn(styles.inputDefault)}
        onChange={props.onChange}
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
      />
      <label className={cn(styles.labelDefault, { [styles.labelDisable]: props.disabled })}>{props.label}</label>
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
