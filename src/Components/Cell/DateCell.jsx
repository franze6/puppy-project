import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './DateCell.scss';

const DateCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return (
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={new Date(value).toString() === 'Invalid Date' ? '' : new Date(value)}
        onChange={e => onChange(e)}
        className={styles.customInput}
      />
    );
  }
  return <div>{new Date(value).toString() === 'Invalid Date' ? '' : new Date(value).toLocaleDateString()}</div>;
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
