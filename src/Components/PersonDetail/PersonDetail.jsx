import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getContactDetails } from '../../utils/api';

import Icon from '../Kit/Icon/Icon';

import styles from './PersonDetail.scss';
import logo from './img/spanch-bob.jpg';

const PersonDetail = ({ person }) => {
  const [list, setList] = useState([]);
  const [isBirthDay, setBirthDay] = useState(false);

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
      <div className={styles.header}>
        <div className={styles.photo}>
          <img className={styles.logo} src={logo} />
          {isBirthDay && (
            <div>
              <Icon name="cake" className={styles.cake} />
            </div>
          )}
        </div>
        <div className={styles.fio}>{`${person.last_name} ${person.first_name} ${person.second_name}`}</div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            <Icon name="phone" />
          </div>
          <span className={styles.text}>
            {list.map(contact =>
              contact.type.type_name === 'Телефон' && contact.active ? (
                <a href={`tel:${contact.UID}`}>{contact.UID}</a>
              ) : (
                ''
              ),
            )}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            <Icon name="telegram" />
          </div>
          <span className={styles.text}>
            {list.map(contact =>
              contact.type.type_name === 'Telegram' && contact.active ? (
                <a href={`tg:${contact.UID}`}>{contact.UID}</a>
              ) : (
                ''
              ),
            )}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            <Icon name="mail" />
          </div>
          <span className={styles.text}>
            {list.map(contact =>
              contact.type.type_name === 'e-mail' && contact.active ? (
                <a href={`mailto:${contact.UID}`}>{contact.UID}</a>
              ) : (
                ''
              ),
            )}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            <Icon name="whatsApp" />
          </div>
          <span className={styles.text}>
            {list.map(contact =>
              contact.type.type_name === 'WhatsApp' && contact.active ? (
                <a href={`whatsapp:${contact.UID}`}>{contact.UID}</a>
              ) : (
                ''
              ),
            )}
          </span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.label}> Дата рождения </div>
          <span className={styles.text}>{`${new Date(person.birth_date).toLocaleDateString()}`}</span>
        </div>
        <div className={styles.title}>
          <div className={styles.label}> Номер ИНН </div>
          <span className={styles.text}>{`${person.tax_id}`}</span>
        </div>
        <div className={styles.title}>
          <div className={styles.label}> СНИЛС </div>
          <span className={styles.text}>{`${person.insurance_number}`}</span>
        </div>
        <div className={styles.title}>
          <div className={styles.label}> Пол </div>
          <span className={styles.text}>{`${person.gender}`}</span>
        </div>
        <div className={styles.title}>
          <div className={styles.label}> Описание </div>
          <span className={styles.text}>{`${person.description}`}</span>
        </div>
      </div>
    </div>
  );
};

PersonDetail.propTypes = {
  person: PropTypes.object,
};

export default PersonDetail;
