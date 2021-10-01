import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

const RemoteDropdown = ({ getFunc, id, onChange }) => {
  const [listCompany, setListCompany] = useState([]);

  useEffect(async () => {
    const data = await getFunc();
    setListCompany(data || []);
  }, []);
  return <Dropdown options={listCompany} id={id} onChange={onChange} />;
};
RemoteDropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  id: PropTypes.number,
  getFunc: PropTypes.func,
};

RemoteDropdown.defaultProps = {
  getFunc: () => {},
  onChange: () => {},
  options: [],
  id: 1,
};
export default RemoteDropdown;
