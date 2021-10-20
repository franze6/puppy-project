import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import style from './Timeline.scss';

const Timeline = ({ person }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    setList(person.career || []);
  }, []);
  return (
    <div className={style.timeline}>
      <div className={style.line}> </div>
      {list
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(curr => (
          <div className={style.list} key={curr.id}>
            <div className={style.circle}></div>
            <div className={style.date}>
              {curr.end_date
                ? `${new Date(curr.start_date).toLocaleDateString()} - ${new Date(curr.end_date).toLocaleDateString()}`
                : `${new Date(curr.start_date).toLocaleDateString()}`}
            </div>
            <div className={style.careers}>
              <div className={style.title}>Компания</div>
              {curr.company_id.name}
            </div>
            <div className={style.careers}>
              <div className={style.title}>Проект</div>
              {curr.project_id.name}
            </div>
            <div className={style.careers}>
              <div className={style.title}>Должность</div>
              {curr.job_title}
            </div>
          </div>
        ))}
    </div>
  );
};

Timeline.propTypes = {
  person: PropTypes.object,
};

export default Timeline;
