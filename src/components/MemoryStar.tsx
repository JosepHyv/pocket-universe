import React, { useState, useRef, useEffect } from 'react';
import { Circle } from 'react-konva'; // Puedes usar Circle o Star
import type { StarProps } from '../types/StarProperties';
import { Tween } from 'konva/lib/Tween'; // Para animaciones más avanzadas
import Konva from 'konva';

interface MemoryStarProps extends StarProps {
    onStarClick: (star: StarProps) => void; // Función que se llamará al hacer click
    onStarHover: (star: StarProps | null) => void; // Función para manejar el hover
}

const MemoryStar: React.FC<MemoryStarProps> = ({
    id,
    x,
    y,
    discoveryDate,
    starName,
    onStarClick,
    onStarHover,
}) => {
    const starRef = useRef<Konva.Circle>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [radius, setRadius] = useState(15);
    const [fillColor, setFillColor] = useState('#fff');
    const [rotation, setRotation] = useState(0);

    // Efecto para animar el brillo/titileo de la estrella
    useEffect(() => {
        if (!starRef.current) return;

        const flickerTween = new Tween({
            node: starRef.current,
            yoyo: true,
            duration: Math.random() * 5 + 1,
            radius: radius, // * (Math.random() * 1.5 + 0.5),
            shadowBlur: radius * (Math.random() * 5 + 20),
            // easing: Konva.Easings.EaseInOut,
            onFinish: () => {
                flickerTween.reset();
                flickerTween.play();
            },
        });

        const rotationTween = new Tween({
            node: starRef.current,
            duration: Math.random() * 20 + 10, // Rotación lenta y aleatoria
            rotation: 360,
            onFinish: () => {
                rotationTween.reset();
                rotationTween.play();
            },
        });

        flickerTween.play();
        rotationTween.play();

        return () => {
            flickerTween.destroy();
            rotationTween.destroy();
        };
    }, [radius]);

    const handleMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // Cambiar cursor
        const stage = e.target.getStage();
        if (stage) stage.container().style.cursor = 'pointer';

        // Animación al hover (ej. escalar un poco más grande y brillante)
        starRef.current?.to({
            scaleX: 1.8,
            scaleY: 1.8,
            shadowBlur: 20,
            fill: '#FFD700', // Color dorado al hacer hover
            duration: 0.3,
        });
        setIsHovered(true);
        onStarHover({ id, x, y, discoveryDate, starName }); // Notificar al padre que esta estrella está en hover
    };

    const handleMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // Restaurar cursor
        const stage = e.target.getStage();
        if (stage) stage.container().style.cursor = 'default';

        // Restaurar el tamaño original y brillo
        starRef.current?.to({
            scaleX: 1,
            scaleY: 1,
            shadowBlur: 10, // Sombra base
            fill: fillColor, // Volver al color original
            duration: 0.3,
        });
        setIsHovered(false);
        onStarHover(null); // Notificar al padre que ninguna estrella está en hover
    };

    const handleClick = () => {
        onStarClick({ id, x, y, discoveryDate, starName }); // Llamar a la función del padre
    };

    return (
        <Circle // Usamos Star en lugar de Circle para tener "puntas" y poder girar
            ref={starRef as React.RefObject<Konva.Circle>} // Casteo para la ref
            x={x}
            y={y}
            numPoints={5} // 5 puntas para una estrella clásica
            innerRadius={radius * 0.5} // Radio interior
            outerRadius={radius} // Radio exterior
            fill={fillColor}
            shadowColor={isHovered ? '#FFD700' : '#fff'} // Sombra más intensa al hover
            shadowBlur={isHovered ? 80 : 50}
            shadowOpacity={1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            rotation={rotation} // Aplicar la rotación
            opacity={isHovered ? 1 : 0.8} // Un poco más opaca cuando no está en hover
        />
    );
};

export default MemoryStar;
