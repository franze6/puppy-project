import React from 'react';
import PropTypes from 'prop-types';

import PageButton from './PageButton';

const Pagination = props => {
  const pageArr = Array.from(Array(props.pageCount + 1).keys()).slice(1);
  return (
    <div>
      {pageArr.map(e => {
        return (
          <PageButton
            text={e.toString()}
            active={e === props.activPage}
            key={e}
            onClick={() => props.onPageChange(e)}
          />
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
  activPage: PropTypes.number,
};

Pagination.defaultProps = {
  pageCount: 10,
  pageLimit: 5,
  onPageChange: () => {},
  disabled: false,
  activPage: 3,
};

export default Pagination;
