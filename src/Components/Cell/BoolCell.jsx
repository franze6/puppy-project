import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../Kit/CheckBox/CheckBox';

const BoolCell = ({ value, isEdit }) => {
  const [toggle, setToggle] = useState(false);
  if (isEdit) {
    return <input type="text" value={toggle} isMiddle={false} onChange={e => setToggle(e.currentTarget.checked)} />;
  }
  return <Checkbox checked={value} disabled isMiddle={false} />;
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
