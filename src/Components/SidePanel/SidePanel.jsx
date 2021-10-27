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
          <Link to="/main">
            <div className={active === 'menu' ? styles.menuActive : styles.menu_list} onClick={() => setActive('menu')}>
              <div className={styles.menu_item}>
                <Icon name="home" className={styles.icon} />
                <p className={cn(styles.text_menu, { [styles.text_menu_open]: show })}>{'ГЛАВНАЯ'}</p>
              </div>
            </div>
          </Link>
          <Link to="/persons">
            <div
              className={active === 'persons' ? styles.menuActive : styles.menu_list}
              onClick={() => setActive('persons')}
            >
              <li className={styles.menu_item}>
                <Icon name="persons" className={styles.icon} />
                <p className={cn(styles.text_menu, { [styles.text_menu_open]: show })}>{'СОТРУДНИКИ'}</p>
              </li>
            </div>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;
