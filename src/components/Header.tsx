import React from 'react';
import styles from '../styles/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.initials}>A + J</h1>
      <p className={styles.title}>Nuestro universo</p>
    </div>
  );
};

export default Header;
