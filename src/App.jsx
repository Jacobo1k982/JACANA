import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Hero, Sales, FlexContent, Stories, Footer, Cart, Mujer, Ropa, Mañanitas, CDeportivo } from './components';
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI, dama, ropa, mañanitas } from './data/data.js';

import Hombre from "./components/Hombre.jsx";
import Juvenil from "./components/Juvenil.jsx";
import Niña from "./components/Niña.jsx";
import Niño from "./components/Niño.jsx";


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
          <Route path="/ropa" element={<Ropa ropa={ropa} />} />
          <Route path="/mañanitas" element={<Mañanitas mañanitas={mañanitas} />} />
          <Route path='/cdeportivo' element={<CDeportivo cdeportivo={CDeportivo} />} />
        </Routes>
        <Footer footerAPI={footerAPI} />
      </Router>
    </>
  )
}

export default App
