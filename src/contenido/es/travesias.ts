// Travesías · español (borrador)
// Fuente: docs/handoff.md §4 y §7 (2026-11-19).
import type { PaginaTravesias } from '../tipos';

const pd = '[POR DEFINIR]';

const travesias: PaginaTravesias = {
  meta: {
    titulo: 'Travesías',
    descripcion: 'Travesías de AQURA: viajes, campamentos y retiros de apnea y agua con Sergio Mejía Martínez.',
    whatsapp: 'Hola Sergio, quiero información sobre las travesías.',
  },

  encabezado: {
    antetitulo: 'Viajes, campamentos y retiros',
    titulo: 'Travesías',
    frase: pd,
    foto: 'AQURA_TRAVESIAS_encabezado_01',
  },

  proxima: {
    antetitulo: 'Próxima travesía',
    titulo: pd,
    datos: [
      { etiqueta: 'Fecha', valor: pd },
      { etiqueta: 'Lugar', valor: pd },
      { etiqueta: 'Tipo', valor: pd },
    ],
    boton: {
      texto: 'Lista de espera por WhatsApp',
      mensaje: 'Hola Sergio, quiero estar en la lista de espera de la próxima travesía.',
    },
  },

  archivo: {
    titulo: 'Archivo 2026',
    items: [
      {
        slug: 'certificacion-aida-republica-dominicana',
        nombre: 'Certificación AIDA · República Dominicana',
        tipo: 'Certificación',
        fecha: 'Abril de 2026',
        lugar: 'República Dominicana',
        conQuien: pd,
        certificacion: 'Sí, AIDA',
        queSeHizo: pd,
        fotoAlt: 'Fotos de la certificación AIDA en República Dominicana',
        fotoArchivo: 'AQURA_TRAVESIAS_republica-dominicana_01',
      },
      {
        slug: 'azul-sapsurro',
        nombre: 'Azul · residencia oceánica de danza en el agua y apnea',
        tipo: pd,
        fecha: '2026',
        lugar: 'Sapsurro',
        conQuien: 'Geraldine',
        certificacion: pd,
        queSeHizo: pd,
        fotoAlt: 'Fotos de Azul en Sapsurro',
        fotoArchivo: 'AQURA_TRAVESIAS_azul-sapsurro_01',
      },
      {
        slug: 'campamento-san-andres',
        nombre: 'Campamento San Andrés',
        tipo: 'Campamento',
        fecha: 'Agosto de 2026',
        lugar: 'San Andrés',
        conQuien: 'Daniela Zuluaga',
        certificacion: pd,
        queSeHizo: pd,
        fotoAlt: 'Fotos del campamento en San Andrés',
        fotoArchivo: 'AQURA_TRAVESIAS_san-andres_01',
      },
      {
        slug: 'inmersion-pacifico',
        nombre: 'Inmersión Pacífico · Janzu + certificación de apnea',
        tipo: 'Certificación',
        fecha: '2026',
        lugar: 'Pacífico',
        conQuien: pd,
        certificacion: 'Sí, de apnea',
        queSeHizo: pd,
        fotoAlt: 'Fotos de Inmersión Pacífico',
        fotoArchivo: 'AQURA_TRAVESIAS_pacifico_01',
      },
    ],
  },

  etiquetas: {
    tipo: 'Tipo',
    fecha: 'Fecha',
    lugar: 'Lugar',
    conQuien: 'Con quién',
    certificacion: 'Certificación',
    queSeHizo: 'Qué se hizo',
    fotos: 'Fotos',
    volver: 'Todas las travesías',
    ver: 'Ver travesía',
  },

  cierreTravesia: {
    titulo: 'Próxima travesía',
    boton: {
      texto: 'Lista de espera por WhatsApp',
      mensaje: 'Hola Sergio, quiero estar en la lista de espera de la próxima travesía.',
    },
  },
};

export default travesias;
