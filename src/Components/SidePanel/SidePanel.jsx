import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// import { Checkbox, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';

import cn from 'classnames';

import Icon from '../Kit/Icon/Icon';

import styles from './SidePanel.scss';

// eslint-disable-next-line react/prop-types
const SidePanel = ({ show, onClick }) => {
  const [active, setActive] = useState('menu');
  return (
    <div className={cn(styles.menu_wrap, { [styles.open]: show })}>
      <div className={styles.logo_item} onClick={onClick}>
        <Icon name="logo" />
      </div>
      <nav>
        <ul className={styles.menu}>
          <div className={active === 'menu' ? styles.menuActive : styles.menu_list} onClick={() => setActive('menu')}>
            <li className={styles.menu_item}>
              <Link to="/main">
                <Icon name="home" className={styles.icon} />
                <a className={styles.text_menu}>{!show ? '' : 'ГЛАВНАЯ'}</a>
              </Link>
            </li>
          </div>
          <div
            className={active === 'persons' ? styles.menuActive : styles.menu_list}
            onClick={() => setActive('persons')}
          >
            <li className={styles.menu_item}>
              <Link to="/persons">
                <Icon name="persons" className={styles.icon} />
                <a className={styles.text_menu}>{!show ? '' : 'СОТРУДНИКИ'}</a>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
