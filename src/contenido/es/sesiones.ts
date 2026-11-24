// Sesiones personalizadas · español
// Fuente: docs/handoff.md §6 (2026-11-19)
import type { PaginaSesiones } from '../tipos';

const agendar = {
  texto: 'Agendar por WhatsApp',
  mensaje: 'Hola Sergio, quiero agendar una sesión personalizada.',
};

const sesiones: PaginaSesiones = {
  meta: {
    titulo: 'Sesiones personalizadas',
    descripcion:
      'Apnea, respiración y autoconocimiento, a tu ritmo y con acompañamiento uno a uno. Sesiones en piscina en Pereira con Sergio Mejía Martínez.',
    whatsapp: agendar.mensaje,
  },

  encabezado: {
    antetitulo: 'Apnea',
    titulo: 'Sesiones personalizadas',
    frase: 'Apnea, respiración y autoconocimiento, a tu ritmo y con acompañamiento uno a uno.',
    parrafo:
      'Sesiones en piscina en Pereira para quien quiere entrenar, mejorar su relación con el agua o explorar la respiración como herramienta de autoconocimiento. No necesitas experiencia previa ni certificación.',
    boton: agendar,
    foto: 'AQURA_SESIONES_encabezado_01',
  },

  precios: {
    titulo: 'Precios',
    nota: 'Precios en pesos colombianos (COP).',
    modalidades: [
      { nombre: 'Sesión individual (1 h)', precio: '$60.000' },
      { nombre: 'Paquete de 3 sesiones', precio: '$150.000' },
      { nombre: 'Sesión dúo (2 personas)', precio: '$80.000' },
      {
        nombre: 'Grupos',
        precio: 'A la medida',
        boton: { texto: 'Cotizar por WhatsApp', mensaje: 'Hola Sergio, quiero cotizar sesiones para un grupo.' },
      },
    ],
    boton: agendar,
  },

  // El handoff no define texto para el cierre: se reutiliza la frase del encabezado.
  cierre: {
    titulo: 'Apnea, respiración y autoconocimiento, {acento}.',
    acento: 'a tu ritmo',
    boton: agendar,
  },
};

export default sesiones;
