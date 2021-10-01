import React from 'react';
import PropTypes from 'prop-types';

// import styles from './PagButton.scss';

const CustomSelect = ({ id, options, onChange }) => {
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

CustomSelect.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  id: PropTypes.number,
};

CustomSelect.defaultProps = {
  onChange: () => {},
  options: [],
  id: 1,
};

export default CustomSelect;
