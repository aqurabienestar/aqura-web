// Home · español (borrador)
// Fuente: docs/handoff.md §1, §5, §6 y §7 (2026-11-19). Lo que el handoff no define va como [POR DEFINIR].
import type { PaginaHome } from '../tipos';

const home: PaginaHome = {
  meta: {
    descripcion:
      'AQURA: apnea, terapia acuática y bienestar con Sergio Mejía Martínez, AIDA Master Instructor. Pereira, Colombia.',
  },

  portada: {
    titulo: 'Apnea, terapia acuática y bienestar.',
    frase: '[POR DEFINIR] Frase de marca',
    credenciales: [
      'Sergio Mejía Martínez',
      'AIDA Master Instructor',
      'Bicampeón nacional de apnea indoor (2021 y 2022)',
      'Creador de la Apnea Integrativa',
    ],
    boton: { texto: 'Escríbeme por WhatsApp', mensaje: 'Hola Sergio, quiero información sobre AQURA.' },
    logoAlt: 'AQURA',
    foto: 'AQURA_HOME_portada_01',
  },

  ofertas: {
    tituloOculto: 'Cursos, sesiones, Janzu y travesías',
    items: [
      {
        antetitulo: 'Apnea',
        titulo: 'Cursos AIDA',
        texto: 'Aprende a descender con técnica, calma y seguridad, desde tu primera inmersión hasta el nivel de asistente de instructor.',
        enlace: { texto: 'Ver cursos', ruta: '/apnea/cursos-aida' },
        tono: 'azul',
        foto: 'AQURA_CURSOS_encabezado_01',
      },
      {
        antetitulo: 'Apnea',
        titulo: 'Sesiones personalizadas',
        texto: 'Apnea, respiración y autoconocimiento, a tu ritmo y con acompañamiento uno a uno.',
        enlace: { texto: 'Ver sesiones', ruta: '/apnea/sesiones' },
        tono: 'aqua',
        foto: 'AQURA_SESIONES_encabezado_01',
      },
      {
        antetitulo: 'Terapia acuática',
        titulo: 'Janzu',
        // docs/janzu.md §2, definición corta
        texto: 'Un arte terapéutico de meditación en el agua. Una sesión individual donde el cuerpo flota, el movimiento es suave y la respiración se vuelve consciente.',
        enlace: { texto: 'Conocer Janzu', ruta: '/janzu' },
        tono: 'aqua',
        foto: 'AQURA_JANZU_encabezado_01',
      },
      {
        antetitulo: 'Viajes, campamentos y retiros',
        titulo: 'Travesías',
        texto: '[POR DEFINIR]',
        enlace: { texto: 'Ver travesías', ruta: '/travesias' },
        tono: 'azul',
        foto: 'AQURA_TRAVESIAS_encabezado_01',
      },
    ],
  },

  travesia: {
    antetitulo: 'Próxima travesía',
    titulo: '[POR DEFINIR]',
    datos: [
      { etiqueta: 'Fecha', valor: '[POR DEFINIR]' },
      { etiqueta: 'Lugar', valor: '[POR DEFINIR]' },
      { etiqueta: 'Tipo', valor: '[POR DEFINIR]' },
    ],
    boton: {
      texto: 'Lista de espera por WhatsApp',
      mensaje: 'Hola Sergio, quiero estar en la lista de espera de la próxima travesía.',
    },
    enlace: { texto: 'Ver todas las travesías', ruta: '/travesias' },
  },

  equipos: {
    antetitulo: 'Equipos',
    titulo: 'Boya AQURA · diseño v5',
    texto:
      'Dos unidades de segunda mano, las que uso yo, y boyas nuevas sobre pedido, con entrega en 20 a 30 días hábiles después del pago.',
    precio: { etiqueta: 'Precio', valor: '[POR DEFINIR]' },
    fotoAlt: 'Foto de la boya AQURA',
    fotoArchivo: 'AQURA_EQUIPOS_boya-v5_01',
    enlace: { texto: 'Ver equipos', ruta: '/equipos' },
  },

  bitacora: {
    antetitulo: 'Bitácora',
    titulo: 'Teoría del abismo: conociendo el umbral hipóxico',
    extracto: '[POR DEFINIR]',
    enlace: { texto: 'Leer', ruta: '/bitacora/teoria-del-abismo' },
    enlaceTodo: { texto: 'Ver la bitácora', ruta: '/bitacora' },
    foto: 'AQURA_BITACORA_teoria-del-abismo_01',
  },

  contacto: {
    titulo: 'Contacto',
    boton: { texto: 'Escríbeme por WhatsApp', mensaje: 'Hola Sergio, quiero información sobre AQURA.' },
    instagram: 'Instagram',
    enlace: { texto: 'Más formas de contacto', ruta: '/contacto' },
  },
};

export default home;
