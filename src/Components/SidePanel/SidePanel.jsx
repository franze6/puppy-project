import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// import { Checkbox, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';

// import cn from 'classnames';

import Icon from '../Kit/Icon/Icon';

import styles from './SidePanel.scss';

// eslint-disable-next-line react/prop-types
const SidePanel = ({ show, onClick }) => {
  const [active, setActive] = useState('menu');
  return (
    <div className={styles.menu_wrap}>
      <div className={styles.logo_item} onClick={onClick}>
        <Icon name="logo" />
      </div>
      <nav className={show ? [styles.navMenuActive] : [styles.navMenu]}>
        <ul className={styles.menu}>
          <div className={active === 'menu' ? styles.menuActive : styles.menu_list} onClick={() => setActive('menu')}>
            <li className={styles.menu_item}>
              <Link to="/main">
                <Icon name="home" className={styles.icon} /> {show ? '' : 'ГЛАВНАЯ'}
              </Link>
            </li>
          </div>
          <div className={active === 'sotr' ? styles.menuActive : styles.menu_list} onClick={() => setActive('sotr')}>
            <li className={styles.menu_item}>
              <Link to="/persons">
                <Icon name="persons" className={styles.icon} />
                {show ? '' : 'СОТРУДНИКИ'}
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
