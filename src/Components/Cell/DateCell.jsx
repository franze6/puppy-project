import React from 'react';
import PropTypes from 'prop-types';

const DateCell = ({ value, isEdit }) => {
  if (isEdit) {
    return <input type="text" value={value} />;
  }
  return <div>{new Date(value).toLocaleDateString()}</div>;
};
DateCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
};

DateCell.defaultProps = {
  value: '',
  isEdit: false,
};

export default DateCell;
