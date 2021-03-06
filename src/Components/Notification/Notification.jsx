import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getNotification } from '../../utils/api';
import Icon from '../Kit/Icon/Icon';

import styles from './Notification.scss';

const Notification = () => {
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
    setFullNote(fullNote === i ? -1 : i);
  }

  function onClickClose(e) {
    e.is_active = false;
    setListNotification(listNotification.filter(curr => curr.is_active === true));
  }

  function onClickCloseNote() {
    activeNote.is_active = false;
    setActiveNote(
      listNotification.filter(curr => curr.is_active === true).sort((a, b) => new Date(b.date) - new Date(a.date))[0] ||
        {},
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleNote}>{viewAll ? 'Уведомления' : 'Уведомление'}</div>
        <div className={styles.viewAll} onClick={() => onViewClick()}>
          {viewAll ? 'Скрыть' : 'Показать все'}
        </div>
      </div>
      {activeNote.id && viewAll && listNotification.length > 0 ? (
        listNotification
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .filter(e => e.is_active === true)
          .map((e, i) => (
            <div key={e.id} className={styles.notification}>
              <div className={styles.icon}>
                <Icon name="notes" />
              </div>
              <div className={styles.activeNote}>
                <div className={styles.notificationTitle}>{e.title}</div>
                {fullNote === i && <div className={styles.notificationTxt}>{e.text}</div>}
                <div className={styles.notificationDate}>{new Date(e.date).toLocaleDateString()}</div>
                <div onClick={() => onClickOk(i)}>
                  {fullNote === i ? (
                    <div className={styles.buttons}>&#9206;Скрыть</div>
                  ) : (
                    <div className={styles.buttons}>&#9207;Подробнее</div>
                  )}
                </div>
              </div>
              <div className={styles.icon__plus} onClick={() => onClickClose(e)}>
                <Icon name="plus" />
              </div>
            </div>
          ))
      ) : (
        <div>
          {activeNote.id && listNotification.length > 0 ? (
            <>
              <div className={styles.notification}>
                <div className={styles.icon}>
                  <Icon name="notes" />
                </div>
                <div className={styles.activeNote}>
                  <div className={styles.notificationTitle}>{activeNote.title}</div>
                  {activeNote.id === fullNote && <div className={styles.notificationTxt}>{activeNote.text}</div>}
                  <div className={styles.notificationDate}>{new Date(activeNote.date).toLocaleDateString()} </div>
                  <div onClick={() => onClickOk(fullNote === activeNote.id ? -1 : activeNote.id)}>
                    {activeNote.id === fullNote ? (
                      <div className={styles.buttons}>&#9206;Скрыть</div>
                    ) : (
                      <div className={styles.buttons}>&#9207;Подробнее</div>
                    )}
                  </div>
                </div>
                <div className={styles.icon__plus} onClick={() => onClickCloseNote(activeNote)}>
                  <Icon name="plus" />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.notNote}> Уведомлений нет </div>
          )}
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
