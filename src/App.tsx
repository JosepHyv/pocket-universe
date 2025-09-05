import { useState, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import type { StarProps } from './types/StarProperties';
import StarsDrawer from './components/StarsDrawer';
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

    const Stars: StarProps[] = [
        {
            x: windowSize.width / 2,
            y: windowSize.height / 2,
            starName: 'stellar 13',
            discoveryDate: new Date(),
        },
        {
            x: windowSize.width / 3,
            y: windowSize.height / 3,
            starName: 'stellar 14',
            discoveryDate: new Date(),
        },
        {
            x: windowSize.width / 4,
            y: windowSize.height / 4,
            starName: 'stellar 15',
            discoveryDate: new Date(),
        },

        {
            x: windowSize.width / 5,
            y: windowSize.height / 5,
            starName: 'stellar 15',
            discoveryDate: new Date(),
        },

        {
            x: windowSize.width / 6,
            y: windowSize.height / 6,
            starName: 'stellar 16',
            discoveryDate: new Date(),
        },
    ];
    return (
        <Stage width={windowSize.width} height={windowSize.height}>
            <Layer>
                {/* === Componente en la Esquina Superior Izquierda === */}
                {/* El punto (0, 0) es la esquina superior izquierda. Damos un pequeño margen de 20px. */}
                <Rect
                    x={20}
                    y={20}
                    width={100}
                    height={100}
                    fill='#00D2FF' // Un color de relleno
                    shadowBlur={10} // Una sombra para que resalte
                />
                <Text text='Superior Izquierda' x={20} y={130} fill='white' />
                <Circle
                    x={windowSize.width / 2}
                    y={windowSize.height / 2}
                    width={15}
                    fill='#fff'
                />
                <StarsDrawer stars={Stars} />
                {/* === Componente en la Esquina Inferior Derecha === */}
                {/* Para posicionarlo, restamos el tamaño de la figura al tamaño total de la ventana. */}
                {/* Le restamos también un margen de 20px. */}
                <Rect
                    x={windowSize.width - 120} // Ancho de la ventana - ancho del rectángulo (100) - margen (20)
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
    );
}

export default App;
