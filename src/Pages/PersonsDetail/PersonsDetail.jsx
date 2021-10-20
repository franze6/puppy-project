import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import PersonDetail from '../../Components/PersonDetail/PersonDetail';
import { getPerson } from '../../utils/api';

import Timeline from '../../Components/TimeLine/Timeline';

import AddressPage from '../AddressPage/AddressPage';
import PassportPage from '../PassportPage/PassportPage';
import ContactDetailsPage from '../ContactDetailsPage/ContactDetailsPage';

import styles from './PersonsDetail.scss';

const PersonsDetail = () => {
  const [person, setPerson] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(async () => {
    setIsLoading(true);
    const data = await getPerson(id || 1);
    setPerson(data);
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader type="TailSpin" color="#d46b4d" height={100} width={100} />
        </div>
      ) : (
        <div>
          <PersonDetail person={person} />
          <AddressPage person={person} />
          <Timeline />
          <PassportPage person={person} />
          <ContactDetailsPage person={person} />
        </div>
      )}
    </>
  );
};

PersonsDetail.propTypes = {
  match: PropTypes.object,
};

export default PersonsDetail;
