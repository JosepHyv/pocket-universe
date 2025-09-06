import {  memo } from 'react';
import styles from '../styles/PrevisualizationModal.module.css';
export type PrevisualizationProps = {
    isActive: boolean | null;
    starName: string;
    starTitle: string;
    discoveryDate: Date;
    x: number;
    y: number;
};

const PrevisualizationModal: React.FC<PrevisualizationProps> = ({
    isActive = false,
    starName,
    starTitle,
    discoveryDate = new Date(),
    x,
    y,
}) => {
    const formattedDate = discoveryDate.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div
            className={`${styles.tooltipContainer} ${isActive ? styles.tooltipActive : ''}`}
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
        >
            <div className={styles.tooltipContent}>
                <p className={styles.date}>{formattedDate}</p>
                <h3>{starName}</h3>
                {starTitle && <p>{starTitle}</p>}
            </div>
        </div>
    );
};

export default memo(PrevisualizationModal);
