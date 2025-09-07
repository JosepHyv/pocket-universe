import type { StarProps } from '../types/StarProperties';
import CamilaRetrato from '../assets/camila-retrato.jpeg';
const getRandomClusteredCoordinate = (): { x: number; y: number } => {
    const margin = 0.18;

    const availableRange = 1 - margin * 2;

    const x = Math.random() * availableRange + margin;
    const y = Math.random() * availableRange + margin;

    return { x, y };
};

export const staticStars: StarProps[] = [
    {
        id: 1,
        x: 0.5,
        y: 0.5,
        starName: 'Corazón de la Galaxia',
        discoveryDate: new Date('2025-08-08T00:00:00'),
        dedication:
            'Este dia inicio una hermosa historia, recuerdo bien que este dia desperte con las piernas temblorosas, preocupado por lo que este dia significaria de ese momento en adelante, me levante temprano, a pesar de haberme desvelado, prepare las cosas para ir a nuestro dia de picnic, habia preparado una linda dinamica y habia repasado como te propondria iniciarla, hice monton de escenarios en mi mente para que todo fuera lo mas especial para ti, cuando llegaste a casa, senti que mi corazon explotaba, tembloroso porque aun no terminaba la comida, llegamos al picnic, disfrutamos, y comenzamos la dinamica, en ella me humillaste dibujando, pero logre decirte todo lo que sentia, fue un dia inolvidable tus lagrimas de alegria y besos con fantasticas obras de arte',
        starTitle: 'El dia que todo comenzó',
        imageUrl: CamilaRetrato,
    },
    // {
    //     id: 2,
    //     x: 0.333,
    //     y: 0.333,
    //     starName: 'Lyra Nocturna',
    //     discoveryDate: new Date('2024-05-15T22:30:00'),
    //     dedication: 'Por las conversaciones bajo la luna y la música que nos une.',
    //     starTitle: 'Nuestra Melodía',
    // },
    // {
    //     id: 3,
    //     x: 0.25,
    //     y: 0.25,
    //     starName: 'Orion Minor',
    //     discoveryDate: new Date('2024-05-21T18:00:00'),
    //     dedication: 'Como los grandes cazadores, encontramos lo que más queríamos.',
    //     starTitle: 'El Encuentro',
    // },
    // {
    //     id: 4,
    //     x: 0.2,
    //     y: 0.2,
    //     starName: 'Vela Azure',
    //     discoveryDate: new Date('2024-05-28T13:00:00'),
    //     dedication: 'Navegando juntos hacia cualquier destino.',
    //     starTitle: 'Nuestro Viaje',
    // },
    // {
    //     id: 5,
    //     x: 0.166,
    //     y: 0.166,
    //     starName: 'Gemma Prime',
    //     discoveryDate: new Date('2024-06-05T19:45:00'),
    //     dedication: 'La joya más brillante en mi cielo personal.',
    //     starTitle: 'Tu Esencia',
    // },
    {
        id: 2,
        ...getRandomClusteredCoordinate(),
        starName: 'Lyra Nocturna',
        discoveryDate: new Date('2024-05-15T22:30:00'),
        dedication: 'Por las conversaciones bajo la luna y la música que nos une.',
        starTitle: 'Nuestra Melodía',
    },
    {
        id: 3,
        ...getRandomClusteredCoordinate(),
        starName: 'Orion Minor',
        discoveryDate: new Date('2024-05-21T18:00:00'),
        dedication: 'Como los grandes cazadores, encontramos lo que más queríamos.',
        starTitle: 'El Encuentro',
    },
    {
        id: 4,
        ...getRandomClusteredCoordinate(),
        starName: 'Vela Azure',
        discoveryDate: new Date('2024-05-28T13:00:00'),
        dedication: 'Navegando juntos hacia cualquier destino.',
        starTitle: 'Nuestro Viaje',
    },
    {
        id: 5,
        ...getRandomClusteredCoordinate(),
        starName: 'Gemma Prime',
        discoveryDate: new Date('2024-06-05T19:45:00'),
        dedication: 'La joya más brillante en mi cielo personal.',
        starTitle: 'Tu Esencia',
    },

    {
        id: 6,
        ...getRandomClusteredCoordinate(),
        starName: 'Alariel Umbra',
        discoveryDate: new Date(),
        dedication: 'Incluso en la sombra, tu luz encuentra el camino.',
        starTitle: 'Guía en la Oscuridad',
    },
    {
        id: 7,
        ...getRandomClusteredCoordinate(),
        starName: 'Cygnus Lux',
        discoveryDate: new Date(),
        dedication: 'Un faro de esperanza y belleza en la inmensidad.',
        starTitle: 'Faro de Luz',
    },
    {
        id: 8,
        ...getRandomClusteredCoordinate(),
        starName: 'Draco Caelum',
        discoveryDate: new Date(),
        dedication:
            'Por las historias que imaginamos y los futuros que construiremos.',
        starTitle: 'El Lienzo del Cielo',
    },
    {
        id: 9,
        ...getRandomClusteredCoordinate(),
        starName: 'Serpens Eridani',
        discoveryDate: new Date(),
        dedication: 'Nuestro camino a veces serpentea, pero siempre avanza.',
        starTitle: 'Nuestro Sendero',
    },
    {
        id: 10,
        ...getRandomClusteredCoordinate(),
        starName: 'Aquila Major',
        discoveryDate: new Date(),
        dedication: 'Volando alto, por encima de cualquier duda.',
        starTitle: 'Vuelo Propio',
    },
    {
        id: 11,
        ...getRandomClusteredCoordinate(),
        starName: 'Noctua Silente',
        discoveryDate: new Date(),
        dedication: 'Por la sabiduría encontrada en la calma de la noche.',
        starTitle: 'Sabiduría Nocturna',
    },
    {
        id: 12,
        ...getRandomClusteredCoordinate(),
        starName: 'Andromeda Prime',
        discoveryDate: new Date(),
        dedication: 'Una galaxia entera contenida en una mirada.',
        starTitle: 'Tu Mirada',
    },
    {
        id: 13,
        ...getRandomClusteredCoordinate(),
        starName: 'Corvus Minor',
        discoveryDate: new Date(),
        dedication: 'Por los secretos compartidos y la complicidad que nos define.',
        starTitle: 'Complicidad',
    },
    {
        id: 14,
        ...getRandomClusteredCoordinate(),
        starName: "Aethelgard's Wish",
        discoveryDate: new Date(),
        dedication: 'Un deseo susurrado a la estrella más noble.',
        starTitle: 'El Deseo',
    },
    {
        id: 15,
        ...getRandomClusteredCoordinate(),
        starName: 'Solara Ignis',
        discoveryDate: new Date(),
        dedication: 'El fuego que nos mantiene cálidos en los días fríos.',
        starTitle: 'Nuestro Fuego',
    },
    {
        id: 16,
        ...getRandomClusteredCoordinate(),
        starName: 'Fioritura Celeste',
        discoveryDate: new Date(),
        dedication: 'Como una flor que se abre en el jardín del cosmos.',
        starTitle: 'Florecer',
    },
    {
        id: 17,
        ...getRandomClusteredCoordinate(),
        starName: 'Kairos Alpha',
        discoveryDate: new Date(),
        dedication:
            'Por el momento perfecto, el instante justo en que todo cambió.',
        starTitle: 'El Momento Exacto',
    },
    {
        id: 18,
        ...getRandomClusteredCoordinate(),
        starName: 'Amethysta IX',
        discoveryDate: new Date(),
        dedication:
            'Un tesoro raro y precioso, de un color que no se encuentra en ningún otro lugar.',
        starTitle: 'Tesoro Único',
    },
    {
        id: 19,
        ...getRandomClusteredCoordinate(),
        starName: 'Elysian Echo',
        discoveryDate: new Date(),
        dedication: 'El eco de una risa que resuena en la eternidad.',
        starTitle: 'Tu Risa',
    },
    {
        id: 20,
        ...getRandomClusteredCoordinate(),
        starName: 'Argentum Tide',
        discoveryDate: new Date(),
        dedication: 'Como la marea plateada de la luna, tu influencia me mueve.',
        starTitle: 'Tu Influencia',
    },
];
