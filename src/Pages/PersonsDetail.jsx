import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import PersonDetail from '../Components/PersonDetail/PersonDetail';
import { getPerson } from '../utils/api';

import AddressPage from './AddressPage/AddressPage';
import CareerPage from './CareerPage/CareerPage';
import PassportPage from './PassportPage/PassportPage';
import ContactDetailsPage from './ContactDetailsPage/ContactDetailsPage';

const PersonsDetail = () => {
  const [person, setPerson] = useState({});

  const { id } = useParams();

  useEffect(async () => {
    const data = await getPerson(id || 1);
    setPerson(data);
  }, [id]);

  return (
    <div>
      <PersonDetail person={person} />
      <AddressPage />
      <CareerPage />
      <PassportPage />
      <ContactDetailsPage />
    </div>
  );
};

PersonsDetail.propTypes = {
  match: PropTypes.object,
};

export default PersonsDetail;
