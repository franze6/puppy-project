import React from 'react';

import Icon from '../Kit/Icon/Icon';

import styles from './SidePanel.scss';

const SidePanel = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <div className={styles.logo_item}>
          <Icon name="logo" className={styles.logo} />
          <p className={styles.text_logo}>LOGO</p>
        </div>
        <div className={styles.menu_list}>
          <Icon name="home" className={styles.icon} />
          <li href="" className={styles.menu_item}>
            ГЛАВНАЯ
          </li>
        </div>
        <div className={styles.menu_list}>
          <Icon name="persons" className={styles.icon} />
          <li href="" className={styles.menu_item}>
            СОТРУДНИКИ
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SidePanel;
