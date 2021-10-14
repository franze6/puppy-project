import React from 'react';

import cn from 'classnames';

import PropTypes from 'prop-types';

import style from './Modal.scss';

const Modal = ({ active, onClose, onClickOk }) => {
  return (
    <div className={cn(style.modal, { [style.active]: active })} onClick={onClose}>
      <div className={style.modal__content} onClick={e => e.stopPropagation()}>
        Вы действительно хотите удалить запись?
        <div className={style.button}>
          <button onClick={onClickOk}>ДА</button>
          <button onClick={onClose}>НЕТ</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  onClickOk: PropTypes.func,
};

Modal.defaultProps = {
  active: false,
  onClose: () => {},
  onClickOk: () => {},
};

export default Modal;
