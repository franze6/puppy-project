import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import cn from 'classnames';

import { nanoid } from 'nanoid';

import Button from '../Kit/Button/Button';

import Cell from '../Cell/Cell';

import Icon from '../Kit/Icon/Icon';

import Modal from '../Modal/Modal';

import style from './Table.scss';

const Table = ({ columns, rows, onRowClick, canUpdate, canDelete, tableName }) => {
  const [internalColumns, setInternalColumns] = useState(columns);
  const [internalRows, setInternalRows] = useState(rows);
  const [editRowIndex, setEditRowIndex] = useState(-1);
  const [currentDeletingId, setCurrentDeletingId] = useState(-1);

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

  function deleteRow() {
    setInternalRows(internalRows.filter(item => item.id !== currentDeletingId));
    setCurrentDeletingId(-1);
  }

  return (
    <>
      <div className={style.table}>
        <div className={style.name__table}>{tableName}</div>
        <div className={style.buttonAdd}>
          <Button
            onClick={() => {
              const newRowId = nanoid();
              setInternalRows([...internalRows, { id: newRowId }]);
              setEditRowIndex(newRowId);
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
              className={cn(style.trow, { [style.white]: index % 2 === 0 })}
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
                        <div className={style.icon} onClick={() => setCurrentDeletingId(row.id)}>
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
      <Modal active={currentDeletingId !== -1} onClose={() => setCurrentDeletingId(-1)} onClickOk={deleteRow} />
    </>
  );
};

Table.propTypes = {
  canUpdate: PropTypes.bool,
  canDelete: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array,
  onRowClick: PropTypes.func,
  tableName: PropTypes.string,
};

Table.defaultProps = {
  canUpdate: false,
  canDelete: false,
  onRowClick: () => {},
  tableName: '',
};

export default Table;
