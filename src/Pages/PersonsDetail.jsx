import React, { useEffect, useState } from 'react';

import PersonDetail from '../Components/PersonDetail/PersonDetail';
import { getPerson } from '../utils/api';

const PersonsDetail = () => {
  const [person, setPerson] = useState({});

  useEffect(async () => {
    const data = await getPerson();
    setPerson(data);
  }, []);

  return (
    <div>
      <PersonDetail person={person} />
    </div>
  );
};

export default PersonsDetail;
