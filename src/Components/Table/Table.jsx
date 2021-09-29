import React from 'react';

import PropTypes from 'prop-types';

import style from './Table.scss';

const Table = ({ columns, rows }) => {
  return (
    <div className={style.table}>
      <div className={style.thead}>
        {columns.map(e => (
          <div key={e.name} style={{ width: `${e.width}px` }} className={style.tcol}>
            {e.display}
          </div>
        ))}
      </div>
      <div className={style.tbody}>
        {rows.map(e => (
          <div key={e.id} className={style.trow}>
            {columns.map(col => (
              <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                {e[col.name]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
};

export default Table;
