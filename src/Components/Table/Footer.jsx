import React from 'react';

import Pagination from '../Pagination/Pagination';

import style from './Footer.scss';

// eslint-disable-next-line react/prop-types
const Footer = ({ pageCount, activePage, onPageChange, activePageCount, recordCount }) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__txt}>
        {activePageCount} из {recordCount}
      </div>
      <Pagination pageCount={pageCount} activePage={activePage} onPageChange={onPageChange} />
    </div>
  );
};

export default Footer;
