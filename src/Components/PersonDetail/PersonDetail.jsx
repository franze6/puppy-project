import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import cn from 'classnames';

import Icon from '../Kit/Icon/Icon';

import styles from './PersonDetail.scss';
import logo from './img/spanch-bob.jpg';

const PersonDetail = ({ person }) => {
  const [isBirthDay, setBirthDay] = useState(false);
  const [editLink, setEditLink] = useState(false);
  const [editLinkTeleg, setEditLinkTeleg] = useState(false);
  const [editLinkMail, setEditLinkMail] = useState(false);
  const [editLinkWhats, setEditLinkWhats] = useState(false);
  const [currentCareer, setCurrentCareer] = useState({});

  useEffect(() => {
    const currentDate = new Date();
    const userBirthDay = new Date(person.birth_date);
    setBirthDay(currentDate.getDate() === userBirthDay.getDate() && currentDate.getMonth() === userBirthDay.getMonth());
    setCurrentCareer(person.career.filter(current => current.end_date === null)[0] || {});
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
        <div className={styles.header__fio}>
          <div className={styles.fio}>{`${person.last_name} ${person.first_name}`}</div>
          <div className={styles.fio}>{`${person.second_name === null ? '' : person.second_name}`}</div>
          <div className={styles.title}>
            <div className={styles.label}> Должность: </div>
            <span className={styles.text}>{`${currentCareer.job_title}`}</span>
          </div>
          <div className={styles.title}>
            <div className={styles.label}> Место работы: </div>
            <span className={styles.text}>
              {/* {currentCareer.company_id ? currentCareer.company_id.name : ''} */}
              {currentCareer.company_id}
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.header__link}>
          {person.messenger.map(contact =>
            contact.name === 'Телефон' && contact.is_active ? (
              <div className={styles.title_contact}>
                <span className={styles.text}>
                  <a
                    className={cn({ [styles.link]: editLink, [styles.link__none]: !editLink })}
                    href={`tel:${contact.uid}`}
                  >
                    {contact.uid}
                  </a>
                </span>
                <div className={styles.label_contact} onClick={() => setEditLink(!editLink)}>
                  <Icon name="phone" className={styles.logo__link} />
                </div>
              </div>
            ) : (
              ''
            ),
          )}

          {person.messenger.map(contact =>
            contact.name === 'Telegram' && contact.is_active ? (
              <div className={styles.title_contact}>
                <span className={styles.text}>
                  <a
                    className={cn({ [styles.link]: editLinkTeleg, [styles.link__none]: !editLinkTeleg })}
                    href={`tg:${contact.uid}`}
                  >
                    {contact.uid}
                  </a>
                </span>
                <div className={styles.label_contact} onClick={() => setEditLinkTeleg(!editLinkTeleg)}>
                  <Icon name="telegram" className={styles.logo__link} />
                </div>
              </div>
            ) : (
              ''
            ),
          )}

          {person.messenger.map(contact =>
            contact.name === 'E-mail' && contact.is_active ? (
              <div className={styles.title_contact}>
                <span className={styles.text}>
                  <a
                    className={cn({ [styles.link]: editLinkMail, [styles.link__none]: !editLinkMail })}
                    href={`mailto:${contact.uid}`}
                  >
                    {contact.uid}
                  </a>
                </span>
                <div className={styles.label_contact} onClick={() => setEditLinkMail(!editLinkMail)}>
                  <Icon name="mail" className={styles.logo__link} />
                </div>
              </div>
            ) : (
              ''
            ),
          )}
          {person.messenger.map(contact =>
            contact.name === 'WhatsApp' && contact.is_active ? (
              <div className={styles.title_contact}>
                <span className={styles.text}>
                  <a
                    className={cn({ [styles.link]: editLinkWhats, [styles.link__none]: !editLinkWhats })}
                    href={`whatsapp:${contact.uid}`}
                  >
                    {contact.uid}
                  </a>
                </span>
                <div className={styles.label_contact} onClick={() => setEditLinkWhats(!editLinkWhats)}>
                  <Icon name="whatsApp" className={styles.logo__link} />
                </div>
              </div>
            ) : (
              ''
            ),
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
