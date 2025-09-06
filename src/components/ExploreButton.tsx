import React from 'react';
import styles from '../styles/ExploreButton.module.css';

interface ExploreButtonProps {
    onClick?: () => void;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.exploreButton} onClick={onClick}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.icon}
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Explorar</span>
        </button>
    );
};

export default ExploreButton;
