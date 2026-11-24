// Cursos AIDA · español
// Fuente: docs/handoff.md §5 (2026-11-19)
import type { PaginaCursosAida } from '../tipos';

const reservar = 'Reservar por WhatsApp';

const cursosAida: PaginaCursosAida = {
  meta: {
    titulo: 'Cursos de apnea AIDA',
    descripcion:
      'Cursos de apnea AIDA 1 a 4 con Sergio Mejía Martínez, AIDA Master Instructor. Técnica, calma y seguridad, con certificación internacional.',
    whatsapp: 'Hola Sergio, quiero información sobre los cursos AIDA.',
  },

  encabezado: {
    antetitulo: 'Apnea',
    titulo: 'Cursos de apnea AIDA',
    frase:
      'Aprende a descender con técnica, calma y seguridad, desde tu primera inmersión hasta el nivel de asistente de instructor.',
    credenciales: [
      'Sergio Mejía Martínez',
      'AIDA Master Instructor',
      'Bicampeón nacional de apnea indoor (2021 y 2022)',
      'Más de 50 cursos dictados en Colombia y el exterior',
    ],
    parrafo:
      'Los cursos siguen el estándar internacional de AIDA y se enseñan desde la Apnea Integrativa: técnica, fisiología, seguridad y trabajo mental en cada inmersión. La certificación es internacional.',
    boton: {
      texto: 'Consultar fechas por WhatsApp',
      mensaje: 'Hola Sergio, quiero consultar las próximas fechas de los cursos AIDA.',
    },
    fotoAlt: 'Foto horizontal del encabezado',
    fotoArchivo: 'AQURA_CURSOS_encabezado_01',
  },

  niveles: {
    titulo: 'Cuál curso es para ti',
    intro: 'Cada nivel exige el anterior, salvo AIDA 1 y AIDA 2, que puedes tomar sin cursos previos.',
    columnas: {
      nivel: 'Nivel',
      paraQuien: 'Para quién',
      duracion: 'Duración',
      profundidad: 'Profundidad para certificar',
      requisito: 'Requisito previo',
      precio: 'Precio (COP)',
    },
    filas: [
      { nivel: 'AIDA 1', ancla: 'aida-1', paraQuien: 'Quieres probar la apnea con guía profesional', duracion: '1 día', profundidad: 'Inmersión guiada, sin mínimo', requisito: 'Nadar 100 m', precio: '$550.000' },
      { nivel: 'AIDA 2', ancla: 'aida-2', paraQuien: 'Quieres formarte como apneísta, con técnica', duracion: '2–3 días', profundidad: '12 m', requisito: 'Nadar 200 m sin aletas o 300 m con equipo', precio: '$1.300.000' },
      { nivel: 'AIDA 3', ancla: 'aida-3', paraQuien: 'Quieres mejorar ecualización y profundidad', duracion: '2–3 días', profundidad: '24 m', requisito: 'AIDA 2 o nivelación', precio: '$1.500.000' },
      { nivel: 'AIDA 4', ancla: 'aida-4', paraQuien: 'Quieres liderar sesiones o prepararte como instructor', duracion: '3–4 días', profundidad: '32 m', requisito: 'AIDA 3 o nivelación', precio: '$1.700.000' },
    ],
    notaCrossover: {
      antes: '¿Ya estás certificado con otra agencia?',
      enlace: 'Mira el CrossOver más abajo.',
    },
  },

  etiquetas: {
    paraQuien: 'Para quién es',
    queTeLlevas: 'Qué te llevas',
    duracion: 'Duración',
    requisitos: 'Requisitos para inscribirte',
    paraCertificarte: 'Para certificarte',
    precio: 'Precio',
    foto: 'Foto',
  },

  cursos: [
    {
      ancla: 'aida-1',
      nivel: 'AIDA 1',
      nombre: 'Tu primer encuentro con la apnea',
      bajada: 'Un día para conocer la apnea con guía profesional y decidir si quieres seguir.',
      descripcion:
        'Es una formación intensiva de un día para quien tiene poco tiempo, como unas vacaciones o un fin de semana, y quiere vivir la apnea bajo un estándar internacional de seguridad.',
      queTeLlevas: [
        'Teoría base, una sesión en piscina o mar en calma y una inmersión guiada en mar abierto',
        'Técnicas iniciales de respiración y relajación',
        'Certificación internacional AIDA 1',
        'Criterio para decidir si sigues al AIDA 2',
      ],
      duracion: { resumen: '1 día', detalle: '1 sesión de teoría, 1 de agua confinada, 1 en mar abierto' },
      requisitos: [
        'Ser mayor de 18 años (16 o 17 con autorización de los padres)',
        'Nadar 100 m sin parar',
      ],
      precio: '$550.000 COP',
      boton: { texto: reservar, mensaje: 'Hola Sergio, quiero información sobre el curso AIDA 1.' },
      fotoAlt: 'Foto del curso AIDA 1',
      fotoArchivo: 'AQURA_CURSOS_aida1_01',
    },
    {
      ancla: 'aida-2',
      nivel: 'AIDA 2',
      nombre: 'Apneísta',
      bajada: 'El curso donde te formas como apneísta: respiración, técnica, seguridad y profundidad.',
      descripcion:
        'Aprendes las disciplinas base de piscina (estática y dinámica con bialetas) y de profundidad (inmersión libre y peso constante). Sales con las herramientas para practicar apnea recreativa con seguridad en cualquier lugar del mundo.',
      paraQuien:
        'Personas con contacto previo con el mar, como snorkel, buceo, natación o apnea empírica, que quieren aprender de forma formal. No necesitas cursos previos.',
      queTeLlevas: [
        'Técnicas de relajación, respiración y respiración de recuperación',
        'Manejo del equipo: máscara, aletas, lastres y lanyard',
        'Protocolos de seguridad y rescate en piscina y en profundidad',
        'Duck-dive y técnica de aleteo con bialetas',
        'Certificación AIDA 2',
      ],
      duracion: { resumen: '2–3 días', detalle: '2 sesiones de teoría, 1–2 de agua confinada, 2–3 en mar abierto' },
      requisitos: [
        'Ser mayor de 18 años (16 o 17 con autorización de los padres)',
        'Nadar 200 m sin parar sin aletas, o 300 m con aletas, máscara y snorkel',
        'Formulario médico AIDA y liberación de responsabilidad',
      ],
      paraCertificarte: [
        '2:00 min de apnea estática',
        '40 m de apnea dinámica con bialetas',
        '12 m en peso constante con bialetas',
        'Rescate entre 5 y 10 m de profundidad',
        'Examen escrito con mínimo 75%',
      ],
      precio: '$1.300.000 COP',
      boton: { texto: reservar, mensaje: 'Hola Sergio, quiero información sobre el curso AIDA 2.' },
      fotoAlt: 'Foto del curso AIDA 2',
      fotoArchivo: 'AQURA_CURSOS_aida2_01',
    },
    {
      ancla: 'aida-3',
      nivel: 'AIDA 3',
      nombre: 'Apneísta avanzado',
      bajada: 'Profundidad, Frenzel sólido y control mental.',
      descripcion:
        'Aprendes a planear y hacer sesiones de apnea por tu cuenta con compañeros de tu nivel. El foco está en la ecualización Frenzel, la caída libre y el entrenamiento con tablas de CO₂.',
      queTeLlevas: [
        'Ecualización Frenzel consolidada',
        'Introducción a la caída libre (free fall)',
        'Tablas de CO₂ para entrenar la tolerancia a la hipercapnia',
        'Mejor técnica en profundidad y en dinámica',
        'Protocolos de rescate avanzados',
        'Certificación AIDA 3',
      ],
      duracion: { resumen: '2–3 días', detalle: '2–3 sesiones de teoría y práctica, 1–2 de agua confinada, 2–3 en mar abierto' },
      requisitos: [
        'Ser mayor de 18 años (16 o 17 con autorización de los padres)',
        'Certificación AIDA 2, o aprobar una evaluación de nivelación o un curso equivalente',
        'Formulario médico AIDA y liberación de responsabilidad',
      ],
      paraCertificarte: [
        '2:45 min de apnea estática',
        '55 m de apnea dinámica con bialetas',
        '24 m en peso constante con bialetas',
        'Ascenso desde 10 m sin máscara y desde 15 m solo con brazos',
        'Uso del lanyard',
        'Rescate entre 10 y 15 m de profundidad y 50 m de arrastre en superficie',
        'Diseño de una tabla de CO₂',
        'Examen escrito con mínimo 75%',
      ],
      precio: '$1.500.000 COP',
      boton: { texto: reservar, mensaje: 'Hola Sergio, quiero información sobre el curso AIDA 3.' },
      fotoAlt: 'Foto del curso AIDA 3',
      fotoArchivo: 'AQURA_CURSOS_aida3_01',
    },
    {
      ancla: 'aida-4',
      nivel: 'AIDA 4',
      nombre: 'Apneísta Máster y asistente de instructor',
      bajada: 'El nivel más alto de la apnea recreativa y tu entrada al rol de asistente.',
      descripcion:
        'Trabajas técnicas que van más allá de lo recreativo: inmersiones en FRC, compensación con mouthfill y packing. También te preparas para asistir a un instructor: guiar calentamientos, supervisar estudiantes en piscina y mar, y manejar cuerdas, nudos y lastres con seguridad.',
      queTeLlevas: [
        'Inmersiones en FRC, mouthfill y packing',
        'Estiramientos y calentamiento para diafragma, intercostales y músculos respiratorios',
        'Conceptos de planeación de entrenamiento y alimentación para la apnea',
        'Rescate profundo entre 15 y 20 m',
        'Manejo de cuerdas, nudos, lastres y lanyards',
        'Habilidades para asistir a un instructor',
        'Certificación AIDA 4',
      ],
      duracion: { resumen: '3–4 días', detalle: '3 sesiones de teoría y práctica, 2 de agua confinada, 3–4 en mar abierto' },
      requisitos: [
        'Ser mayor de 18 años (16 o 17 con autorización de los padres)',
        'Certificación AIDA 3, o aprobar una evaluación de nivelación',
        'Recomendado: curso de primeros auxilios o RCP',
      ],
      paraCertificarte: [
        '3:30 min de apnea estática',
        '70 m de apnea dinámica con bialetas',
        '32 m en peso constante con bialetas',
        '20 m con una sola aleta y 20 m sin máscara',
        'Rescate entre 15 y 20 m, rescate de 15 m con una sola aleta y 50 m de arrastre en superficie',
        'Acompañar, planear y asegurar una sesión de entrenamiento',
        'Examen escrito con mínimo 75%',
      ],
      precio: '$1.700.000 COP',
      boton: { texto: reservar, mensaje: 'Hola Sergio, quiero información sobre el curso AIDA 4.' },
      fotoAlt: 'Foto del curso AIDA 4',
      fotoArchivo: 'AQURA_CURSOS_aida4_01',
    },
  ],

  crossover: {
    titulo: 'CrossOver AIDA',
    texto:
      'Si ya tienes una certificación de apnea de otra agencia, puedes pasarla a AIDA sin repetir el curso completo.',
    precio: '$400.000 COP',
    boton: { texto: 'Consultar por WhatsApp', mensaje: 'Hola Sergio, quiero información sobre el CrossOver AIDA.' },
  },

  grupos: {
    titulo: 'Grupos privados',
    texto:
      'Si ya tienes un grupo que quiere certificarse, armamos el curso a su medida, con precio especial y en el lugar que ustedes elijan.',
    puntos: [
      { titulo: 'Ustedes eligen el destino:', texto: 'San Andrés, Santa Marta, el Pacífico, Sapsurro, República Dominicana, México o donde el grupo quiera ir.' },
      { titulo: 'Si ya tienen el viaje organizado,', texto: 'me sumo como instructor y certifico al grupo allá.' },
      { titulo: 'Fechas flexibles:', texto: 'ajusto mi agenda a la del grupo.' },
      { titulo: 'Precio especial por grupo,', texto: 'según el número de personas y el nivel.' },
    ],
    boton: { texto: 'Cotizar un grupo por WhatsApp', mensaje: 'Hola Sergio, quiero cotizar un curso AIDA para un grupo.' },
    foto: 'AQURA_CURSOS_grupos_01',
  },

  reservar: {
    titulo: 'Cómo reservar',
    intro: 'El cupo queda separado cuando pagas el anticipo. Ninguna reserva se hace sin hablar primero por WhatsApp.',
    pasos: [
      'Escríbeme por WhatsApp con tu nivel, tu objetivo y las fechas que te sirven.',
      'Te confirmo disponibilidad y te envío el link de pago del anticipo (30%).',
      'Antes de entrar al agua completas el formulario médico AIDA y la liberación de responsabilidad.',
    ],
    datos: [
      { etiqueta: 'Próximas fechas', valor: '[POR DEFINIR]' },
      { etiqueta: 'Qué incluye el precio', valor: '[POR DEFINIR]' },
      { etiqueta: 'Política de cancelación', valor: '[POR DEFINIR]' },
    ],
  },

  preguntas: {
    titulo: 'Preguntas frecuentes',
    items: [
      { pregunta: '¿Tengo que saber nadar bien?', respuesta: 'Para AIDA 1 basta con nadar 100 m sin parar. Para AIDA 2, 200 m sin aletas o 300 m con aletas, máscara y snorkel.' },
      { pregunta: '¿Puedo hacer el curso con 16 o 17 años?', respuesta: 'Sí, con autorización firmada de tus padres.' },
      { pregunta: '¿La certificación sirve fuera de Colombia?', respuesta: 'Sí. La certificación AIDA es internacional.' },
      { pregunta: '¿Qué es la nivelación?', respuesta: 'Una evaluación para quien no tiene la certificación anterior pero sí el nivel. Precio: [POR DEFINIR]' },
      { pregunta: '¿Necesito equipo propio?', respuesta: '[POR DEFINIR]' },
      { pregunta: '¿Dónde se hacen los cursos?', respuesta: 'Depende de la fecha: algunas Travesías incluyen certificación y los grupos privados eligen su destino. Escríbeme por WhatsApp y te doy fechas y lugar concretos.' },
      { pregunta: '¿Qué pasa si no logro algún requisito durante el curso?', respuesta: '[POR DEFINIR]' },
      { pregunta: '¿Es segura la apnea?', respuesta: 'Con formación y protocolos, sí. En todos los niveles aprendes una regla que no se negocia: nunca se practica apnea sin un compañero que te supervise.' },
    ],
  },

  // El documento no define texto para el cierre: se reutiliza la frase del encabezado.
  cierre: {
    titulo: 'Aprende a descender con técnica, {acento} y seguridad.',
    acento: 'calma',
    boton: {
      texto: 'Consultar fechas por WhatsApp',
      mensaje: 'Hola Sergio, quiero consultar las próximas fechas de los cursos AIDA.',
    },
  },
};

export default cursosAida;
