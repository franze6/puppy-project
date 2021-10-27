import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Kit/CheckBox/CheckBox';

const BoolCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return <Checkbox isMiddle={false} checked={!!value} onChange={e => onChange(e.currentTarget.checked)} />;
  }
  return <Checkbox checked={value} isMiddle={false} disabled />;
};
BoolCell.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

BoolCell.defaultProps = {
  value: '',
  checked: true,
  isEdit: false,
  onChange: () => {},
};

export default BoolCell;
