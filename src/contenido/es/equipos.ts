// Equipos · español (borrador)
// Fuente: docs/handoff.md §7 (2026-11-19). Sin carrito: pedido y pago por WhatsApp.
import type { PaginaEquipos } from '../tipos';

const pd = '[POR DEFINIR]';

const equipos: PaginaEquipos = {
  meta: {
    titulo: 'Equipos',
    descripcion: 'Boya AQURA, diseño v5. Pedido y pago por WhatsApp.',
    whatsapp: 'Hola Sergio, quiero información sobre la boya AQURA.',
  },

  encabezado: {
    antetitulo: 'Equipos',
    titulo: 'Boya AQURA',
    frase: 'Diseño v5.',
    parrafo: pd,
    foto: 'AQURA_EQUIPOS_boya-v5_01',
  },

  catalogo: {
    titulo: 'Catálogo',
    productos: [
      {
        nombre: 'Boya AQURA v5',
        estado: 'Segunda mano',
        texto: 'Dos unidades, las que uso yo.',
        datos: [
          { etiqueta: 'Disponibles', valor: '2 unidades' },
          { etiqueta: 'Precio', valor: pd },
        ],
        boton: {
          texto: 'Pedir por WhatsApp',
          mensaje: 'Hola Sergio, quiero información sobre la boya AQURA de segunda mano.',
        },
        fotoAlt: 'Foto de la boya AQURA de segunda mano',
        fotoArchivo: 'AQURA_EQUIPOS_boya-v5-segunda-mano_01',
      },
      {
        nombre: 'Boya AQURA v5',
        estado: 'Nueva, sobre pedido',
        texto: 'Boyas nuevas sobre pedido.',
        datos: [
          { etiqueta: 'Entrega', valor: '20 a 30 días hábiles después del pago' },
          { etiqueta: 'Precio', valor: pd },
        ],
        boton: {
          texto: 'Pedir por WhatsApp',
          mensaje: 'Hola Sergio, quiero pedir una boya AQURA nueva.',
        },
        fotoAlt: 'Foto de la boya AQURA nueva',
        fotoArchivo: 'AQURA_EQUIPOS_boya-v5-nueva_01',
      },
    ],
  },

  comoPedir: {
    titulo: 'Cómo pedir',
    texto: 'El pedido y el pago se hacen por WhatsApp.',
  },
};

export default equipos;
