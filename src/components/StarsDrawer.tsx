import type { StarProps } from '../types/StarProperties';
import MemoryStar from './MemoryStar';

// Definimos explícitamente las props que el componente va a recibir.
interface StarsDrawerProps {
    stars: StarProps[];
    hoveredStarId: string | number | null;
    onStarClick: (star: StarProps | null) => void;
    onStarHover: (star: StarProps | null) => void;
}

const StarsDrawer: React.FC<StarsDrawerProps> = ({
    stars,
    hoveredStarId,
    onStarClick,
    onStarHover,
}) => {
    return (
        <>
            {stars.map((star) => (
                <MemoryStar
                    key={star.id}
                    {...star}
                    isExternallyHovered={hoveredStarId === star.id}
                    onStarClick={onStarClick}
                    onStarHover={onStarHover}
                />
            ))}
        </>
    );
};

export default StarsDrawer;
