import React from 'react';
import PropTypes from 'prop-types';

import DateCell from './DateCell';
import BoolCell from './BoolCell';
import DefaultCell from './DefaultCell';
import DropDownCell from './DropDownCell';

const Cell = ({ value, data, isEdit, options, onChange }) => {
  if (data.format === 'date') {
    return <DateCell value={value} isEdit={isEdit} onChange={onChange} />;
  }

  if (data.format === 'bool') {
    return <BoolCell value={value} isEdit={isEdit} onChange={onChange} />;
  }

  if (data.format === 'dropdown') {
    return <DropDownCell value={value} options={options} isEdit={isEdit} />;
  }

  return <DefaultCell value={value} isEdit={isEdit} onChange={onChange} />;
};
Cell.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  data: PropTypes.object,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

Cell.defaultProps = {
  options: [],
  value: '',
  data: {},
  isEdit: false,
  onChange: () => {},
};

export default Cell;
