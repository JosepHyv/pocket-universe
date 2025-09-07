import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
    const handleClick = () => {
        alert(
            'Recorre conmigo el universo hasta llegar al final de los tiempos, Te Amo mi bella Atziri'
        );
    };

    return (
        <button className={styles.headerContainer} onClick={handleClick}>
            <h1 className={styles.initials}>A + J</h1>
            <p className={styles.title}>Nuestro universo</p>
        </button>
    );
};

export default Header;
