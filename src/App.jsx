// App.jsx
import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './pages/PageLoader';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import SearchBar from './components/SearchBar'; // 👈 Importamos el SearchBar

function App() {
  const location = useLocation();

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false); // 👈 Estado para el SearchBar

  // Mostrar loader solo si la navegación tarda más de 100ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Finalizar loader después de un tiempo mínimo
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);

    return () => clearTimeout(loaderTimer);
  }, [location.pathname]);

  // Aplicar tema oscuro
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Manejar cambio de tema en otras pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        setDarkMode(e.newValue === 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div
      className="min-h-screen bg-white dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] transition-colors duration-300"
      style={{ userSelect: isPageLoading || isSearchOpen ? 'none' : 'auto' }}
    >
      {isPageLoading && <PageLoader />}

      {/* Navbar: le pasamos el control del search */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSearchOpen={() => setIsSearchOpen(true)} // 👈 Abre el search
      />                                                                                  

      {/* Cart */}
      <Cart />

      {/* SearchBar condicional */}
      {isSearchOpen && (
        <SearchBar
          products={[]} // 👈 Aquí conectarás tus productos reales
          onClose={() => setIsSearchOpen(false)}
          onFiltered={(results) => {
            console.log('Resultados filtrados:', results);
            // Aquí puedes navegar a resultados, actualizar estado, etc.
          }}
        />
      )}

      {/* Contenido principal */}
      <main className="pt-20 px-0 sm:px-6 lg:px-8">
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;