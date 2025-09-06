import type { StarProps } from '../types/StarProperties';
import type { Coordinates } from '../components/ConstelationDrawer';

export function generateConstellation(stars: StarProps[]): Coordinates[] {
    if (stars.length < 2) {
        return [];
    }

    const centroid = stars.reduce(
        (acc, star) => ({ x: acc.x + star.x, y: acc.y + star.y }),
        { x: 0, y: 0 }
    );
    centroid.x /= stars.length;
    centroid.y /= stars.length;

    const sortedStars = stars
        .map((star) => ({
            ...star,
            angle: Math.atan2(star.y - centroid.y, star.x - centroid.x),
        }))
        .sort((a, b) => a.angle - b.angle);
    // const sortedStars = stars.sort((a, b) =>
    //     a.x != b.x ? a.x - b.x : a.y - b.y
    // );
    const connections: Coordinates[] = [];
    for (let i = 0; i < sortedStars.length - 1; i++) {
        const star1 = sortedStars[i];
        const star2 = sortedStars[i + 1];
        connections.push({
            x1: star1.x,
            y1: star1.y,
            x2: star2.x,
            y2: star2.y,
        });
    }

    // const firstStar = sortedStars[0];
    // const lastStar = sortedStars[sortedStars.length - 1];
    // connections.push({
    //     x1: lastStar.x,
    //     y1: lastStar.y,
    //     x2: firstStar.x,
    //     y2: firstStar.y,
    // });

    return connections;
}
