import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import styles from './CheckBox.scss';

const Checkbox = ({ label, size, disabled, isMiddle, onChange, checked }) => {
  const classes = {
    [styles.size20]: size !== 16,
    [styles.size16]: size === 16,
    [styles.disabled]: disabled,
    [styles.textSize_20]: size !== 16,
    [styles.textSize_16]: size === 16,
  };

  // для генерации уникального id у checkbox
  const checkboxId = nanoid();

  const checkClasses = {
    [styles.middle]: isMiddle,
    [styles.union]: !isMiddle,
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.hide}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        id={checkboxId}
        checked={checked}
      />
      <label className={classNames(styles.checkbox, classes)} htmlFor={checkboxId}>
        <div className={classNames(checkClasses)} />
      </label>
      <div className={classNames(styles.text, { [styles.textDisabled]: disabled })}>{label}</div>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.node,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  isMiddle: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  label: '',
  size: 20,
  disabled: false,
  isMiddle: true,
  onChange: () => {},
  checked: true,
};

export default Checkbox;
