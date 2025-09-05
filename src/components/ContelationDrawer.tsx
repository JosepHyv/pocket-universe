import { Line } from 'react-konva';
import { StarProps } from '../types/StarProperties';

type ConstelationProps = {
    StarCordinates: StarProps[];
};
const ConstelationDrawer: React.FC<ConstelationProps> = ({
    StarCordinates,
}) => {
    return (
        <>
            {StarCordinates.map((star) => {
                return <Line />;
            })}
        </>
    );
};
