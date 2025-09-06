import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import type { StarProps } from './types/StarProperties';
import StarsDrawer from './components/StarsDrawer';
import PrevisualizationModal from './components/PrevisualizationModal';
import DedicationModal from './components/DedicationModal';
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

    const [hoveredStar, setHoveredStar] = useState<StarProps | null>(null);
    const [clickedStar, setClickedStar] = useState<StarProps | null>(null); 

    const handleStarClick = (star: StarProps | null) => {
        setClickedStar(star);
    }

    const handleCloseModal = () => {
        setClickedStar(null);
    }
    const handleStarHover = (star: StarProps | null) => {
        setHoveredStar(star);
    };
    const Stars: StarProps[] = [
        {
            x: windowSize.width / 2,
            y: windowSize.height / 2,
            starName: 'stellar 13',
            discoveryDate: new Date(),
            dedication: "prueba de dedicatoria",
        },
        {
            x: windowSize.width / 3,
            y: windowSize.height / 3,
            starName: 'stellar 14',
            discoveryDate: new Date(),
            dedication: "prueba de dedicatoria",
        },
        {
            x: windowSize.width / 4,
            y: windowSize.height / 4,
            starName: 'stellar 15',
            dedication: "prueba de dedicatoria",
            discoveryDate: new Date(),
        },

        {
            x: windowSize.width / 5,
            y: windowSize.height / 5,
            starName: 'stellar 15',
            discoveryDate: new Date(),
            dedication: "prueba de dedicatoria",
        },

        {
            x: windowSize.width / 6,
            y: windowSize.height / 6,
            starName: 'stellar 16',
            discoveryDate: new Date(),
            dedication: "prueba de dedicatoria",
        },
    ];
    return (
        <>
            <Stage width={windowSize.width} height={windowSize.height}>
                <Layer>
                    <Rect
                        x={20}
                        y={20}
                        width={100}
                        height={100}
                        fill='#00D2FF'
                        shadowBlur={10}
                    />
                    <Text text='Superior Izquierda' x={20} y={130} fill='white' />
                    <Circle
                        x={windowSize.width / 2}
                        y={windowSize.height / 2}
                        width={15}
                        fill='#fff'
                    />
                    <StarsDrawer stars={Stars} onStarHover={handleStarHover} onStarClick={handleStarClick} />

                    <Rect
                        x={windowSize.width - 120}
                        y={windowSize.height - 120} // Alto de la ventana - alto del rectángulo (100) - margen (20)
                        width={100}
                        height={100}
                        fill='#ff416c'
                        shadowBlur={10}
                    />
                    <Text
                        text='Inferior Derecha'
                        x={windowSize.width - 120}
                        y={windowSize.height - 140}
                        fill='white'
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
