import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { getContactDetails } from '../../utils/api';

import Icon from '../Kit/Icon/Icon';

import styles from './PersonDetail.scss';
import logo from './img/user.png';

const PersonDetail = ({ person }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getContactDetails();
    setList(data?.results || []);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.photo}>
          <img className={styles.logo} src={logo} />
        </div>
        <div className={styles.fio}>{`${person.last_name} ${person.first_name} ${person.second_name}`}</div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            {' '}
            <Icon name="phone" />{' '}
          </div>
          <span className={styles.text}>
            {list.map(contact => (contact.type.type_name === 'Телефон' && contact.active ? contact.UID : ''))}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            {' '}
            <Icon name="telegram" />{' '}
          </div>
          <span className={styles.text}>
            {list.map(contact => (contact.type.type_name === 'Telegram' && contact.active ? contact.UID : ''))}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            {' '}
            <Icon name="mail" />{' '}
          </div>
          <span className={styles.text}>
            {list.map(contact => (contact.type.type_name === 'e-mail' && contact.active ? contact.UID : ''))}
          </span>
        </div>
        <div className={styles.title_contact}>
          <div className={styles.label_contact}>
            {' '}
            <Icon name="whatsApp" />{' '}
          </div>
          <span className={styles.text}>
            {list.map(contact => (contact.type.type_name === 'WhatsApp' && contact.active ? contact.UID : ''))}
          </span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.label}> Дата рождения </div>
          <span className={styles.text}>{`${person.birth_date}`}</span>
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
