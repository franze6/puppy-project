import React from 'react';
import PropTypes from 'prop-types';

import Select from '../Select/Select';

const DropDownCell = ({ isEdit, options }) => {
  if (isEdit) {
    return <Select options={options} />;
  }
  return <Select options={options} disabled />;
};
DropDownCell.propTypes = {
  options: PropTypes.array,
  isEdit: PropTypes.bool,
};

DropDownCell.defaultProps = {
  options: [],
  isEdit: true,
};

export default DropDownCell;
