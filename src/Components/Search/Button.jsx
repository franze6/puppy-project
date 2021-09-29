import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.scss';

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cn(styles.button, className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  className: '',
  disabled: false,
};

export default Button;
