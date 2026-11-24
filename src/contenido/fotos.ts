// Registro central de fotos del sitio.
// Cada clave es el nombre del archivo (convención AQURA_[SECCION]_[descripcion]_[numero]).
// La foto irá en public/img/<clave>.jpg (o .webp). La página /fotos lista todo esto.
// Si un componente pide una foto que no está aquí, el build falla: así la lista nunca se desactualiza.

export type Formato = 'horizontal' | 'cuadrada' | 'vertical';

export interface Foto {
  pagina: string;
  seccion: string;
  /** Qué debe mostrar la foto. */
  descripcion: string;
  formato: Formato;
  /** Notas para elegir o tomar la foto. */
  nota?: string;
}

export const proporcionDe: Record<Formato, string> = {
  horizontal: '3 / 2',
  cuadrada: '1 / 1',
  vertical: '4 / 5',
};

export const etiquetaFormato: Record<Formato, string> = {
  horizontal: 'Horizontal 3:2',
  cuadrada: 'Cuadrada 1:1',
  vertical: 'Vertical 4:5',
};

export const fotos: Record<string, Foto> = {
  // ---------- Home ----------
  AQURA_HOME_portada_01: {
    pagina: 'Home', seccion: 'Franja bajo la portada',
    descripcion: 'Imagen amplia y serena de agua: Sergio o un alumno en apnea, luz entrando desde la superficie',
    formato: 'horizontal', nota: 'Es la primera foto que se ve. Mejor con mucho espacio de agua y poca gente.',
  },

  // ---------- Cursos AIDA ----------
  AQURA_CURSOS_encabezado_01: {
    pagina: 'Cursos AIDA', seccion: 'Encabezado (también tarjeta del Home)',
    descripcion: 'Alumnos con Sergio en mar abierto, boya y cuerda a la vista',
    formato: 'horizontal',
  },
  AQURA_CURSOS_aida1_01: {
    pagina: 'Cursos AIDA', seccion: 'Ficha AIDA 1',
    descripcion: 'Primera inmersión guiada: alumno principiante en superficie o a poca profundidad',
    formato: 'horizontal',
  },
  AQURA_CURSOS_aida2_01: {
    pagina: 'Cursos AIDA', seccion: 'Ficha AIDA 2',
    descripcion: 'Duck-dive o descenso por la cuerda con bialetas',
    formato: 'horizontal',
  },
  AQURA_CURSOS_aida3_01: {
    pagina: 'Cursos AIDA', seccion: 'Ficha AIDA 3',
    descripcion: 'Descenso en profundidad, caída libre o ecualización',
    formato: 'horizontal',
  },
  AQURA_CURSOS_aida4_01: {
    pagina: 'Cursos AIDA', seccion: 'Ficha AIDA 4',
    descripcion: 'Rescate, manejo de cuerdas y lastres o apneísta asistiendo a otro',
    formato: 'horizontal',
  },
  AQURA_CURSOS_grupos_01: {
    pagina: 'Cursos AIDA', seccion: 'Grupos privados',
    descripcion: 'Grupo de alumnos certificándose juntos en un destino de mar',
    formato: 'horizontal',
  },

  // ---------- Sesiones ----------
  AQURA_SESIONES_encabezado_01: {
    pagina: 'Sesiones personalizadas', seccion: 'Encabezado (también tarjeta del Home)',
    descripcion: 'Sesión uno a uno en piscina: Sergio acompañando a una persona en estática o respiración',
    formato: 'horizontal',
  },

  // ---------- Janzu ----------
  AQURA_JANZU_encabezado_01: {
    pagina: 'Janzu', seccion: 'Encabezado (también tarjeta del Home)',
    descripcion: 'Sesión de Janzu: persona flotando sostenida en el agua, movimiento suave',
    formato: 'horizontal', nota: 'Con permiso de la persona que aparece. Sin temperatura ni cartel de la piscina visible.',
  },
  'AQURA_JANZU_que-es_01': {
    pagina: 'Janzu', seccion: 'Qué es',
    descripcion: 'Detalle íntimo: rostro sereno flotando, o manos en el agua',
    formato: 'vertical',
  },
  AQURA_JANZU_embarazo_01: {
    pagina: 'Janzu', seccion: 'Janzu en embarazo',
    descripcion: 'Mamá embarazada flotando en Janzu',
    formato: 'horizontal', nota: 'Solo con autorización escrita de la mamá.',
  },
  AQURA_JANZU_sesion_01: {
    pagina: 'Janzu', seccion: 'Cómo es una sesión',
    descripcion: 'Momento de silencio bajo el agua o implementos (naricera, flotadores) antes de empezar',
    formato: 'horizontal',
  },
  AQURA_JANZU_facilitador_01: {
    pagina: 'Janzu', seccion: 'Quién facilita',
    descripcion: 'Retrato de Sergio en el agua o junto a la piscina, mirada tranquila',
    formato: 'vertical',
  },
  AQURA_JANZU_lugar_01: {
    pagina: 'Janzu', seccion: 'Dónde',
    descripcion: 'La piscina de Aventuragua (Cerritos) vacía y en calma',
    formato: 'horizontal',
  },

  // ---------- Travesías ----------
  AQURA_TRAVESIAS_encabezado_01: {
    pagina: 'Travesías', seccion: 'Encabezado (también tarjeta del Home)',
    descripcion: 'Paisaje de mar de alguna travesía, con el grupo pequeño en el horizonte',
    formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_republica-dominicana_01': {
    pagina: 'Travesías', seccion: 'Certificación AIDA · República Dominicana (portada y tarjeta)',
    descripcion: 'Foto principal de la travesía: el grupo o el mar de República Dominicana',
    formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_republica-dominicana_02': {
    pagina: 'Travesías', seccion: 'Certificación AIDA · República Dominicana (galería)',
    descripcion: 'Momento de práctica en el agua', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_republica-dominicana_03': {
    pagina: 'Travesías', seccion: 'Certificación AIDA · República Dominicana (galería)',
    descripcion: 'Momento fuera del agua: teoría, lancha o grupo', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_azul-sapsurro_01': {
    pagina: 'Travesías', seccion: 'Azul · Sapsurro (portada y tarjeta)',
    descripcion: 'Danza en el agua o apnea en Sapsurro', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_azul-sapsurro_02': {
    pagina: 'Travesías', seccion: 'Azul · Sapsurro (galería)',
    descripcion: 'Momento de práctica en el agua', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_azul-sapsurro_03': {
    pagina: 'Travesías', seccion: 'Azul · Sapsurro (galería)',
    descripcion: 'Paisaje o momento del grupo en tierra', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_san-andres_01': {
    pagina: 'Travesías', seccion: 'Campamento San Andrés (portada y tarjeta)',
    descripcion: 'El mar de San Andrés con el grupo', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_san-andres_02': {
    pagina: 'Travesías', seccion: 'Campamento San Andrés (galería)',
    descripcion: 'Momento de práctica en el agua', formato: 'horizontal',
  },
  'AQURA_TRAVESIAS_san-andres_03': {
    pagina: 'Travesías', seccion: 'Campamento San Andrés (galería)',
    descripcion: 'Momento del campamento fuera del agua', formato: 'horizontal',
  },
  AQURA_TRAVESIAS_pacifico_01: {
    pagina: 'Travesías', seccion: 'Inmersión Pacífico (portada y tarjeta)',
    descripcion: 'El Pacífico: mar, selva o el grupo', formato: 'horizontal',
  },
  AQURA_TRAVESIAS_pacifico_02: {
    pagina: 'Travesías', seccion: 'Inmersión Pacífico (galería)',
    descripcion: 'Janzu o apnea durante la travesía', formato: 'horizontal',
  },
  AQURA_TRAVESIAS_pacifico_03: {
    pagina: 'Travesías', seccion: 'Inmersión Pacífico (galería)',
    descripcion: 'Momento del grupo fuera del agua', formato: 'horizontal',
  },

  // ---------- Equipos ----------
  'AQURA_EQUIPOS_boya-v5_01': {
    pagina: 'Equipos', seccion: 'Encabezado (también adelanto del Home)',
    descripcion: 'La boya AQURA v5 en uso, flotando en el mar con la cuerda',
    formato: 'horizontal',
  },
  'AQURA_EQUIPOS_boya-v5-segunda-mano_01': {
    pagina: 'Equipos', seccion: 'Ficha boya de segunda mano',
    descripcion: 'Una de las boyas de segunda mano, tal como está', formato: 'cuadrada',
    nota: 'Fondo limpio; que se vea el estado real.',
  },
  'AQURA_EQUIPOS_boya-v5-nueva_01': {
    pagina: 'Equipos', seccion: 'Ficha boya nueva',
    descripcion: 'Boya nueva, foto de producto completa', formato: 'cuadrada',
    nota: 'Fondo limpio, luz pareja.',
  },

  // ---------- Bitácora ----------
  'AQURA_BITACORA_teoria-del-abismo_01': {
    pagina: 'Bitácora', seccion: 'Entrada "Teoría del abismo" (portada y adelanto del Home)',
    descripcion: 'Azul profundo: cuerda que se pierde hacia el fondo o apneísta descendiendo',
    formato: 'horizontal',
  },

  // ---------- Contacto ----------
  AQURA_CONTACTO_sergio_01: {
    pagina: 'Contacto', seccion: 'Junto a los canales',
    descripcion: 'Retrato de Sergio, cercano y tranquilo', formato: 'vertical',
  },
};

export function foto(archivo: string): Foto {
  const f = fotos[archivo];
  if (!f) throw new Error(`Foto "${archivo}" no está en src/contenido/fotos.ts`);
  return f;
}
