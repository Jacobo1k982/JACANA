import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLoader from './pages/PageLoader';
import ProgressBar from './pages/ProgressBar';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

function App() {
  const location = useLocation();

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mostrar loader al cambiar de ruta
  useEffect(() => {
    setIsPageLoading(true);
    const timeout = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Aplicar clase "dark" en <html> y persistir en localStorage
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <ProgressBar />

      {isPageLoading && <PageLoader />}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Cart />

      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<PageLoader />}>
          <AppRoutes />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
