// Tipos del contenido de páginas. Cualquier texto puede llevar "[POR DEFINIR]":
// el componente <Texto> lo muestra resaltado.

export interface Boton {
  texto: string;
  /** Mensaje precargado de WhatsApp. */
  mensaje: string;
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export interface FilaNivel {
  nivel: string;
  ancla: string;
  paraQuien: string;
  duracion: string;
  profundidad: string;
  requisito: string;
  precio: string;
}

export interface Curso {
  ancla: string;
  nivel: string;
  nombre: string;
  bajada: string;
  descripcion: string;
  paraQuien?: string;
  queTeLlevas: string[];
  duracion: { resumen: string; detalle: string };
  requisitos: string[];
  paraCertificarte?: string[];
  precio: string;
  boton: Boton;
  fotoAlt: string;
  fotoArchivo: string;
}

export interface Enlace {
  texto: string;
  ruta: string;
}

export interface Meta {
  titulo: string;
  descripcion: string;
  whatsapp: string;
}

export interface EncabezadoDatos {
  antetitulo: string;
  titulo: string;
  frase?: string;
  parrafo?: string;
  boton?: Boton;
  /** Nombre de archivo del registro src/contenido/fotos.ts. */
  foto?: string;
}

export interface Dato {
  etiqueta: string;
  valor: string;
}

export interface Cierre {
  titulo: string;
  acento?: string;
  boton: Boton;
}

export interface ProximaTravesiaDatos {
  antetitulo: string;
  titulo: string;
  datos: Dato[];
  boton: Boton;
  enlace?: Enlace;
}

// ---------- Janzu ----------
export interface Parrafo {
  /** Inicio en negrita, opcional ("En el cuerpo"). */
  destacado?: string;
  texto: string;
}

export interface ListaTitulada {
  titulo: string;
  items: string[];
}

export interface PaginaJanzu {
  meta: Meta;
  encabezado: EncabezadoDatos & { foto: string };
  queEs: {
    titulo: string;
    pilares: { titulo: string; texto: string }[];
    parrafos: Parrafo[];
    firma: string;
    foto: string;
  };
  sistemaNervioso: { antetitulo: string; titulo: string; parrafos: string[] };
  beneficios: { titulo: string; grupos: ListaTitulada[] };
  embarazo: { titulo: string; parrafos: string[]; pendiente: Dato; foto: string };
  sesion: {
    titulo: string;
    formato: Dato[];
    antes: ListaTitulada;
    despues: ListaTitulada;
    reprogramar: ListaTitulada;
    foto: string;
  };
  facilitador: { titulo: string; nombre: string; credenciales: string; cita: string; foto: string };
  inversion: {
    titulo: string;
    /** false oculta los valores y deja "consultar por WhatsApp". */
    mostrarPrecios: boolean;
    textoSinPrecios: string;
    modalidades: { nombre: string; precio: string; nota?: string }[];
    argumento: string;
    condiciones: Dato[];
    boton: Boton;
  };
  lugar: { titulo: string; sitios: Parrafo[]; horario: Dato; nota: string; foto: string };
  preguntas: { titulo: string; items: Pregunta[] };
  cierre: Cierre;
}

// ---------- Travesías ----------
export interface Travesia {
  slug: string;
  nombre: string;
  tipo: string;
  fecha: string;
  lugar: string;
  conQuien: string;
  certificacion: string;
  queSeHizo: string;
  fotoAlt: string;
  fotoArchivo: string;
}

export interface PaginaTravesias {
  meta: Meta;
  encabezado: EncabezadoDatos;
  proxima: ProximaTravesiaDatos;
  archivo: { titulo: string; items: Travesia[] };
  etiquetas: {
    tipo: string;
    fecha: string;
    lugar: string;
    conQuien: string;
    certificacion: string;
    queSeHizo: string;
    fotos: string;
    volver: string;
    ver: string;
  };
  cierreTravesia: Cierre;
}

// ---------- Equipos ----------
export interface Producto {
  nombre: string;
  estado: string;
  texto: string;
  datos: Dato[];
  boton: Boton;
  fotoAlt: string;
  fotoArchivo: string;
}

export interface PaginaEquipos {
  meta: Meta;
  encabezado: EncabezadoDatos;
  catalogo: { titulo: string; productos: Producto[] };
  comoPedir: { titulo: string; texto: string };
}

// ---------- Bitácora ----------
export interface EntradaBitacora {
  slug: string;
  titulo: string;
  extracto: string;
  notaSeguridad?: string;
  cuerpo: string[];
  foto: string;
}

export interface PaginaBitacora {
  meta: Meta;
  encabezado: EncabezadoDatos;
  leer: string;
  volver: string;
  tituloNota: string;
  entradas: EntradaBitacora[];
}

// ---------- Contacto ----------
export interface PaginaContacto {
  meta: Meta;
  encabezado: EncabezadoDatos;
  canales: { titulo: string; whatsapp: string; instagram: string };
  formulario: {
    titulo: string;
    explicacion: string;
    nombre: string;
    mensaje: string;
    enviar: string;
    saludo: string;
  };
}

export interface PaginaHome {
  meta: { descripcion: string };
  portada: {
    titulo: string;
    frase: string;
    credenciales: string[];
    boton: Boton;
    logoAlt: string;
    foto: string;
  };
  ofertas: {
    tituloOculto: string;
    items: { antetitulo: string; titulo: string; texto: string; enlace: Enlace; tono: 'azul' | 'aqua'; foto: string }[];
  };
  travesia: {
    antetitulo: string;
    titulo: string;
    datos: { etiqueta: string; valor: string }[];
    boton: Boton;
    enlace: Enlace;
  };
  equipos: {
    antetitulo: string;
    titulo: string;
    texto: string;
    precio: { etiqueta: string; valor: string };
    fotoAlt: string;
    fotoArchivo: string;
    enlace: Enlace;
  };
  bitacora: {
    antetitulo: string;
    titulo: string;
    extracto: string;
    enlace: Enlace;
    enlaceTodo: Enlace;
    foto: string;
  };
  contacto: {
    titulo: string;
    boton: Boton;
    instagram: string;
    enlace: Enlace;
  };
}

export interface PaginaSesiones {
  meta: { titulo: string; descripcion: string; whatsapp: string };
  encabezado: {
    antetitulo: string;
    titulo: string;
    frase: string;
    parrafo: string;
    boton: Boton;
    foto: string;
  };
  precios: {
    titulo: string;
    nota: string;
    modalidades: { nombre: string; precio: string; boton?: Boton }[];
    boton: Boton;
  };
  cierre: { titulo: string; acento: string; boton: Boton };
}

export interface PaginaCursosAida {
  meta: { titulo: string; descripcion: string; whatsapp: string };
  encabezado: {
    antetitulo: string;
    titulo: string;
    frase: string;
    credenciales: string[];
    parrafo: string;
    boton: Boton;
    fotoAlt: string;
    fotoArchivo: string;
  };
  niveles: {
    titulo: string;
    intro: string;
    columnas: { nivel: string; paraQuien: string; duracion: string; profundidad: string; requisito: string; precio: string };
    filas: FilaNivel[];
    notaCrossover: { antes: string; enlace: string };
  };
  etiquetas: {
    paraQuien: string;
    queTeLlevas: string;
    duracion: string;
    requisitos: string;
    paraCertificarte: string;
    precio: string;
    foto: string;
  };
  cursos: Curso[];
  crossover: { titulo: string; texto: string; precio: string; boton: Boton };
  grupos: {
    titulo: string;
    texto: string;
    puntos: { titulo: string; texto: string }[];
    boton: Boton;
    foto: string;
  };
  reservar: {
    titulo: string;
    intro: string;
    pasos: string[];
    datos: { etiqueta: string; valor: string }[];
  };
  preguntas: { titulo: string; items: Pregunta[] };
  cierre: { titulo: string; acento: string; boton: Boton };
}
