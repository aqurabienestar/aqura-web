// Contacto · español (borrador)
// Fuente: docs/handoff.md §7: WhatsApp, formulario e Instagram.
// El formulario no envía datos a ningún servidor: arma el mensaje y abre WhatsApp.
import type { PaginaContacto } from '../tipos';

const contacto: PaginaContacto = {
  meta: {
    titulo: 'Contacto',
    descripcion: 'Escríbele a Sergio Mejía Martínez por WhatsApp o Instagram.',
    whatsapp: 'Hola Sergio, quiero información sobre AQURA.',
  },

  encabezado: {
    antetitulo: 'AQURA',
    titulo: 'Contacto',
    frase: 'Toda reserva pasa primero por WhatsApp.',
    boton: { texto: 'Escríbeme por WhatsApp', mensaje: 'Hola Sergio, quiero información sobre AQURA.' },
    foto: 'AQURA_CONTACTO_sergio_01',
  },

  canales: {
    titulo: 'Canales',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
  },

  formulario: {
    titulo: 'Escríbeme',
    explicacion: 'Al enviar, se abre WhatsApp con tu mensaje listo para mandar.',
    nombre: 'Tu nombre',
    mensaje: 'Tu mensaje',
    enviar: 'Enviar por WhatsApp',
    saludo: 'Hola Sergio, soy',
  },
};

export default contacto;
