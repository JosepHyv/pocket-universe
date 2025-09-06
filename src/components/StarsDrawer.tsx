import { Circle } from 'react-konva';
import type { StarProps } from '../types/StarProperties';
import MemoryStar from './MemoryStar';
export interface StarsDrawerProps {
    stars: StarProps[];
    onStarHover: (star: StarProps | null) => void;
    onStarClick: (star: StarProps | null) => void;
}
const StarsDrawer: React.FC<StarsDrawerProps> = ({
    stars,
    onStarClick,
    onStarHover,
}) => {
    return (
        <>
            {stars.map((star: StarProps, index) => {
                return (
                    <MemoryStar
                        {...star}
                        onStarClick={(star: StarProps | null) => {
                            onStarClick(star);
                            console.log(`Click Star: ${JSON.stringify(star)}`);
                        }}
                        onStarHover={(star: StarProps | null) => {
                            onStarHover(star);
                            console.log(`Hover Star: ${JSON.stringify(star, null, 4)}`);
                        }}
                    />
                );
            })}
        </>
    );
};

export default StarsDrawer;
