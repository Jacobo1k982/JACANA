import React from 'react';

import { Navbar, Hero, Sales, FlexContent, Stories, Footer, Cart } from './components';
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI, dama } from './data/data.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hombre from "./pages/Hombre.jsx";
import Juvenil from "./pages/Juvenil.jsx";
import Niña from "./pages/Niña.jsx";
import Niño from "./pages/Niño.jsx";
import Mujer from "./components/Mujer.jsx";


function App() {

  return (
    <>
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
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/juvenil" element={<Juvenil />} />
          <Route path="/niña" element={<Niña />} />
          <Route path="/niño" element={<Niño />} />
          <Route path="/mujer" element={<Mujer dama={dama} />} />
        </Routes>
        <Footer footerAPI={footerAPI} />
      </Router>
    </>
  )
}

export default App
