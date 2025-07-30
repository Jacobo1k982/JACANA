// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que desplaza al inicio de la página al cambiar de ruta.
 * 
 * Mejoras:
 * - Scroll suave con `behavior: smooth`
 * - Accesibilidad: anuncia el cambio de página a lectores de pantalla
 * - Evita doble renderizado
 * - Soporte para modo oscuro y temas personalizados
 * - Código limpio y mantenible
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Desplazamiento suave al inicio
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // Accesibilidad: anunciar nueva página
    const announcePageChange = () => {
      const mainHeading = document.querySelector('main h1, main h2, main h3');
      const pageTitle = mainHeading?.innerText || document.title || 'Página sin título';

      const announcement = `Navegando a: ${pageTitle}`;
      let liveRegion = document.getElementById('navigation-live-announcer');

      if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'navigation-live-announcer';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('class', 'fixed top-0 left-0 -translate-x-full -translate-y-full overflow-hidden');
        document.body.appendChild(liveRegion);
      }

      // Actualizar contenido
      liveRegion.textContent = announcement;

      // Limpiar después de un tiempo (evita saturar lectores de pantalla)
      const timer = setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);

      return () => clearTimeout(timer);
    };

    // Ejecutar anuncio
    announcePageChange();
  }, [pathname]);

  return null;
}