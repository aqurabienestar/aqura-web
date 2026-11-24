// Bitácora · español (borrador)
// Fuente: docs/handoff.md §7. Textos propios de Sergio; sin fechas visibles.
import type { PaginaBitacora } from '../tipos';

const bitacora: PaginaBitacora = {
  meta: {
    titulo: 'Bitácora',
    descripcion: 'Bitácora de AQURA: textos de Sergio Mejía Martínez sobre apnea y agua.',
    whatsapp: 'Hola Sergio, quiero información sobre AQURA.',
  },

  encabezado: {
    antetitulo: 'Textos',
    titulo: 'Bitácora',
    frase: '[POR DEFINIR]',
  },

  leer: 'Leer',
  volver: 'Toda la bitácora',
  tituloNota: 'Nota de seguridad',

  entradas: [
    {
      slug: 'teoria-del-abismo',
      titulo: 'Teoría del abismo: conociendo el umbral hipóxico',
      extracto: '[POR DEFINIR]',
      notaSeguridad:
        'Este texto no es una guía de entrenamiento. La apnea nunca se practica sin un compañero que te supervise.',
      cuerpo: ['[POR DEFINIR] Texto de Sergio.'],
      foto: 'AQURA_BITACORA_teoria-del-abismo_01',
    },
  ],
};

export default bitacora;
