import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader'; // Componente de carga
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { footerAPI } from './data/data';
import AppRoutes from './AppRoutes';
import { Suspense } from 'react';


function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
      <Footer footerAPI={footerAPI} />
    </Router>
  );
}

export default App;
