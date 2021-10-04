import React from 'react';
import PropTypes from 'prop-types';

import DateCell from './DateCell';
import BoolCell from './BoolCell';
import DefaultCell from './DefaultCell';

const Cell = ({ value, data, isEdit }) => {
  if (data.format === 'date') {
    return <DateCell value={value} isEdit={isEdit} />;
  }

  if (data.format === 'bool') {
    return <BoolCell value={value} isEdit={isEdit} />;
  }

  return <DefaultCell value={value} isEdit={isEdit} />;
};
Cell.propTypes = {
  value: PropTypes.node,
  data: PropTypes.object,
  isEdit: PropTypes.bool,
};

Cell.defaultProps = {
  value: '',
  data: {},
  isEdit: false,
};

export default Cell;
