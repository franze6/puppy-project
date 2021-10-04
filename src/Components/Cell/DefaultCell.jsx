import React from 'react';
import PropTypes from 'prop-types';

const DefaultCell = ({ value, isEdit }) => {
  if (isEdit) {
    return <input type="text" value={value} />;
  }
  return <div>{value}</div>;
};
DefaultCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
};

DefaultCell.defaultProps = {
  value: '',
  isEdit: false,
};

export default DefaultCell;
