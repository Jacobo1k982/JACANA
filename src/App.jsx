import { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';  // Tu loader normal de lazy loading
import PageLoader from './pages/PageLoader'; // Nuevo loader de transición
import ProgressBar from './pages/ProgressBar';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

function App() {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    const timeout = setTimeout(() => {
      setIsPageLoading(false);
    }, 1000); // 1 segundo de loader (ajústalo como quieras)

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      {isPageLoading && <PageLoader />}
      <Navbar />
      <Cart />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
