import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader'; // Componente de carga

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { footerAPI } from './data/data';

import AppRoutes from './AppRoutes';

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
