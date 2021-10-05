import React from 'react';
import PropTypes from 'prop-types';

const DefaultCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return <input type="text" value={value} onChange={e => onChange(e.target.value)} />;
  }
  return <div>{value}</div>;
};
DefaultCell.propTypes = {
  value: PropTypes.any,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

DefaultCell.defaultProps = {
  value: '',
  isEdit: false,
  onChange: () => {},
};

export default DefaultCell;
