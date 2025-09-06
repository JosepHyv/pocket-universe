import type { StarProps } from '../types/StarProperties';
import MemoryStar from './MemoryStar';

// Definimos explícitamente las props que el componente va a recibir.
interface StarsDrawerProps {
    stars: StarProps[];
    onStarClick: (star: StarProps) => void;
    onStarHover: (star: StarProps | null) => void;
}

const StarsDrawer: React.FC<StarsDrawerProps> = ({ stars, onStarClick, onStarHover }) => {
    return (
        <>
            {stars.map((star) => (
                <MemoryStar
                    // Usamos el id o el nombre como key para un renderizado eficiente
                    key={star.id ?? star.starName}
                    {...star}
                    // Pasamos las funciones recibidas en las props a cada estrella
                    onStarClick={onStarClick}
                    onStarHover={onStarHover}
                />
            ))}
        </>
    );
};

export default StarsDrawer;
