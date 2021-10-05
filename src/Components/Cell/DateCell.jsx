import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return <DatePicker selected={new Date(value)} onChange={e => onChange(e)} />;
  }
  return <div>{new Date(value).toLocaleDateString()}</div>;
};
DateCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

DateCell.defaultProps = {
  value: '',
  isEdit: false,
  onChange: () => {},
};

export default DateCell;
