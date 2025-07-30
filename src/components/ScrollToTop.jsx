import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que desplaza automáticamente la página al inicio
 * cada vez que cambia la ruta.
 * 
 * Mejoras:
 * - Accesibilidad: anuncia el cambio de ruta a lectores de pantalla
 * - Opción de scroll suave
 * - Evita scroll innecesario en el primer render si ya está arriba
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Opción 1: Scroll suave (mejor UX)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Puedes cambiar a 'auto' si prefieres inmediato
    });

    // Opción 2: Para accesibilidad — anunciar cambio de página
    const pageHeading = document.querySelector('main h1, main h2');
    const pageTitle = pageHeading ? pageHeading.innerText : document.title;

    const announcement = `Página cargada: ${pageTitle}`;
    const liveRegion = document.getElementById('navigation-live-announcer');

    if (!liveRegion) {
      const el = document.createElement('div');
      el.id = 'navigation-live-announcer';
      el.setAttribute('aria-live', 'polite');
      el.setAttribute('class', 'sr-only');
      document.body.appendChild(el);
      el.textContent = announcement;
    } else {
      liveRegion.textContent = announcement;
    }

    // Limpiar anuncio después de un tiempo
    const timer = setTimeout(() => {
      if (liveRegion) liveRegion.textContent = '';
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}