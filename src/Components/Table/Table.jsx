import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import cn from 'classnames';

import { nanoid } from 'nanoid';

import Button from '../Kit/Button/Button';

import Cell from '../Cell/Cell';

import Icon from '../Kit/Icon/Icon';

import style from './Table.scss';

const Table = ({ columns, rows, onRowClick, canUpdate, canDelete }) => {
  const [internalColumns, setInternalColumns] = useState(columns);
  const [internalRows, setInternalRows] = useState(rows);
  const [editRowIndex, setEditRowIndex] = useState(-1);

  useEffect(() => {
    if ((canDelete || canUpdate) && internalColumns.findIndex(col => col.name === 'operations') === -1) {
      setInternalColumns([
        ...internalColumns,
        { name: 'operations', display: 'Операции', width: 0 + (canDelete ? 60 : 0) + (canUpdate ? 60 : 0) },
      ]);
    }
  }, [canUpdate, canDelete, columns]);

  useEffect(() => setInternalRows(rows), [rows]);

  function editRowCell(rowId, cellName, newValue) {
    setInternalRows(
      internalRows.map(row => {
        if (row.id === rowId) {
          return {
            ...row,
            [cellName]: newValue,
          };
        }
        return row;
      }),
    );
  }

  return (
    <div className={style.table}>
      <div className={style.buttAdd}>
        <Button
          onClick={() => {
            const checkboxId = nanoid();
            setInternalRows([...internalRows, { id: checkboxId }]);
            setEditRowIndex(checkboxId);
          }}
        >
          <div className={style.iconAdd}>
            <Icon name="plus" />
          </div>
          Добавить
        </Button>
      </div>
      <div className={style.thead}>
        {internalColumns.map(e => (
          <div key={e.name} style={{ width: `${e.width}px` }} className={style.tcol}>
            {e.display}
          </div>
        ))}
      </div>
      <div className={style.tbody}>
        {internalRows.map((row, index) => (
          <div
            key={row.id}
            className={cn(style.trow, { [style.otrow]: index % 2 === 0 })}
            onClick={() => onRowClick(row.id)}
          >
            {internalColumns.map(col => {
              if (col.name === 'operations') {
                return (
                  <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                    {canUpdate && (
                      <div
                        onClick={() => setEditRowIndex(editRowIndex === row.id ? -1 : row.id)}
                        className={style.icon}
                      >
                        <Icon name={row.id === editRowIndex ? 'saved' : 'edit'} />
                      </div>
                    )}
                    {canDelete && (
                      <div
                        className={style.icon}
                        onClick={() => setInternalRows(internalRows.filter(item => item.id !== row.id))}
                      >
                        <Icon name="delete" />
                      </div>
                    )}
                  </div>
                );
              }
              if (col.display_field) {
                return (
                  <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                    {row[col.name][col.display_field]}
                  </div>
                );
              }
              return (
                <div className={style.tcol} style={{ width: `${col.width}px` }} key={col.name}>
                  <Cell
                    value={row[col.name]}
                    data={col}
                    isEdit={row.id === editRowIndex}
                    onChange={val => editRowCell(row.id, col.name, val)}
                  />
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
  onRowClick: PropTypes.func,
};

Table.defaultProps = {
  canUpdate: false,
  canDelete: false,
  onRowClick: () => {},
};

export default Table;
