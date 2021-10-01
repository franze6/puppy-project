import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.scss';

const Button = memo(({ children, outlined, onClick, className, big, small }) => {
  return (
    <div
      onClick={onClick}
      className={cn(style.button, { [style.outlined]: outlined, [style.big]: big, [style.small]: small }, className)}
    >
      {children}
    </div>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  outlined: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
};

Button.defaultProps = {
  text: '',
  outlined: false,
  onClick: () => {},
  className: '',
  big: false,
  small: false,
};

Button.displayName = 'Button';

export default Button;
