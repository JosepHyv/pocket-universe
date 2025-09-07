import { memo } from 'react';
import styles from '../styles/DedicationModal.module.css';
import type { StarProps } from '../types/StarProperties';

interface DedicationModalProps {
    isActive: boolean;
    star: StarProps;
    onClose: () => void;
}

const DedicationModal: React.FC<DedicationModalProps> = ({
    isActive,
    star,
    onClose,
}) => {
    if (!isActive) {
        return null;
    }

    const formattedDate = star.discoveryDate.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <p className={styles.date}>{formattedDate}</p>
                <h2>{star.starName}</h2>

                <div className={styles.dedicationText}>
                    <p>{star.dedication}</p>
                </div>

                {star.imageUrl && (
                    <img
                        src={star.imageUrl}
                        alt={`Imagen para ${star.starName}`}
                        className={styles.modalImage}
                        loading='lazy'
                    />
                )}

                <button onClick={onClose} className={styles.closeButton}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default memo(DedicationModal);
