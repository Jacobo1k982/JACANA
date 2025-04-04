import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { 
        Navbar, Hero, Sales, FlexContent, Stories, Footer, Cart, Mujer, Ropa, Mañanitas, CDeportivo, Hombre, 
        Deportivo, Sportmujer } from './components';

import { 
        heroapi, popularsales, topratedsales, topratedsales2, highlight, sneaker, story, footerAPI, dama, ropa, mañanitas, 
        caballero, deportivoapi, deportivo2api, topratedsales3 } from './data/data.js';

import NKmujer from "./pages/Mujer/Zapatos/NKmujer.jsx";
import Nike from "./pages/Hombre/Zapatos/Nike.jsx"
import Juvenil from "./components/Juvenil.jsx";
import Niña from "./components/Niña.jsx";
import Niño from "./components/Niño.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={
          <main className="flex flex-col gap-16 relative">
            <Hero heroapi={heroapi} />
            <Stories story={story} />
            <Sales endpoint={popularsales} ifExists />
            <FlexContent endpoint={highlight} ifExists />
            <Sales endpoint={topratedsales} />
            <FlexContent endpoint={sneaker} />
          </main>
        } />

        <Route path="/hombre" element={<Hombre caballero={caballero} />} />
        <Route path="/deportivo" element={
          <main className='flex flex-col gap-16 relative'>
            <Deportivo deportivoapi={deportivoapi} />
            <Sales endpoint={topratedsales2} />
            <main className='flex flex-col gap-16 relative'>
              <div className='Nikeapp'>
                <h2 className='text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center'>Catálogo</h2>
                <div className='fila'>
                  <div className='col'>
                    <Nike />
                  </div>
                </div>
              </div>
            </main>
          </main>
        } />
        <Route path="/juvenil" element={<Juvenil />} />
        <Route path="/niña" element={<Niña />} />
        <Route path="/niño" element={<Niño />} />
        <Route path="/mujer" element={<Mujer dama={dama} />} />
        <Route path="/sportmujer" element={
          <main className='flex flex-col gap-16 relative'>
            <Sportmujer deportivo2api={deportivo2api} />
            <Sales endpoint={topratedsales3} />
            <main className='flex flex-col gap-16 relative'>
              <div className='Nikeapp'>
                <h2 className='text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center'>Catálogo</h2>
                <div className='fila'>
                  <div className='col'>
                    <NKmujer />
                  </div>
                </div>
              </div>
            </main>
          </main>
        } />
        <Route path="/ropa" element={<Ropa ropa={ropa} />} />
        <Route path="/mañanitas" element={<Mañanitas mañanitas={mañanitas} />} />
        <Route path='/cdeportivo' element={<CDeportivo cdeportivo={CDeportivo} />} />
      </Routes>
      <Footer footerAPI={footerAPI} />
    </Router>
  );
}

export default App;
