import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateCell = ({ value, isEdit }) => {
  if (isEdit) {
    // eslint-disable-next-line no-console
    return <DatePicker selected={new Date(value)} onChange={date => console.log(date)} />;
  }
  return <div>{new Date(value).toLocaleDateString()}</div>;
};
DateCell.propTypes = {
  value: PropTypes.node,
  isEdit: PropTypes.bool,
};

DateCell.defaultProps = {
  value: '',
  isEdit: false,
};

export default DateCell;
