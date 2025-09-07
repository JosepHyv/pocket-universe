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
import ExploreModal from './components/ExplorerModal';
import InstructionsModal from './components/InstructionsModal';
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

    const sortedStars = useMemo(() => {
        return [...runtimeStars].sort((a, b) => {
            const dateComparison =
                a.discoveryDate.getTime() - b.discoveryDate.getTime();
            if (dateComparison !== 0) {
                return dateComparison;
            }
            return a.starName.localeCompare(b.starName);
        });
    }, [runtimeStars]);

    const [hoveredStar, setHoveredStar] = useState<StarProps | null>(null);
    const [clickedStar, setClickedStar] = useState<StarProps | null>(null);
    const [showInstructions, setShowInstructions] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisitedUniverse');
        if (!hasVisited) {
            setShowInstructions(true);
        }
    }, []);

    const handleCloseInstructions = () => {
        localStorage.setItem('hasVisitedUniverse', 'true');
        setShowInstructions(false);
    };

    const [isExploreModalActive, setExploreModalActive] =
        useState<boolean>(false);

    const toggleExploreModal = () => {
        setExploreModalActive((prev) => !prev);
    };
    const handleStarClick = (star: StarProps | null) => {
        setClickedStar(star);
    };

    const handleCloseModal = () => {
        setClickedStar(null);
    };
    const handleStarHover = (star: StarProps | null) => {
        setHoveredStar(star);
    };

    const handleModalStarClick = (star: StarProps | null) => {
        handleStarClick(star);
        setExploreModalActive(false);
        setHoveredStar(null);
    };

    return (
        <>
            <InstructionsModal isActive={showInstructions} onClose={handleCloseInstructions} />
            <Header />
            <ExploreButton onClick={toggleExploreModal} />

            <Stage width={windowSize.width} height={windowSize.height}>
                <Layer>
                    <ConstelationDrawer StarCordinates={constelationCoors} />
                    <StarsDrawer
                        hoveredStarId={hoveredStar?.id ?? null}
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
            <ExploreModal
                isActive={isExploreModalActive}
                stars={sortedStars}
                hoveredStarId={hoveredStar?.id ?? null}
                onStarHover={handleStarHover}
                onStarClick={handleModalStarClick}
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
