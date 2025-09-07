import React from 'react';
import styles from '../styles/ExploreModal.module.css';
import type { StarProps } from '../types/StarProperties';

interface ExploreModalProps {
  isActive: boolean;
  stars: StarProps[];
  hoveredStarId: string | number | null; // Para saber qué estrella resaltar
  onStarHover: (star: StarProps | null) => void;
  onStarClick: (star: StarProps) => void;
}

const ExploreModal: React.FC<ExploreModalProps> = ({
  isActive,
  stars,
  hoveredStarId,
  onStarHover,
  onStarClick,
}) => {
  if (!isActive) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <h3 className={styles.title}>Catálogo Estelar</h3>
      <ul className={styles.starList}>
        {stars.map((star) => (
          <li
            key={star.id}
            className={`${styles.starItem} ${hoveredStarId === star.id ? styles.active : ''}`}
            onMouseEnter={() => onStarHover(star)}
            onMouseLeave={() => onStarHover(null)}
            onClick={() => onStarClick(star)}
          >
            <span className={styles.starName}>{star.starName}</span>
            <span className={styles.starDate}>
              {star.discoveryDate.toLocaleDateString('es-MX')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExploreModal;
