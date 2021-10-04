import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Button from '../Kit/Button/Button';

import style from './Table.scss';

const Table = ({ columns, rows, onRowClick, canUpdate, canDelete }) => {
  const [internalColumns, setInternalColumns] = useState(columns);

  useEffect(() => {
    if ((canDelete || canUpdate) && internalColumns.findIndex(col => col.name === 'operations') === -1) {
      setInternalColumns([
        ...internalColumns,
        { name: 'operations', display: 'Операции', width: 0 + (canDelete ? 100 : 0) + (canUpdate ? 100 : 0) },
      ]);
    }
  }, [canUpdate, canDelete, columns]);

  return (
    <div className={style.table}>
      <div className={style.thead}>
        {internalColumns.map(e => (
          <div key={e.name} style={{ width: `${e.width}px` }} className={style.tcol}>
            {e.display}
          </div>
        ))}
      </div>
      <div className={style.tbody}>
        {rows.map(e => (
          <div key={e.id} className={style.trow} onClick={() => onRowClick(e.id)}>
            {internalColumns.map(col => {
              if (col.name === 'operations') {
                return (
                  <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                    {canDelete && <Button small>Удалить</Button>}
                    {canUpdate && <Button small>Изменить</Button>}
                  </div>
                );
              }
              if (col.display_field) {
                return (
                  <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                    {e[col.name][col.display_field]}
                  </div>
                );
              }
              return (
                <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                  {e[col.name]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  canUpdate: PropTypes.bool,
  canDelete: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array,
  onRowClick: PropTypes.array,
};

Table.defaultProps = {
  canUpdate: false,
  canDelete: false,
};

export default Table;
