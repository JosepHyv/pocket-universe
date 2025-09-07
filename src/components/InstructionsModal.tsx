import React from 'react';
import styles from '../styles/DedicationModal.module.css';

interface InstructionsModalProps {
    isActive: boolean;
    onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
    isActive,
    onClose,
}) => {
    if (!isActive) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>¿Cómo explorar?</h2>

                <div className={styles.dedicationText}>
                    <p>
                        Puedes explorar libremente las constelaciones con el ratón,
                        previsualizando al posicionarlo sobre cada estrella y dando clic
                        para visitar esa estrella.
                    </p>
                    <br />
                    <p>
                        También puedes explorar en orden de descubrimiento dando clic sobre
                        el botón "Explorar" en la esquina inferior derecha para ver el
                        catálogo estelar.
                    </p>
                </div>

                <button onClick={onClose} className={styles.closeButton}>
                    Entendido
                </button>
            </div>
        </div>
    );
};

export default InstructionsModal;
