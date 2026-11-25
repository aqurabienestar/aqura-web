import es, { type Diccionario } from './es';
import en from './en';

export const idiomas = { es: 'Español', en: 'English' } as const;
export type Idioma = keyof typeof idiomas;
export const idiomaPorDefecto: Idioma = 'es';

const diccionarios: Record<Idioma, Diccionario> = { es, en };

export function textos(idioma: Idioma): Diccionario {
  return diccionarios[idioma];
}

/** Idioma según la URL: todo lo que está bajo /en/ es inglés. */
export function idiomaDesdeUrl(url: URL): Idioma {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';
}

/** Ruta sin prefijo de idioma, siempre empezando por "/". */
export function rutaBase(pathname: string): string {
  const sinPrefijo = pathname.replace(/^\/en(?=\/|$)/, '');
  return sinPrefijo === '' ? '/' : sinPrefijo;
}

/** Convierte una ruta en español ("/janzu") a la del idioma pedido ("/en/janzu"). */
export function rutaEn(idioma: Idioma, ruta: string): string {
  const base = rutaBase(ruta);
  if (idioma === idiomaPorDefecto) return base;
  return base === '/' ? `/${idioma}/` : `/${idioma}${base}`;
}

// ---------------- Navegación ----------------

type ClaveNav = keyof Diccionario['nav'];

export interface ItemNav {
  clave: ClaveNav;
  ruta: string;
  externo?: boolean;
  hijos?: ItemNav[];
}

export const URL_SERGIO = 'https://sergiomejiamartinez.com';
export const URL_INSTAGRAM = 'https://www.instagram.com/sergio.mejia.m/';
export const USUARIO_INSTAGRAM = '@sergio.mejia.m';

export const menuPrincipal: ItemNav[] = [
  {
    clave: 'apnea',
    ruta: '/apnea',
    hijos: [
      { clave: 'cursosAida', ruta: '/apnea/cursos-aida' },
      { clave: 'sesiones', ruta: '/apnea/sesiones' },
    ],
  },
  { clave: 'janzu', ruta: '/janzu' },
  { clave: 'travesias', ruta: '/travesias' },
  { clave: 'equipos', ruta: '/equipos' },
  { clave: 'sergio', ruta: URL_SERGIO, externo: true },
];

export const menuFooter: ItemNav[] = [
  { clave: 'cursosAida', ruta: '/apnea/cursos-aida' },
  { clave: 'sesiones', ruta: '/apnea/sesiones' },
  { clave: 'janzu', ruta: '/janzu' },
  { clave: 'travesias', ruta: '/travesias' },
  { clave: 'equipos', ruta: '/equipos' },
  { clave: 'bitacora', ruta: '/bitacora' },
  { clave: 'contacto', ruta: '/contacto' },
];

// ---------------- WhatsApp ----------------

export const WHATSAPP_NUMERO = '573137882713';
export const WHATSAPP_VISIBLE = '+57 313 788 2713';

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
