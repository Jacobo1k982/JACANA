import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import { Suspense } from 'react';

function App() {
  return (
    <>
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
