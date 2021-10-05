import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Kit/CheckBox/CheckBox';

const BoolCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return <Checkbox isMiddle={false} checked={value} onChange={e => onChange(e.currentTarget.checked)} />;
  }
  return <Checkbox checked={value} isMiddle={false} disabled />;
};
BoolCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

BoolCell.defaultProps = {
  value: '',
  isEdit: false,
  onChange: () => {},
};

export default BoolCell;
