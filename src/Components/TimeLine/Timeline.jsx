import React, { useEffect, useState } from 'react';

import { getCareer } from '../../utils/api';

import style from './Timeline.scss';

const Timeline = () => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getCareer();
    setList(data?.results || []);
  }, []);
  return (
    <div className={style.timeline}>
      <div className={style.line}> </div>
      {list
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(curr => (
          // eslint-disable-next-line react/jsx-key
          <div className={style.list}>
            <div className={style.curr}>{curr.project}</div>
            <div className={style.curr}>{curr.position}</div>
            <div className={style.circle}> </div>
            <div className={style.curr}>{new Date(curr.date).getFullYear()}</div>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
