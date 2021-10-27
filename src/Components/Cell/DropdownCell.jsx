import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import Dropdown from '../Dropdown/RemoteDropdown';
import Select from '../Select/Select';

const DropdownCell = ({ value, isEdit, getFunc, onChange }) => {
  const [selectedName, setSelectedName] = useState();

  function onChangeType(e) {
    onChange(e.target.innerText);
    setSelectedName(e.target.innerText);
  }
  useEffect(async () => {
    const data = await getFunc();
    const listSelectedName = data.filter(curr => curr.name === value);
    if (listSelectedName.length > 0) {
      setSelectedName(listSelectedName[0].name);
    }
  }, []);
  if (isEdit) {
    if (isEdit) {
      return <Select onChange={onChangeType} getFunc={getFunc} selectedName={selectedName} />;
    }
    return <Select checked={value} isMiddle={false} disabled />;
  }
  return <div>{value}</div>;
};
DropdownCell.propTypes = {
  value: PropTypes.any,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
  getFunc: PropTypes.func,
};

DropdownCell.defaultProps = {
  value: '',
  isEdit: false,
  onChange: () => {},
  getFunc: () => {},
};

export default DropdownCell;
