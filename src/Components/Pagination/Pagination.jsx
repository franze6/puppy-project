import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Icon from '../Kit/Icon/Icon';

import styles from './Pagination.scss';

const Pagination = props => {
  return (
    <div className={styles.buttonsList}>
      <div onClick={() => props.onPageChange(props.activePage - 1 > 0 ? props.activePage - 1 : 0)}>
        <Icon
          name="left"
          className={classNames(styles.arrowButton, styles.buttonLeft, { [styles.hide]: props.activePage === 0 })}
        />
      </div>
      <div
        onClick={() =>
          props.onPageChange(props.activePage + 2 > props.pageCount ? props.activePage : props.activePage + 1)
        }
      >
        <Icon
          name="right"
          className={classNames(styles.arrowButton, styles.buttonRight, {
            [styles.hide]: props.activePage + 1 === props.pageCount,
          })}
        />
      </div>
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
