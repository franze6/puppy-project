import React, { useState, useEffect } from 'react';

import propTypes from 'prop-types';

import style from './Select.scss';

// eslint-disable-next-line camelcase
const Select = ({ getFunc, disabled, selectedName, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [options, setList] = useState([]);
  useEffect(async () => {
    const data = await getFunc();
    setList(data || []);
    setSelectedOption(selectedName || data[0].name);
  }, [selectedName]);
  return (
    <div className={disabled ? style.select__disabled : style.select}>
      <div className={style.select__header} onClick={() => setIsOpen(!isOpen)}>
        <span className={style.select__current}>{selectedOption}</span>
        {disabled ? '' : <div className={style.select__icon}>&#9660;</div>}
      </div>
      {isOpen && (
        <div className={style.select__body}>
          {options.map(option => (
            <div key={option.id} id={option.id} className={style.select__item} onClick={onChange}>
              {option.name}
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
  onChange: propTypes.func,
  getFunc: propTypes.func,
  selectedName: propTypes.string,
};

Select.defaultProps = {
  options: [],
  display_field: 'type_name',
  disabled: false,
  onChange: () => {},
  getFunc: () => {},
  selectedName: '',
};

export default Select;
