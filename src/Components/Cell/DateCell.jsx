import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Kit/Input/Input';

import Icon from '../Kit/Icon/Icon';

import styles from './DateCell.scss';

const DateCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return (
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={new Date(value).toString() === 'Invalid Date' ? '' : new Date(value)}
        onChange={e => onChange(e)}
        className={styles.customInput}
        dayClassName={function getClass(date) {
          return this.selected.getDate() === date.getDate() && this.selected.getMonth() === date.getMonth()
            ? styles.openDate
            : styles.anyDate;
        }}
        customInput={
          <Input
            hasCloseIcon={false}
            placeholder={'Дата'}
            size={'small'}
            value={new Date(value).toString() === 'Invalid Date' ? '' : new Date(value)}
            suffix={<Icon name={'calendar'} className={styles.calendarIcon} />}
          />
        }
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
