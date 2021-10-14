import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Kit/Input/Input';

const DefaultCell = ({ value, isEdit, onChange }) => {
  if (isEdit) {
    return (
      <Input
        type="text"
        size={'small'}
        value={value}
        onChange={onChange}
        placeholder={'Введите значение...'}
        hasCloseIcon={false}
      />
    );
  }
  return <div>{value}</div>;
};
DefaultCell.propTypes = {
  value: PropTypes.any,
  isEdit: PropTypes.bool,
  onChange: PropTypes.func,
};

DefaultCell.defaultProps = {
  value: '',
  isEdit: false,
  onChange: () => {},
};

export default DefaultCell;
