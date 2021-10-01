import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './PagButton.scss';

const PagButton = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn({ [styles.buttonActiv]: props.active }, { [styles.buttonNoActiv]: !props.active })}
    >
      {props.text}
    </button>
  );
};

PagButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  active: PropTypes.bool,
};

PagButton.defaultProps = {
  onClick: () => {},
  onPageChanged: () => {},
  disabled: false,
  text: '1',
  active: true,
};

export default PagButton;
