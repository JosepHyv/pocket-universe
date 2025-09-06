import React, { useRef, useEffect } from 'react';
import { Circle } from 'react-konva';
import type { StarProps } from '../types/StarProperties';
import Konva from 'konva';

interface MemoryStarProps extends StarProps {
    onStarClick: (star: StarProps | null) => void;
    onStarHover: (star: StarProps | null) => void;
}

const BASE_RADIUS = 12;
const BASE_SHADOW_BLUR = 20;

const MemoryStar: React.FC<MemoryStarProps> = ({
    onStarClick,
    onStarHover,
    ...star
}) => {
    const starRef = useRef<Konva.Circle>(null);
    const pulseTweenRef = useRef<Konva.Tween | null>(null);

    useEffect(() => {
        if (!starRef.current) return;

        pulseTweenRef.current = new Konva.Tween({
            node: starRef.current,
            yoyo: true,
            duration: Math.random() * 0.1 + 1.5,
            easing: Konva.Easings.EaseInOut,

            shadowBlur: BASE_SHADOW_BLUR * (1 + (Math.random() * 0.5 + 0.25)),

            onFinish: () => {
                pulseTweenRef.current?.reset();
                pulseTweenRef.current?.play();
            },
        });

        pulseTweenRef.current.play();

        return () => {
            pulseTweenRef.current?.destroy();
        };
    }, []);

    const handleMouseEnter = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const stage = e.target.getStage();
        if (stage) stage.container().style.cursor = 'pointer';

        pulseTweenRef.current?.pause();

        starRef.current?.to({
            duration: 0.3,
            easing: Konva.Easings.EaseInOut,
            shadowBlur: BASE_SHADOW_BLUR * (1 + (Math.random() * 0.15 + 0.75)),
            scaleX: 1.5, 
            scaleY: 1.5,
            fill: '#FFD700',
        });
        onStarHover(star); //{ id, x, y, discoveryDate, starName });
    };

    const handleMouseLeave = (e: Konva.KonvaEventObject<MouseEvent>) => {
        const stage = e.target.getStage();
        if (stage) stage.container().style.cursor = 'default';

        starRef.current?.to({
            duration: 0.5,
            easing: Konva.Easings.EaseInOut,
            shadowBlur: BASE_SHADOW_BLUR,
            scaleX: 1,
            scaleY: 1,
            fill: '#fff',
        });

        pulseTweenRef.current?.play();
        onStarHover(null);
    };

    const handleClick = () => {
        onStarClick(star); //{ id, x, y, discoveryDate, starName });
    };

    return (
        <Circle
            ref={starRef}
            x={star.x}
            y={star.y}
            radius={BASE_RADIUS}
            fill={'#fff'}
            shadowColor={'#fff'}
            shadowBlur={BASE_SHADOW_BLUR}
            shadowOpacity={100}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        />
    );
};

export default MemoryStar;
