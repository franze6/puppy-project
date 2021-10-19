import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getContactDetails } from '../../utils/api';

import Icon from '../Kit/Icon/Icon';

import styles from './PersonDetail.scss';
import logo from './img/spanch-bob.jpg';

const PersonDetail = ({ person }) => {
  const [list, setList] = useState([]);
  const [isBirthDay, setBirthDay] = useState(false);
  const [editLink, setEditLink] = useState(false);
  const [editLinkTeleg, setEditLinkTeleg] = useState(false);
  const [editLinkMail, setEditLinkMail] = useState(false);
  const [editLinkWhats, setEditLinkWhats] = useState(false);

  useEffect(async () => {
    const data = await getContactDetails();
    setList(data?.results || []);
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const userBirthDay = new Date(person.birth_date);
    setBirthDay(currentDate.getDate() === userBirthDay.getDate() && currentDate.getMonth() === userBirthDay.getMonth());
  }, [person]);

  return (
    <div className={styles.container}>
      <div className={styles.wraper}>
        <div className={styles.header}>
          <div className={styles.photo}>
            <img className={styles.logo} src={logo} />
            {isBirthDay && (
              <div>
                <Icon name="cake" className={styles.cake} />
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={styles.fio}>{`${person.last_name} ${person.first_name} ${person.second_name}`}</div>
          <div className={styles.main}></div>
        </div>
      </div>
      <div className={styles.header__link}>
        <div className={styles.title_contact}>
          <div className={styles.label_contact} onClick={() => setEditLink(!editLink)}>
            <Icon name="phone" />
          </div>
          {editLink ? (
            <span className={styles.text}>
              {list.map(contact =>
                contact.type.type_name === 'Телефон' && contact.active ? (
                  <a className={styles.link} href={`tel:${contact.UID}`}>
                    {contact.UID}
                  </a>
                ) : (
                  ''
                ),
              )}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact} onClick={() => setEditLinkTeleg(!editLinkTeleg)}>
            <Icon name="telegram" />
          </div>
          {editLinkTeleg ? (
            <span className={styles.text}>
              {list.map(contact =>
                contact.type.type_name === 'Telegram' && contact.active ? (
                  <a className={styles.link} href={`tg:${contact.UID}`}>
                    {contact.UID}
                  </a>
                ) : (
                  ''
                ),
              )}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact} onClick={() => setEditLinkMail(!editLinkMail)}>
            <Icon name="mail" />
          </div>
          {editLinkMail ? (
            <span className={styles.text}>
              {list.map(contact =>
                contact.type.type_name === 'e-mail' && contact.active ? (
                  <a className={styles.link} href={`mailto:${contact.UID}`}>
                    {contact.UID}
                  </a>
                ) : (
                  ''
                ),
              )}
            </span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact} onClick={() => setEditLinkWhats(!editLinkWhats)}>
            <Icon name="whatsApp" />
          </div>
          {editLinkWhats ? (
            <span className={styles.text}>
              {list.map(contact =>
                contact.type.type_name === 'WhatsApp' && contact.active ? (
                  <a className={styles.link} href={`whatsapp:${contact.UID}`}>
                    {contact.UID}
                  </a>
                ) : (
                  ''
                ),
              )}
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

PersonDetail.propTypes = {
  person: PropTypes.object,
};

export default PersonDetail;
