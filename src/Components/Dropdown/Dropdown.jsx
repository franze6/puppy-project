import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ id, options, onChange }) => {
  return (
    <select id={id} onChange={onChange}>
      {options.map((option, index) => (
        <option key={id + index} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  id: PropTypes.number,
};

Dropdown.defaultProps = {
  onChange: () => {},
  options: [],
  id: 1,
};

export default Dropdown;
