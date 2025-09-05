import { Circle } from 'react-konva';
import type { StarProps } from '../types/StarProperties';
import MemoryStar from './MemoryStar';
const StarsDrawer: React.FC<{ stars: StarProps[] }> = ({ stars }) => {
    return (
        <>
            {stars.map((star: StarProps, index) => {
                return (
                    <MemoryStar
                        {...star}
                        onStarClick={() =>
                            console.log(`Click Star: ${JSON.stringify(star)}`)
                        }
                        onStarHover={() =>
                            console.log(`Hover Star: ${JSON.stringify(star, null, 4)}`)
                        }
                    />
                );
            })}
        </>
    );
};

export default StarsDrawer;
