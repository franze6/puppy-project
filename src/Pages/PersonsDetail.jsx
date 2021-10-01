import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import PersonDetail from '../Components/PersonDetail/PersonDetail';
import { getPerson } from '../utils/api';

const PersonsDetail = props => {
  const [person, setPerson] = useState({});

  useEffect(async () => {
    const data = await getPerson(props?.match?.params?.id || 1);
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
