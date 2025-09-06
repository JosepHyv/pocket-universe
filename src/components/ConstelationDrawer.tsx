import { memo } from 'react';
import { Line } from 'react-konva';

export type Coordinates = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

type ConstelationProps = {
    StarCordinates: Coordinates[];
};
const ConstelationDrawer: React.FC<ConstelationProps> = ({
    StarCordinates,
}) => {
    return (
        <>
            {StarCordinates.map((starCordinates) => {
                return (
                    <Line
                        strokeWidth={1}
                        shadowColor='#fff'
                        stroke='#fff'
                        points={[
                            starCordinates.x1,
                            starCordinates.y1,
                            starCordinates.x2,
                            starCordinates.y2,
                        ]}
                    />
                );
            })}
        </>
    );
};

export default memo(ConstelationDrawer);
