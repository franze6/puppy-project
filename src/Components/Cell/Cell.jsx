import React from 'react';
import PropTypes from 'prop-types';

import DateCell from './DateCell';
import BoolCell from './BoolCell';
import DefaultCell from './DefaultCell';

const Cell = ({ value, data, isEdit, onChange }) => {
  if (data.format === 'date') {
    return <DateCell value={value} isEdit={isEdit} onChange={onChange} />;
  }

  if (data.format === 'bool') {
    return <BoolCell value={value} isEdit={isEdit} onChange={onChange} />;
  }

  return <DefaultCell value={value} isEdit={isEdit} onChange={onChange} />;
};
Cell.propTypes = {
  value: PropTypes.any,
  data: PropTypes.object,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

Cell.defaultProps = {
  value: '',
  data: {},
  isEdit: false,
  onChange: () => {},
};

export default Cell;
