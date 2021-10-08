/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Kit/Button/Button';

import Icon from '../Kit/Icon/Icon';

import styles from './Pagination.scss';

const Pagination = props => {
  const pageArr = Array.from(Array(props.pageCount + 1).keys()).slice(1);
  return (
    <div className={styles.buttonsList}>
      {pageArr.map(e => {
        if (e === 1)
          return (
            <Button
              outlined={e !== props.activePage}
              small
              key={e}
              onClick={() => props.onPageChange(props.activePage - 1 || 1)}
              className={styles.buttonRigth}
            >
              <Icon name="rigth" />
            </Button>
          );
        if (e === pageArr.length - 1)
          return (
            <Button
              outlined={e !== props.activePage}
              small
              key={e}
              onClick={() =>
                props.onPageChange(props.activePage + 1 <= pageArr.length ? props.activePage + 1 : pageArr.length)
              }
              className={styles.buttonLeft}
            >
              <Icon name="left" />
            </Button>
          );
      })}
    </div>
  );
};

Pagination.propTypes = {
  disabled: PropTypes.bool,
  pageCount: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  onPageChange: PropTypes.func,
  activePage: PropTypes.number,
};

Pagination.defaultProps = {
  pageCount: 10,
  pageLimit: 5,
  onPageChange: () => {},
  disabled: false,
  activePage: 3,
};

export default Pagination;
