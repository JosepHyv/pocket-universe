import type { StarProps } from '../types/StarProperties';
import CamilaRetrato from '../assets/media/camila-retrato.jpeg';
import Julio19 from '../assets/media/julio_19.jpeg';
import Julio25 from '../assets/media/julio_25.jpeg';
import Julio29 from '../assets/media/julio_29.jpeg';
import Agosto01 from '../assets/media/agosto_1.jpeg';
import Agosto02 from '../assets/media/agosto_2.jpeg';
import Agosto06 from '../assets/media/agosto_6.jpeg';
import Agosto09 from '../assets/media/agosto_9.jpeg';
import Agosto09Tarde from '../assets/media/agosto_9_tarde.jpeg';
import Agosto15 from '../assets/media/agosto_15.jpeg';
import Agosto16 from '../assets/media/agosto_16.jpeg';
import Agosto17Noche from '../assets/media/agosto_17_noche.jpeg';
import Agosto20 from '../assets/media/agosto_20.jpeg';
import Agosto22 from '../assets/media/agosto_22.jpeg';
import Agosto22Camion from '../assets/media/agosto_22_camion.jpeg';
import Agosto22Museo from '../assets/media/agosto_22_museo.jpeg';
import Agosto22Zoo from '../assets/media/agosto_22_zoo.jpeg';
import Agosto23 from '../assets/media/agosto_23.jpeg';
import Agosto30 from '../assets/media/agosto_30.jpeg';
import Agosto31 from '../assets/media/agosto_31.jpeg';
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
    {
        id: 2,
        ...getRandomClusteredCoordinate(),
        starName: 'Lyra Nocturna',
        discoveryDate: new Date('2025-07-25T00:00:00'),
        dedication:
            'Tuve un viaje con mi mamá a una linda ciudad, ciudad que aunque no hemos visitado al mismo tiempo, no podia dejar de recordarme a ti, en todo momento mi cabeza solo pensaba en ti, y aun con la distancia, seguia aprendiendo mas de ti, ese dia me dijiste sobre el como demostraba mi cariño hacia ti, y coincidimos en que iriamos paso a paso, aun asi, no pude evitar expresarte mi cariño mandandote un pequeño presente, ya que no podria entregartelo en persona, una rosa por cada hora del dia que pensaba en ti.',
        starTitle: 'Corazones que vencen distancias',
        imageUrl: Julio25,
    },
    {
        id: 3,
        ...getRandomClusteredCoordinate(),
        starName: 'Orion Minor',
        discoveryDate: new Date('2025-07-19T00:00:00'),
        dedication:
            'Recuerdo muy bien lo que senti este dia, queria que la primer comida que probaras hecha por mis manos fuera deliciosa, recuerdo contarle a mis amigas que no sabia que cocinar, y pase horas pensando que podia prepararte, cuando llegaste me senti tan en paz y feliz de que estuvieras aqui conmigo, desayunamos rico, platicamos y nos seguimos conociendo, disfrutamos de una pelicula y series hasta dar la hora de ir a ver la exposicion de arte hecha con gatitos, fue la primera vez que tomaste mi mano, ya que yo no daba el primer paso, me senti tan feliz cuando te dije ese dia lo que sentia por ti.',
        starTitle: 'Historia con gatitos y primera foto',
        imageUrl: Julio19,
    },
    {
        id: 4,
        ...getRandomClusteredCoordinate(),
        starName: 'Vela Azure',
        discoveryDate: new Date('2025-07-29T00:00:00'),
        dedication:
            'Llegue a casa de tu mamá para conocerla al igual que a tus hermanitos, fue la primera vez que conoceria a esos dulces niños, ese dia iriamos a ver los 4 fantasticos, llegamos como pareja al cine aunque aun no lo heramos, me senti muy feliz, el hecho de pasar ese momento contigo de tu mano, me hacia desear cada vez mas que fueras mi novia, cuidamos niños pero nos llegamos a divertir como nunca, aunque no llegamos a tomarnos mas fotos, quedo retratado nuestro cariño y diversion en el playtime, terminado con una cena rapida mientras platicabamos de resolver problemas matematicos, me senti integrado con tu familia desde ese momento.',
        starTitle: 'La presentacion',
        imageUrl: Julio29,
    },
    {
        id: 5,
        ...getRandomClusteredCoordinate(),
        starName: 'Gemma Prime',
        discoveryDate: new Date('2025-08-01T19:45:00'),
        dedication:
            'Atesoro este dia en mi corazon, queria verte feliz y sorprenderte con un delicioso almuerzo en un lugar magico, una comida junto al rio que demostrara lo que ya sentia por ti, queria aclarar una duda que estaba en mi mente porque sentia todo tan lindo para ser real, aunque avanzabamos rapido, no me sentia incomodo ni me sentia mal por ello, me sentia enormemente feliz y se me notaba a kilometros, este dia conoci a tus abuelitos y me recibieron amablemente para conocerme, creo que maneje muy bien la situacion, jamas olvidare lo bella que te veias ese dia.',
        starTitle: 'Rio de corazones',
        imageUrl: Agosto01,
    },

    {
        id: 6,
        ...getRandomClusteredCoordinate(),
        starName: 'Alariel Umbra',
        discoveryDate: new Date('2025-08-02T00:00:00'),
        dedication:
            'Jamas terminare de agradecer haberte encontrado, haber sido aceptado en tu linda familia, el verte sonreir siempre, este dia creando postres juntos con tus hermanitos, fue el primer dia que me acerque mas a leo y ainara, como si nos conocieramos de mas tiempo, ese dia jugamos trompo, reimos y aunque no logramos probar el postre y al final del dia llegamos a sentirnos abrumados por algunas palabras, nuestra confianza crecio al saber que nos apoyabamos mutuamente, demostrando nuestro cariño sin preocupaciones.',
        starTitle: 'Postres y risas',
        imageUrl: Agosto02,
    },
    {
        id: 7,
        ...getRandomClusteredCoordinate(),
        starName: 'Cygnus Lux',
        discoveryDate: new Date('2025-08-06T00:00:00'),
        dedication:
            'Llegamos con la intencion de probar nuevos sabores, descrubiendo nuevos lugares para sonreir, aunque nuestro plan no contemplo un dia inhabil, me diste la oportunidad de llevarte a uno de los lugares que descubri en mis aventuras caminado por la ciudad, me senti tan feliz de saber lo que sentias por mi, que hayas disfrutado ese dia, aclaro todo lo que faltaba por aclarar en mi mente, y comence a planear como daria el siguiente paso para hacerte feliz cada dia desde ese dia.',
        starTitle: 'Descrubiendo sabores',
        imageUrl: Agosto06,
    },
    {
        id: 8,
        ...getRandomClusteredCoordinate(),
        starName: 'Draco Caelum',
        discoveryDate: new Date('2025-08-09T00:00:00'),
        dedication:
            'Por las historias que imaginamos y los futuros que construiremos, siendo la primer salida como novios, conoci a tus amigas de toda la vida, y ellas me aceptaron en su pequeña familia, un dia divertido en donde descubrimos que no sabia flotar, ese dia, nos adorno un hermoso cielo despejado, el cual en ocaciones volteaba a ver, siempre con la esperanza de que ese no fuera otro de mis sueños, un cielo nuevo en un nuevo comienzo para ambos, cielo en el cual pintariamos nuestra historia, comenzando por una celebracion sobre el agua, gracias por ese dia.',
        starTitle: 'El Lienzo del Cielo',
        imageUrl: Agosto09,
    },
    {
        id: 8.5,
        ...getRandomClusteredCoordinate(),
        starName: 'Draco Caelum Tardis',
        discoveryDate: new Date('2025-08-09T00:00:00'),
        dedication:
            'Ese mismo dia, fuimos corriendo a buscar un regalo para el cumpleaños de leo, la pasamos muy bonito jugando, riendo conviviendo, me senti tan feliz ese dia celebrando, ganandome mas y mas a tus hermanitos, abuelitos, y toda tu familia, sintiendome en casa, atesorando cada segundo deseando no terminara, terminaste cansadita por nadar durante la mañana, solo queria abrazarte y que durmieras sobre mis hombros, terminando el hermoso dia, con un presente el cual te hizo recordar momentos de tu infancia.',
        starTitle: 'El Lienzo de una familia',
        imageUrl: Agosto09Tarde,
    },
    {
        id: 9,
        ...getRandomClusteredCoordinate(),
        starName: 'Serpens Eridani',
        discoveryDate: new Date('2025-08-15T00:00:00'),
        dedication:
            'Un dia como pudiera ser cualquier otro dia, no podriamos vernos ya que ambos estariamos ocupados, aun asi, me propusiste que trabajaramos en una llamada, con musica, tal vez para algunas personas este gesto no signifique mucho, pero para mi, fue algo hermoso, ese dia abrumado por pendientes, me senti acompañado, senti que todo saldria bien, disfrute tu musica, codifique al ritmo de ella mientras detras veia lo talentosa que eres, la pasion que te representa al hacer lo que amas.',
        starTitle: 'Nuestro Camino Musical',
        imageUrl: Agosto15,
    },
    {
        id: 10,
        ...getRandomClusteredCoordinate(),
        starName: 'Aquila Major',
        discoveryDate: new Date('2025-08-16T00:00:00'),
        dedication:
            'Pasamos la tarde demostrando nuestro amor, preparandonos para una noche de ciencia con tus hermanitos, ese dia observariamos astros en el cielo, desde estrellas distantes a miles de años luz de distancia, hasta planetas a pocos minutos luz y nuestro satelite tan cerca como poco mas de 1 segundo luz, no sin antes tener una linda cena en donde comenzariamos a tomarnos nuestras primeras fotos con intencion de recordarlas por siempre.',
        starTitle: 'Noche Estrellada',
        imageUrl: Agosto16,
    },
    {
        id: 11,
        ...getRandomClusteredCoordinate(),
        starName: 'Noctua Silente',
        discoveryDate: new Date('2025-08-17T00:00:00'),
        dedication:
            'Por la sabiduría encontrada en la calma de la noche, al estar junto a ti hasta el amanecer disfrutando de lo que el universo pone a disposicion de nuestros ojos, fue la primera vez que desperte a tu lado, la primera vez que apreciamos juntos el cielo nocturno junto a tus hermanitos y mamá, es un dia que jamas voy a olvidar',
        starTitle: 'Sabiduría Nocturna',
        imageUrl: Agosto17Noche,
    },
    {
        id: 12,
        ...getRandomClusteredCoordinate(),
        starName: 'Andromeda Prime',
        discoveryDate: new Date('2025-08-20T00:00:00'),
        dedication:
            'Recorriendo el universo tomado de tu mano, nuestro primer viaje al zoologico caminando por horas y siendo atacados por mosquitos gigantes, no podia dejar de atesorar tu mirada, cada paso que dabamos lo haciamos de la mano, aprendimos tantas cosas ese dia, descubriendo especies que estaban en libertas, preparandonos para nuestro primer viaje juntos, ese ultimo camino que tomamos antes de irnos a almorzar fue tomando tu mano, quiero tomarla por cada dia a tu lado.',
        starTitle: 'Caminado de tu mano',
        imageUrl: Agosto20,
    },
    {
        id: 13,
        ...getRandomClusteredCoordinate(),
        starName: 'Corvus Minor',
        discoveryDate: new Date('2025-08-22T00:00:00'),
        dedication:
            'Nuestro primer viaje juntos, posible gracias a la confianza que tus abuelos depositaron en mi, recorriendo otros caminos juntos, pasando por altos y bajos difrutando de nuestro cariño y compañia, haciendo chistes, riendo, aprendiendo, y disfrutando de nuestra compañia, sacandonos fotos tan lindas y memorables por siempre, gracias por los secretos, los chistes, las risas compartidas y la complicidad que nos define.',
        starTitle: 'Complicidad en otros caminos',
        imageUrl: Agosto22,
    },
    {
        id: 14,
        ...getRandomClusteredCoordinate(),
        starName: "Aethelgard's Wish",
        discoveryDate: new Date('2025-08-22T15:00:00'),
        dedication:
            'Un deseo susurrado a la estrella más noble, estar a tu lado siempre, incluso cuando el lugar en el que estamos nos haga reflexionar sobre lo que nos rodea, no dejar de sonreir a tu lado, compartiendo cada momento junto a ti hasta el fin de los dias, llegamos a este lugar, que aunque parecia que nos dejaria tristes sonreimos al tenernos juntos y compartir ese sentimiento, juntos todo se siente mejor.',
        starTitle: 'Un lugar de reflexion y amor',
        imageUrl: Agosto22Zoo,
    },
    {
        id: 15,
        ...getRandomClusteredCoordinate(),
        starName: 'Solara Ignis',
        discoveryDate: new Date('2025-08-22T17:00:00'),
        dedication:
            'Despues de un largo recorrido, llegamos a un luegar en el que el resto del mundo no existia, solo nos veiamos tu y yo, disfrutando una exposicion de cera, con chistes de como no se parecian a las personas que representaban, fue con este abrazo que mi dia se volvio unico, sintiendo un fuego que nos mantiene cálidos para aventurarnos a lo desconocido, sin miedo alguno, para mi, fue al siguiente momento en el que fuimos al rey del cebiche, ya que temia que no me gustara por no comer mariscos, fue delicioso almorzar a tu lado viendo tu dulce carita.',
        starTitle: 'Un mundo solo para nosotros',
        imageUrl: Agosto22Museo,
    },
    {
        id: 16,
        ...getRandomClusteredCoordinate(),
        starName: 'Fioritura Celeste',
        discoveryDate: new Date('2025-08-22T23:00:00'),
        dedication:
            'Como una flor que se abre en el jardín del cosmos enfrentandose al caos, regresando con el tiempo medido buscando una forma de que estuvieras comoda en el regreso a casa, mantuvimos la calma tomados de la mano, hasta encontrar una solucion, regresamos sanos y salvos a casa con un nuevo aprendizaje, con nuevos sentimientos de amor, al sentirte como una dulce flor a quien quiero cuidar siempre, porque eres mi flor en el cosmos.',
        starTitle: 'Regreso a nuestra cuna de amor',
        imageUrl: Agosto22Camion,
    },
    {
        id: 17,
        ...getRandomClusteredCoordinate(),
        starName: 'Kairos Alpha',
        discoveryDate: new Date('2025-08-23T00:00:00'),
        dedication:
            'Por el momento perfecto, el instante justo en que supe que eres mas que maravillosa, desde un inicio me enamore de lo increible que eres, lo creativa, lo apasionada, lo adorable, lo hermosa, este dia, me leiste cuentos en japones, permitiendome admirar tu esfuerzo y talento, por este idioma que adoras, viendo tu sonrisa y tus nervios al leerme, y aun con ello atreviendote a hacerlo, siempre te admirare y atesorare cada uno de tus gestos, cada uno de ellos es una cura en mi corazon.',
        starTitle: 'El Momento Exacto',
        imageUrl: Agosto23,
    },
    {
        id: 18,
        ...getRandomClusteredCoordinate(),
        starName: 'Amethysta IX',
        discoveryDate: new Date('2025-08-30T00:00:00'),
        dedication:
            'Un tesoro precioso, de un color que no se encuentra en ningún otro lugar, aquello que quiero cuidar siempre, el dia en el que comimos pozole hecho por tus abuelitos, un dia mas con tu linda familia, dia en el que me aceptaron completamente creciendo cada vez mas, este dia ademas de llevarme ese tesoro en mi corazon, nos llevamos un tesoro ganado en la loteria, ganando juntos una partida a la vez, gracias por tan hermoso regalo, te amo',
        starTitle: 'Tesoro Único',
        imageUrl: Agosto30,
    },
    {
        id: 19,
        ...getRandomClusteredCoordinate(),
        starName: 'Elysian Echo',
        discoveryDate: new Date('2025-08-31T00:00:00'),
        dedication:
            'El eco de una risa que resuena en la eternidad, la primera vez que estuvimos con nuestros amigos como novios, festejando el logro de uno de ellos, tomados de la mano sonriendo felices por una montaña de emociones, un dia inolvidable en el que incluso mis padres reaccionaron con corazones por vernos felices juntos, esa sonrisa es la que quiero ver el resto de mis dias.',
        starTitle: 'Tu risa aquello que siempre espere.',
        imageUrl: Agosto31,
    },
    {
        id: 20,
        ...getRandomClusteredCoordinate(),
        starName: 'Argentum Futuris',
        discoveryDate: new Date('2025-09-08T00:00:00'),
        dedication:
            'Llegamos a este dia, cumpliendo un mes de iniciar nuestra historia como novios, pero teniendo mas tiempo de sentirnos en casa, felices como ambos merecemos, no se que es lo que venga para nuestro futuro, pero quiero estar ahi siempre que me lo permitas, viendote sonreir, abrazandote y atesorando tus risas y sonrisas, riendo con tus chistes, esuchando esa risa de locura, viendo esos ojitos de amor, sintiendo tus caricias con pasion, quiero seguir tomando tu mano, en cada uno de nuestros viajes y aventuras, llorando en nuestros hombros cuando lo sintamos necesario, exhalando cuando necesitemos liberar nuestros sentimientos mas profundos, amandote cada dia mas que el primer dia en el que nos dijimos te amo. ',
        starTitle: 'Tu Influencia hasta el fin del universo',
    },
];
