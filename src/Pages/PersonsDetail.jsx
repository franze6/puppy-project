import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import PersonDetail from '../Components/PersonDetail/PersonDetail';
import { getPerson } from '../utils/api';

const PersonsDetail = () => {
  const [person, setPerson] = useState({});

  const { id } = useParams();

  useEffect(async () => {
    const data = await getPerson(id || 1);
    setPerson(data);
  }, []);

  return (
    <div>
      <PersonDetail person={person} />
    </div>
  );
};

PersonsDetail.propTypes = {
  match: PropTypes.object,
};

export default PersonsDetail;
