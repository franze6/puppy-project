import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Kit/Button/Button';

import styles from './Pagination.scss';

const Pagination = props => {
  const pageArr = Array.from(Array(props.pageCount + 1).keys()).slice(1);
  return (
    <div className={styles.buttonsList}>
      {pageArr.map(e => {
        return (
          <Button
            className={styles.paginationButton}
            outlined={e !== props.activePage}
            small
            key={e}
            onClick={() => props.onPageChange(e)}
          >
            {e}
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
