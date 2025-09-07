import type { StarProps } from '../types/StarProperties';
import CamilaRetrato from '../assets/media/camila-retrato.webp';
import Julio19 from '../assets/media/julio_19.webp';
import Julio25 from '../assets/media/julio_25.webp';
import Julio29 from '../assets/media/julio_29.webp';
import Agosto01 from '../assets/media/agosto_1.webp';
import Agosto02 from '../assets/media/agosto_2.webp';
import Agosto06 from '../assets/media/agosto_6.webp';
import Agosto09 from '../assets/media/agosto_9.webp';
import Agosto09Tarde from '../assets/media/agosto_9_tarde.webp';
import Agosto15 from '../assets/media/agosto_15.webp';
import Agosto16 from '../assets/media/agosto_16.webp';
import Agosto17Noche from '../assets/media/agosto_17_noche.webp';
import Agosto20 from '../assets/media/agosto_20.webp';
import Agosto22 from '../assets/media/agosto_22.webp';
import Agosto22Camion from '../assets/media/agosto_22_camion.webp';
import Agosto22Museo from '../assets/media/agosto_22_museo.webp';
import Agosto22Zoo from '../assets/media/agosto_22_zoo.webp';
import Agosto23 from '../assets/media/agosto_23.webp';
import Agosto30 from '../assets/media/agosto_30.webp';
import Agosto31 from '../assets/media/agosto_31.webp';
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
        starName: 'Prima Initia', // (Latín para "El Primer Comienzo")
        discoveryDate: new Date('2025-08-08T00:00:00'),
        dedication:
            'Este día inició una hermosa historia. Recuerdo bien que desperté con las piernas temblorosas, preocupado por lo que este día significaría de ese momento en adelante. Me levanté temprano, a pesar de haberme desvelado, y preparé las cosas para ir a nuestro día de pícnic. Había preparado una linda dinámica y repasado cómo te propondría iniciarla; creé un montón de escenarios en mi mente para que todo fuera lo más especial para ti. Cuando llegaste a casa, sentí que mi corazón explotaba. Tembloroso porque aún no terminaba la comida, llegamos al pícnic, disfrutamos y comenzamos la dinámica. En ella me humillaste dibujando, pero logré decirte todo lo que sentía. Fue un día inolvidable; tus lágrimas de alegría y besos son fantásticas obras de arte.',
        starTitle: 'El día que todo comenzó',
        imageUrl: CamilaRetrato,
    },
    {
        id: 2,
        ...getRandomClusteredCoordinate(),
        starName: 'Rosa Caelestis', // (Latín para "Rosa Celestial")
        discoveryDate: new Date('2025-07-25T00:00:00'),
        dedication:
            'Tuve un viaje con mi mamá a una linda ciudad, una que, aunque no hemos visitado al mismo tiempo, no podía dejar de recordarme a ti. En todo momento, mi cabeza solo pensaba en ti y, aun con la distancia, seguía aprendiendo más de ti. Ese día me hablaste sobre cómo te demostraba mi cariño, y coincidimos en que iríamos paso a paso. Aun así, no pude evitar expresarte mi amor mandándote un pequeño presente, ya que no podía entregártelo en persona: una rosa por cada hora del día que pensaba en ti.',
        starTitle: 'Corazones que vencen distancias',
        imageUrl: Julio25,
    },
    {
        id: 3,
        ...getRandomClusteredCoordinate(),
        starName: 'Felis Major', // (Latín para "Gato Mayor")
        discoveryDate: new Date('2025-07-19T00:00:00'),
        dedication:
            'Recuerdo muy bien lo que sentí este día. Quería que la primera comida que probaras hecha por mis manos fuera deliciosa. Recuerdo contarle a mis amigas que no sabía qué cocinar, y pasé horas pensando en qué podía prepararte. Cuando llegaste, me sentí tan en paz y feliz de que estuvieras aquí conmigo. Desayunamos rico, platicamos y nos seguimos conociendo. Disfrutamos de una película y series hasta que dio la hora de ir a ver la exposición de arte hecha con gatitos. Fue la primera vez que tomaste mi mano, ya que yo no daba el primer paso. Me sentí tan feliz cuando, ese día, te dije lo que sentía por ti.',
        starTitle: 'Historia con gatitos y primera foto',
        imageUrl: Julio19,
    },
    {
        id: 4,
        ...getRandomClusteredCoordinate(),
        starName: 'Nexus Familiae', // (Latín para "Conexión Familiar")
        discoveryDate: new Date('2025-07-29T00:00:00'),
        dedication:
            'Llegué a casa de tu mamá para conocerla, al igual que a tus hermanitos. Fue la primera vez que conocería a esos dulces niños. Ese día iríamos a ver "Los 4 Fantásticos"; llegamos como pareja al cine, aunque aún no lo éramos. Me sentí muy feliz. El hecho de pasar ese momento contigo, de tu mano, me hacía desear cada vez más que fueras mi novia. Cuidamos niños, pero nos divertimos como nunca. Aunque no llegamos a tomarnos más fotos, nuestro cariño y diversión quedaron retratados en el Playtime, terminando con una cena rápida mientras platicábamos de resolver problemas matemáticos. Me sentí integrado con tu familia desde ese momento.',
        starTitle: 'La presentación',
        imageUrl: Julio29,
    },
    {
        id: 5,
        ...getRandomClusteredCoordinate(),
        starName: 'Flumen Cordium', // (Latín para "Río de Corazones")
        discoveryDate: new Date('2025-08-01T19:45:00'),
        dedication:
            'Atesoro este día en mi corazón. Quería verte feliz y sorprenderte con un delicioso almuerzo en un lugar mágico, una comida junto al río que demostrara lo que ya sentía por ti. Quería aclarar una duda que estaba en mi mente porque sentía todo tan lindo para ser real. Aunque avanzábamos rápido, no me sentía incómodo ni mal por ello; me sentía enormemente feliz y se me notaba a kilómetros. Este día conocí a tus abuelitos y me recibieron amablemente. Creo que manejé muy bien la situación. Jamás olvidaré lo bella que te veías ese día.',
        starTitle: 'Río de corazones',
        imageUrl: Agosto01,
    },
    {
        id: 6,
        ...getRandomClusteredCoordinate(),
        starName: 'Dulcis Harmonia', // (Latín para "Dulce Armonía")
        discoveryDate: new Date('2025-08-02T00:00:00'),
        dedication:
            'Jamás terminaré de agradecer haberte encontrado, haber sido aceptado en tu linda familia, el verte sonreír siempre. Este día, creando postres juntos con tus hermanitos, fue el primero en que me acerqué más a Leo y Ainara, como si nos conociéramos de más tiempo. Jugamos al trompo, reímos y, aunque no logramos probar el postre y al final del día llegamos a sentirnos abrumados por algunas palabras, nuestra confianza creció al saber que nos apoyábamos mutuamente, demostrando nuestro cariño sin preocupaciones.',
        starTitle: 'Postres y risas',
        imageUrl: Agosto02,
    },
    {
        id: 7,
        ...getRandomClusteredCoordinate(),
        starName: 'Sidus Inopinatum', // (Latín para "Estrella Inesperada")
        discoveryDate: new Date('2025-08-06T00:00:00'),
        dedication:
            'Llegamos con la intención de probar nuevos sabores, descubriendo nuevos lugares para sonreír. Aunque nuestro plan no contempló un día inhábil, me diste la oportunidad de llevarte a uno de los lugares que descubrí en mis aventuras caminando por la ciudad. Me sentí tan feliz de saber lo que sentías por mí; que hayas disfrutado ese día aclaró todo lo que faltaba en mi mente, y comencé a planear cómo daría el siguiente paso para hacerte feliz cada día desde entonces.',
        starTitle: 'Descubriendo sabores',
        imageUrl: Agosto06,
    },
    {
        id: 8,
        ...getRandomClusteredCoordinate(),
        starName: 'Draco Caelum',
        discoveryDate: new Date('2025-08-09T00:00:00'),
        dedication:
            'Por las historias que imaginamos y los futuros que construiremos. Siendo la primera salida como novios, conocí a tus amigas de toda la vida y ellas me aceptaron en su pequeña familia. Un día divertido en donde descubrimos que no sabía flotar. Ese día nos adornó un hermoso cielo despejado, el cual en ocasiones volteaba a ver, siempre con la esperanza de que ese no fuera otro de mis sueños. Un cielo nuevo en un nuevo comienzo para ambos, un cielo en el cual pintaríamos nuestra historia, comenzando por una celebración sobre el agua. Gracias por ese día.',
        starTitle: 'El Lienzo del Cielo',
        imageUrl: Agosto09,
    },
    {
        id: 8.5,
        ...getRandomClusteredCoordinate(),
        starName: 'Leo Minor', // (En honor al cumpleaños de Leo)
        discoveryDate: new Date('2025-08-09T15:00:00'),
        dedication:
            'Ese mismo día, fuimos corriendo a buscar un regalo para el cumpleaños de Leo. La pasamos muy bonito jugando, riendo, conviviendo. Me sentí tan feliz celebrando, ganándome más y más a tus hermanitos, abuelitos y toda tu familia, sintiéndome en casa, atesorando cada segundo y deseando que no terminara. Terminaste cansadita por nadar durante la mañana; solo quería abrazarte y que durmieras sobre mis hombros. Terminamos el hermoso día con un presente que te hizo recordar momentos de tu infancia.',
        starTitle: 'El Lienzo de una familia',
        imageUrl: Agosto09Tarde,
    },
    {
        id: 9,
        ...getRandomClusteredCoordinate(),
        starName: 'Symphonia Studiosa', // (Latín para "Sinfonía de Estudio")
        discoveryDate: new Date('2025-08-15T00:00:00'),
        dedication:
            'Un día que pudo ser como cualquier otro. No podríamos vernos ya que ambos estaríamos ocupados. Aun así, me propusiste que trabajáramos en una llamada, con música. Tal vez para algunas personas este gesto no signifique mucho, pero para mí fue algo hermoso. Ese día, abrumado por pendientes, me sentí acompañado, sentí que todo saldría bien. Disfruté tu música, codifiqué a su ritmo mientras, detrás, veía lo talentosa que eres y la pasión que te representa al hacer lo que amas.',
        starTitle: 'Nuestro Camino Musical',
        imageUrl: Agosto15,
    },
    {
        id: 10,
        ...getRandomClusteredCoordinate(),
        starName: 'Astrum Propinquum', // (Latín para "Estrella Cercana")
        discoveryDate: new Date('2025-08-16T00:00:00'),
        dedication:
            'Pasamos la tarde demostrando nuestro amor, preparándonos para una noche de ciencia con tus hermanitos. Ese día observaríamos astros en el cielo, desde estrellas distantes a miles de años luz, hasta planetas a pocos minutos luz y nuestro satélite a poco más de un segundo luz; no sin antes tener una linda cena en donde comenzaríamos a tomarnos nuestras primeras fotos con la intención de recordarlas por siempre.',
        starTitle: 'Noche Estrellada',
        imageUrl: Agosto16,
    },
    {
        id: 11,
        ...getRandomClusteredCoordinate(),
        starName: 'Aurora Prima', // (Latín para "El Primer Amanecer")
        discoveryDate: new Date('2025-08-17T00:00:00'),
        dedication:
            'Por la sabiduría encontrada en la calma de la noche, al estar junto a ti hasta el amanecer disfrutando de lo que el universo pone a disposición de nuestros ojos. Fue la primera vez que desperté a tu lado, la primera vez que apreciamos juntos el cielo nocturno con tus hermanitos y tu mamá. Es un día que jamás voy a olvidar.',
        starTitle: 'Sabiduría Nocturna',
        imageUrl: Agosto17Noche,
    },
    {
        id: 12,
        ...getRandomClusteredCoordinate(),
        starName: 'Iter Manuum', // (Latín para "El Camino de las Manos")
        discoveryDate: new Date('2025-08-20T00:00:00'),
        dedication:
            'Recorriendo el universo tomado de tu mano, nuestro primer viaje al zoológico, caminando por horas y siendo atacados por mosquitos gigantes. No podía dejar de atesorar tu mirada. Cada paso que dábamos, lo hacíamos de la mano. Aprendimos tantas cosas ese día, descubriendo especies que estaban en libertad, preparándonos para nuestro primer viaje juntos. Ese último camino que tomamos antes de irnos a almorzar fue tomando tu mano. Quiero tomarla cada día que esté a tu lado.',
        starTitle: 'Caminando de tu mano',
        imageUrl: Agosto20,
    },
    {
        id: 13,
        ...getRandomClusteredCoordinate(),
        starName: 'Socius Itinere', // (Latín para "Compañeros de Viaje")
        discoveryDate: new Date('2025-08-22T00:00:00'),
        dedication:
            'Nuestro primer viaje juntos, posible gracias a la confianza que tus abuelos depositaron en mí. Recorriendo otros caminos, pasando por altos y bajos, disfrutando de nuestro cariño y compañía, haciendo chistes, riendo, aprendiendo y gozando de nuestra presencia. Nos sacamos fotos tan lindas y memorables para siempre. Gracias por los secretos, los chistes, las risas compartidas y la complicidad que nos define.',
        starTitle: 'Complicidad en otros caminos',
        imageUrl: Agosto22,
    },
    {
        id: 14,
        ...getRandomClusteredCoordinate(),
        starName: 'Speculum Animae', // (Latín para "Espejo del Alma")
        discoveryDate: new Date('2025-08-22T15:00:00'),
        dedication:
            'Un deseo susurrado a la estrella más noble: estar a tu lado siempre, incluso cuando el lugar en el que estamos nos haga reflexionar sobre lo que nos rodea. No dejar de sonreír a tu lado, compartiendo cada momento junto a ti hasta el fin de los días. Llegamos a este lugar, que aunque parecía que nos dejaría tristes, sonreímos al tenernos el uno al otro y compartir ese sentimiento. Juntos todo se siente mejor.',
        starTitle: 'Un lugar de reflexión y amor',
        imageUrl: Agosto22Zoo,
    },
    {
        id: 15,
        ...getRandomClusteredCoordinate(),
        starName: 'Mundus Solus', // (Latín para "Un Mundo Solitario/Para Nosotros")
        discoveryDate: new Date('2025-08-22T17:00:00'),
        dedication:
            'Después de un largo recorrido, llegamos a un lugar en el que el resto del mundo no existía; solo nos veíamos tú y yo. Disfrutando una exposición de cera, con chistes de cómo no se parecían a las personas que representaban. Fue con este abrazo que mi día se volvió único, sintiendo un fuego que nos mantiene cálidos para aventurarnos a lo desconocido, sin miedo alguno. Para mí, el siguiente momento especial fue cuando fuimos al Rey del Ceviche, ya que temía que no me gustara por no comer mariscos. Fue delicioso almorzar a tu lado viendo tu dulce carita.',
        starTitle: 'Un mundo solo para nosotros',
        imageUrl: Agosto22Museo,
    },
    {
        id: 16,
        ...getRandomClusteredCoordinate(),
        starName: 'Flos Caelestis', // (Latín para "Flor Celestial")
        discoveryDate: new Date('2025-08-22T23:00:00'),
        dedication:
            'Como una flor que se abre en el jardín del cosmos enfrentándose al caos. Regresando con el tiempo medido, buscando una forma de que estuvieras cómoda en el viaje a casa, mantuvimos la calma tomados de la mano hasta encontrar una solución. Regresamos sanos y salvos a casa con un nuevo aprendizaje, con nuevos sentimientos de amor, al sentirte como una dulce flor a quien quiero cuidar siempre, porque eres mi flor en el cosmos.',
        starTitle: 'Regreso a nuestra cuna de amor',
        imageUrl: Agosto22Camion,
    },
    {
        id: 17,
        ...getRandomClusteredCoordinate(),
        starName: 'Admiratio', // (Latín para "Admiración")
        discoveryDate: new Date('2025-08-23T00:00:00'),
        dedication:
            'Por el momento perfecto, el instante justo en que supe que eres más que maravillosa. Desde un inicio me enamoré de lo increíble que eres: lo creativa, lo apasionada, lo adorable, lo hermosa. Este día me leíste cuentos en japonés, permitiéndome admirar tu esfuerzo y talento por este idioma que adoras, viendo tu sonrisa y tus nervios al leerme y, aun con ello, atreviéndote a hacerlo. Siempre te admiraré y atesoraré cada uno de tus gestos; cada uno de ellos es una cura en mi corazón.',
        starTitle: 'El Momento Exacto',
        imageUrl: Agosto23,
    },
    {
        id: 18,
        ...getRandomClusteredCoordinate(),
        starName: 'Thesaurus Cordis', // (Latín para "Tesoro del Corazón")
        discoveryDate: new Date('2025-08-30T00:00:00'),
        dedication:
            'Un tesoro precioso, de un color que no se encuentra en ningún otro lugar, aquello que quiero cuidar siempre. El día en el que comimos pozole hecho por tus abuelitos, un día más con tu linda familia, un día en el que me aceptaron completamente, creciendo cada vez más. Este día, además de llevarme ese tesoro en mi corazón, nos llevamos un premio ganado en la lotería, ganando juntos una partida a la vez. Gracias por tan hermoso regalo, te amo.',
        starTitle: 'Tesoro Único',
        imageUrl: Agosto30,
    },
    {
        id: 19,
        ...getRandomClusteredCoordinate(),
        starName: 'Risus Aeternus', // (Latín para "Risa Eterna")
        discoveryDate: new Date('2025-08-31T00:00:00'),
        dedication:
            'El eco de una risa que resuena en la eternidad. La primera vez que estuvimos con nuestros amigos como novios, festejando el logro de uno de ellos, tomados de la mano, sonriendo felices por una montaña de emociones. Un día inolvidable en el que incluso mis padres reaccionaron con corazones por vernos felices juntos. Esa sonrisa es la que quiero ver el resto de mis días.',
        starTitle: 'Tu risa, aquello que siempre esperé.',
        imageUrl: Agosto31,
    },
    {
        id: 20,
        ...getRandomClusteredCoordinate(),
        starName: 'Argentum Futuris', // (Latín para "Futuro Plateado/Brillante")
        discoveryDate: new Date('2025-09-08T00:00:00'),
        dedication:
            'Llegamos a este día, cumpliendo un mes de iniciar nuestra historia como novios, pero sintiéndonos en casa desde hace más tiempo, felices como ambos merecemos. No sé qué es lo que venga para nuestro futuro, pero quiero estar ahí siempre que me lo permitas: viéndote sonreír, abrazándote y atesorando tus risas, riendo con tus chistes, escuchando esa risa de locura, viendo esos ojitos de amor, sintiendo tus caricias con pasión. Quiero seguir tomando tu mano en cada uno de nuestros viajes y aventuras, llorando en nuestros hombros cuando lo sintamos necesario, exhalando cuando necesitemos liberar nuestros sentimientos más profundos, amándote cada día más que el primero en que nos dijimos "te amo".',
        starTitle: 'Tu Influencia hasta el fin del universo',
    },
];
