import { useState, useEffect, useMemo } from 'react';
import { Stage, Layer } from 'react-konva';
import type { StarProps } from './types/StarProperties';
import StarsDrawer from './components/StarsDrawer';
import PrevisualizationModal from './components/PrevisualizationModal';
import DedicationModal from './components/DedicationModal';
import ConstelationDrawer from './components/ConstelationDrawer';
import { staticStars } from './data/constellation';
import { generateConstellation } from './utils/graphGenerator';
import Header from './components/Header';
import ExploreButton from './components/ExploreButton';
type WindowSize = {
    width: number;
    height: number;
};

const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};

function App() {
    const windowSize = useWindowSize();

    const runtimeStars = useMemo(() => {
        return staticStars.map((star) => ({
            ...star,
            x: star.x * windowSize.width,
            y: star.y * windowSize.height,
        }));
    }, [windowSize]);

    const constelationCoors = useMemo(
        () => generateConstellation(runtimeStars),
        [runtimeStars]
    );

    const [hoveredStar, setHoveredStar] = useState<StarProps | null>(null);
    const [clickedStar, setClickedStar] = useState<StarProps | null>(null);

    const handleStarClick = (star: StarProps | null) => {
        setClickedStar(star);
    };

    const handleCloseModal = () => {
        setClickedStar(null);
    };
    const handleStarHover = (star: StarProps | null) => {
        setHoveredStar(star);
    };

    return (
        <>
            <Header />
            <ExploreButton />

            <Stage width={windowSize.width} height={windowSize.height}>
                <Layer>
                    <ConstelationDrawer StarCordinates={constelationCoors} />
                    <StarsDrawer
                        stars={runtimeStars}
                        onStarHover={handleStarHover}
                        onStarClick={handleStarClick}
                    />
                </Layer>
            </Stage>
            <PrevisualizationModal
                isActive={!!hoveredStar}
                x={hoveredStar?.x ?? 0}
                y={hoveredStar?.y ?? 0}
                starName={hoveredStar?.starName ?? ''}
                starTitle={hoveredStar?.starTitle ?? ''}
                discoveryDate={hoveredStar?.discoveryDate ?? new Date()}
            />
            <DedicationModal
                isActive={!!clickedStar}
                star={clickedStar!}
                onClose={handleCloseModal}
            />
        </>
    );
}

export default App;
