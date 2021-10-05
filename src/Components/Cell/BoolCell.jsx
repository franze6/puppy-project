import React from 'react';
import PropTypes from 'prop-types';

const BoolCell = ({ value, isEdit }) => {
  if (isEdit) {
    return <input type="text" value={value} />;
  }
  return <div>{`${value}`}</div>;
};
BoolCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
};

BoolCell.defaultProps = {
  value: '',
  isEdit: false,
};

export default BoolCell;
