import React, { useState } from 'react';

import propTypes from 'prop-types';

import style from './Select.scss';

// eslint-disable-next-line camelcase
const Select = ({ display_field, options, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className={disabled ? style.select__disabled : style.select}>
      <div className={style.select__header} onClick={() => setIsOpen(!isOpen)}>
        <span className={style.select__current}>
          {selectedOption ? options.filter(e => e.id === selectedOption).map(e => e.type_name) : 'Выбрать...'}
        </span>
        {disabled ? '' : <div className={style.select__icon}>&#9660;</div>}
      </div>
      {isOpen && (
        <div className={style.select__body}>
          {options.map(option => (
            <div key={option.id} className={style.select__item} onClick={() => setSelectedOption(option.id)}>
              {option?.[display_field]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  options: propTypes.array,
  display_field: propTypes.string,
  disabled: propTypes.bool,
};

Select.defaultProps = {
  options: [],
  display_field: 'type_name',
  disabled: false,
};

export default Select;
