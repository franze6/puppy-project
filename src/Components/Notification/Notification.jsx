import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getNotification } from '../../utils/api';
import Icon from '../Kit/Icon/Icon';
import Button from '../Kit/Button/Button';

import styles from './Notification.scss';

const Notification = ({ onClose }) => {
  const [viewAll, setViewAll] = useState(false);
  const [activeNote, setActiveNote] = useState({});
  const [listNotification, setListNotification] = useState([]);
  const [fullNote, setFullNote] = useState(-1);

  useEffect(async () => {
    const data = await getNotification();
    setListNotification(data?.results || []);
    setActiveNote(data?.results.sort((a, b) => new Date(b.date) - new Date(a.date))[0] || {});
  }, []);

  function onViewClick() {
    setViewAll(!viewAll);
  }

  function onClickOk(i) {
    setFullNote(i);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleNote}>{viewAll ? 'Уведомления' : 'Уведомление'}</div>
        <div className={styles.viewAll} onClick={() => onViewClick()}>
          {viewAll ? 'Скрыть' : 'Показать все'}
        </div>
      </div>
      {viewAll ? (
        listNotification
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((e, i) => (
            <div key={e.id} className={styles.notification}>
              <div className={styles.icon}>
                <Icon name="notes" />
              </div>
              <div className={styles.activeNote}>
                {fullNote === i && <div className={styles.notificationTxt}>{e.text}</div>}
                <div className={styles.notificationDate}>{new Date(e.date).toLocaleDateString()}</div>
                <div className={styles.buttons}>
                  <Button onClick={() => onClickOk(i)}>{fullNote === i ? 'Скрыть' : 'Подробнее'}</Button>
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
            {activeNote.id === fullNote && <div className={styles.notificationTxt}>{activeNote.text}</div>}
            <div className={styles.notificationDate}>{new Date(activeNote.date).toLocaleDateString()} </div>
            <div className={styles.buttons}>
              <Button onClick={() => onClickOk(fullNote === activeNote.id ? -1 : activeNote.id)}>
                {activeNote.id === fullNote ? 'Свернуть' : 'Подробнее'}
              </Button>
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
};

Notification.defaultProps = {
  onClose: () => {},
};

export default Notification;
