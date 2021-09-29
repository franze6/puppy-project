import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Input = (props) => {
  return (
      <div className={styles.default}>
        <input className={cn(styles.inputDefault, classes)}
               onChange={props.onChange}
               placeholder={props.placeholder}
               disabled={props.disabled}
               value = {props.value}
        />
        <label className={cn(styles.labelDefault,
            {[styles.labelDisable]: props.disabled})}>
          {props.label}
        </label>
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