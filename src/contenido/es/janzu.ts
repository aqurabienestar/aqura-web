// Janzu · español
// Fuente: docs/janzu.md (documento maestro, 2026-11-19). Solo secciones [PUBLICABLE].
import type { PaginaJanzu } from '../tipos';

const escribir = {
  texto: 'Escríbeme por WhatsApp',
  mensaje: 'Hola Sergio, quiero información sobre una sesión de Janzu.',
};

const janzu: PaginaJanzu = {
  meta: {
    titulo: 'Janzu · terapia acuática',
    descripcion:
      'El Janzu es un arte terapéutico de meditación en el agua. Sesiones individuales en Pereira con Sergio Mejía.',
    whatsapp: escribir.mensaje,
  },

  // §2 Definición corta
  encabezado: {
    antetitulo: 'Terapia acuática',
    titulo: 'Janzu',
    frase:
      'El Janzu es un arte terapéutico de meditación en el agua. Una sesión individual donde el cuerpo flota, el movimiento es suave y la respiración se vuelve consciente, hasta que el sistema nervioso encuentra una calma que pocas veces conoce despierto.',
    boton: escribir,
    foto: 'AQURA_JANZU_encabezado_01',
  },

  // §2 Texto principal + arte / terapia / meditación
  queEs: {
    titulo: 'Qué es',
    pilares: [
      { titulo: 'Arte', texto: 'Requiere disciplina, creatividad y práctica.' },
      { titulo: 'Terapéutico', texto: 'Actúa sobre el cuerpo, la mente y la forma de habitarse.' },
      { titulo: 'Meditación', texto: 'Lleva la mente de un estado de alerta a estados de quietud y escucha interna.' },
    ],
    parrafos: [
      { texto: 'En algún momento la superficie desaparece. El silencio bajo el agua es otro mundo: sin ruido, sin peso, sin prisa. El cuerpo recuerda algo antiguo.' },
      { destacado: 'En el cuerpo', texto: 'la tensión muscular se suelta, la espalda descansa, las articulaciones encuentran espacio. Una hora después el cuerpo sale sintiéndose diferente: más liviano, más propio.' },
      { destacado: 'En la mente', texto: 'la ansiedad baja, el estrés se disuelve. Algunos contactan con una sensación de quietud primaria, una calma que viene de antes. Muchos salen sin saber exactamente qué pasó. Solo saben que algo cambió.' },
      { destacado: 'La sesión', texto: 'dura una hora, es uno a uno. No necesitas saber nadar ni hacer nada: esa es precisamente la práctica, soltar.' },
    ],
    firma: 'Un regalo para el sistema nervioso.',
    foto: 'AQURA_JANZU_que-es_01',
  },

  // §2 Versión técnica breve (ya sin temperatura y con "favorece")
  sistemaNervioso: {
    antetitulo: 'Con raíz técnica',
    titulo: 'Lo que ocurre en el sistema nervioso',
    parrafos: [
      'El Janzu trabaja directamente sobre el sistema nervioso autónomo. En agua tibia la gravedad desaparece y el cuerpo deja de procesar el esfuerzo postural constante. Eso favorece la activación del sistema parasimpático: baja el cortisol, se regula la frecuencia cardíaca y el organismo entra en modo de restauración.',
      'Los movimientos ondulantes y la respiración consciente acompañan el paso de las ondas cerebrales de Beta, la alerta cotidiana, hacia Alpha y Theta: el umbral de la meditación profunda y la escucha interna.',
      'La presión hidrostática masajea músculos, fascias y órganos. La columna se descomprime. La respiración se expande. Las emociones encuentran cauce. El cuerpo recuerda una quietud que había olvidado.',
    ],
  },

  // §4 Solo la lista defendible
  beneficios: {
    titulo: 'Beneficios',
    grupos: [
      {
        titulo: 'Cuerpo',
        items: [
          'Alivia el estrés, la tensión nerviosa y la fatiga.',
          'Libera tensión muscular y mejora la sensación de movilidad.',
          'Descomprime la columna mientras se flota; la espalda descansa.',
          'Genera mayor conciencia respiratoria.',
          'Favorece un descanso profundo; muchas personas reportan dormir mejor.',
          'En embarazo, alivia la carga de la zona lumbar.',
        ],
      },
      {
        titulo: 'Mente',
        items: [
          'Lleva la mente de la alerta cotidiana a un estado de relajación profunda.',
          'Disminuye la sensación de ansiedad y estrés.',
          'Ayuda a soltar el control.',
          'Abre un espacio de escucha interna donde las emociones encuentran cauce.',
        ],
      },
      {
        titulo: 'Experiencia',
        items: [
          'Presencia, silencio, conexión con el elemento agua.',
          'Una sensación de contención y seguridad que muchos relacionan con el vientre materno.',
        ],
      },
    ],
  },

  // §3 Texto corto aprobado
  embarazo: {
    titulo: 'Janzu en embarazo',
    parrafos: [
      'En embarazo, el agua hace algo especial: la columna se descomprime, la zona lumbar descansa, las caderas se abren. El peso que el cuerpo carga cada día simplemente desaparece por un rato. El sistema nervioso de la mamá se regula, y ese estado de calma lo recibe el bebé también.',
      'Es de las experiencias más hermosas que existen en el agua.',
    ],
    pendiente: { etiqueta: 'Protocolo en embarazo (inmersiones, semanas, aval médico)', valor: '[POR DEFINIR]' },
    foto: 'AQURA_JANZU_embarazo_01',
  },

  // §5 La sesión
  sesion: {
    titulo: 'Cómo es una sesión',
    formato: [
      { etiqueta: 'Formato', valor: 'Individual, uno a uno.' },
      { etiqueta: 'Duración', valor: 'Aproximadamente una hora en el agua.' },
      { etiqueta: 'Requisitos', valor: 'No necesitas saber nadar.' },
      { etiqueta: 'Qué se hace', valor: 'Flotar, recibir movimientos suaves y ondulantes, respiración consciente, momentos de silencio bajo el agua.' },
      { etiqueta: 'Contacto', valor: 'Físico y respetuoso, dentro de un marco terapéutico. Una especie de masaje a través del movimiento en el agua.' },
      { etiqueta: 'Implementos', valor: 'Naricera durante la sesión (la respiración es por la boca). Flotadores en rodillas o tobillos según el cuerpo.' },
      { etiqueta: 'Seguridad', valor: 'Antes de empezar acordamos un código para pausar en cualquier momento.' },
    ],
    antes: {
      titulo: 'Antes de la sesión',
      items: [
        'Última comida unas 2 horas antes, preferiblemente liviana.',
        'Sin estimulantes (café, té, energizantes) ni sustancias psicoactivas antes o después de la sesión.',
        'Duerme bien la noche anterior y llega hidratado, sin tomar demasiado líquido justo antes.',
        'Ve al baño antes de entrar al agua.',
        'Si tienes el cabello largo, recógelo en la parte alta de la cabeza.',
        'Trae vestido de baño (sin telas sueltas ni nudos en la espalda), toalla o salida de baño y shampoo. Hay gorro y tapones de oídos en préstamo.',
        'Sin cremas en el rostro: hacen que la naricera se resbale.',
      ],
    },
    despues: {
      titulo: 'Después de la sesión',
      items: [
        'Date entre 40 minutos y 1 hora para integrar la experiencia.',
        'Evita el tráfico y los compromisos inmediatos; mejor un espacio tranquilo.',
        'Dale al cuerpo lo que pida: descanso temprano, silencio, escribir o dibujar si nace.',
        'Cada Janzu es diferente.',
      ],
    },
    reprogramar: {
      titulo: 'En estos casos reprogramamos la sesión',
      items: [
        'Heridas abiertas.',
        'Dermatitis fuerte o infecciones de piel.',
        'Enfermedad activa: gripa, tos, fiebre.',
        'Tatuajes recientes.',
        'Presión baja.',
      ],
    },
    foto: 'AQURA_JANZU_sesion_01',
  },

  // §8 Versión aprobada + voz auténtica (Documento Ancla)
  facilitador: {
    titulo: 'Quién facilita',
    nombre: 'Sergio Mejía',
    credenciales:
      'Certificado en Janzu niveles 1 y 2 (Colectivo Agua), Instructor Master AIDA de apnea, con formación en respiración consciente y más de 100 sesiones realizadas.',
    cita:
      'El Janzu es una sesión uno a uno en la que se buscan estados profundos de relajación. Es una conexión con el agua y las aguas internas, un llamado y un volver al vientre materno. Hay momentos de inmersión donde la respiración consciente es la clave para ir profundo. En una sesión soltamos el control: como flotante no tienes que hacer nada, solo entregarte y dejar que el agua encuentre su cauce.',
    foto: 'AQURA_JANZU_facilitador_01',
  },

  // §6 Precios y reservas
  inversion: {
    titulo: 'Inversión y reservas',
    mostrarPrecios: false, // La web remite a WhatsApp. Los valores no se guardan en este repositorio.
    textoSinPrecios: 'Escríbeme por WhatsApp y te comparto valores y fechas disponibles.',
    modalidades: [
      { nombre: 'Sesión individual', precio: '[POR DEFINIR]' },
      { nombre: 'Paquete de 3 sesiones', precio: '[POR DEFINIR]' },
    ],
    argumento: 'El paquete asegura tus tres espacios y permite profundizar en el proceso.',
    condiciones: [
      { etiqueta: 'Anticipación', valor: 'La sesión se separa con mínimo una semana de anticipación.' },
      { etiqueta: 'Reserva', valor: 'Con el 50 % del valor acordado.' },
      { etiqueta: 'Cancelación y reprogramación', valor: '[POR DEFINIR]' },
      { etiqueta: 'Vigencia del paquete', valor: '[POR DEFINIR]' },
    ],
    boton: { texto: 'Reservar por WhatsApp', mensaje: 'Hola Sergio, quiero reservar una sesión de Janzu.' },
  },

  // §7 Lugar y horarios (sin fechas fijas)
  lugar: {
    titulo: 'Dónde',
    sitios: [
      { destacado: 'Piscina Aventuragua', texto: 'Cerritos, Pereira, Risaralda (Km 11 vía Cerritos).' },
      { destacado: 'A domicilio', texto: 'si tienes una piscina climatizada en condiciones adecuadas para la sesión.' },
    ],
    horario: { etiqueta: 'Franja habitual', valor: 'Miércoles y viernes, 10:00 a. m. y 11:00 a. m.' },
    nota: 'Agenda sujeta a disponibilidad. Escríbeme para conocer las fechas del mes.',
    foto: 'AQURA_JANZU_lugar_01',
  },

  // §11 Preguntas frecuentes
  preguntas: {
    titulo: 'Preguntas frecuentes',
    items: [
      { pregunta: '¿Necesito saber nadar?', respuesta: 'No. No tienes que hacer nada: el agua y el acompañamiento te sostienen.' },
      { pregunta: '¿Me van a sumergir?', respuesta: 'Sí, hay momentos breves de silencio bajo el agua, siempre progresivos y con una señal previa. Se usa naricera y la respiración es por la boca. Puedes pausar la sesión en cualquier momento.' },
      { pregunta: '¿Hay contacto físico?', respuesta: 'Sí. Es respetuoso, dentro de un marco terapéutico, y se acuerda antes de empezar.' },
      { pregunta: '¿Puedo hacerlo embarazada?', respuesta: 'Sí, es una de las experiencias más indicadas. La sesión se adapta a cada etapa del embarazo. Inmersiones, semanas y aval médico: [POR DEFINIR]' },
      { pregunta: '¿Qué llevo?', respuesta: 'Vestido de baño, toalla o salida de baño y shampoo. Si necesitas gorro o tapones, hay en préstamo.' },
      { pregunta: '¿Cuánto dura?', respuesta: 'Alrededor de una hora en el agua, más un momento antes para conversar y otro después para integrar.' },
      { pregunta: '¿Una sola sesión sirve?', respuesta: 'Una sesión ya se siente. Un proceso de varias sesiones permite ir más profundo.' },
      { pregunta: '¿Dónde es?', respuesta: 'En la piscina de Aventuragua, en Cerritos (Pereira), o a domicilio si tienes una piscina climatizada adecuada.' },
    ],
  },

  // Cierre: remate de la versión técnica (§2), con Mairo en "soltar" (§12).
  // El texto poético de §2 no se usa: viene de fuentes externas y hay que reescribirlo con voz propia.
  cierre: {
    titulo: 'Una hora. Uno a uno. Sin hacer nada: solo {acento}.',
    acento: 'soltar',
    boton: escribir,
  },
};

export default janzu;
