import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getNotification } from '../../utils/api';
import Icon from '../Kit/Icon/Icon';
import Button from '../Kit/Button/Button';

import styles from './Notification.scss';

const Natification = (onClose, onClickOk) => {
  const [viewAll, setViewAll] = useState(-1);
  const [activeNote, setActiveNote] = useState({});
  const [listNotification, setListNotification] = useState([]);

  useEffect(async () => {
    const data = await getNotification();
    setListNotification(data?.results || []);
    setActiveNote(data?.results.sort((a, b) => new Date(b.date) - new Date(a.date))[0] || {});
  }, []);

  function onViewClick() {
    setViewAll(viewAll === 1 ? -1 : 1);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleNote}>{viewAll === 1 ? 'Уведомления' : 'Уведомление'}</div>
        <div className={styles.viewAll} onClick={() => onViewClick()}>
          {viewAll === 1 ? 'Скрыть' : 'Показать все'}
        </div>
      </div>
      {viewAll === 1 ? (
        listNotification
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map(e => (
            <div key={e.id} className={styles.notification}>
              <div className={styles.icon}>
                <Icon name="notes" />
              </div>
              <div className={styles.activeNote}>
                <div className={styles.notificationTxt}>{e.text}</div>
                <div className={styles.notificationDate}>{new Date(e.date).toLocaleDateString()}</div>
                <div className={styles.buttons}>
                  <Button onClick={onClickOk}>OK</Button>
                  <Button onClick={onClose}>Закрыть</Button>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className={styles.notification}>
          <div className={styles.icon}>
            <Icon name="notes" />
          </div>
          <div className={styles.activeNote}>
            <div className={styles.notificationTxt}>{activeNote.text}</div>
            <div className={styles.notificationDate}>{new Date(activeNote.date).toLocaleDateString()} </div>
            <div className={styles.buttons}>
              <Button onClick={onClickOk}>OK</Button>
              <Button onClick={onClose}>Закрыть</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Notification.propTypes = {
  onClose: PropTypes.func,
  onClickOk: PropTypes.func,
};

Notification.defaultProps = {
  onClose: () => {},
  onClickOk: () => {},
};

export default Natification;
