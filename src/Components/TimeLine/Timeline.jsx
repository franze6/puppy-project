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
    <div className={style.wrapper}>
      <div className={style.timeline}>
        <div className={style.line}> </div>
        {list
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map(curr => (
            // eslint-disable-next-line react/jsx-key
            <div className={style.list}>
              <div className={style.circle}></div>
              <div className={style.date}>{new Date(curr.date).getFullYear()}</div>
              <div className={style.carrers}>
                <div className={style.title}>Компания</div>
                {curr.company.company_name}
              </div>
              <div className={style.carrers}>
                <div className={style.title}>Проект</div>
                {curr.project}
              </div>
              <div className={style.carrers}>
                <div className={style.title}>Должность</div>
                {curr.position}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Timeline;
