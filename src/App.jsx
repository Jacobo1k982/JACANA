import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Hero, Sales, FlexContent, Stories, Footer, Cart } from './components';
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from './data/data.js';

function App() {

  return (
    <>
      <BrowserRouter>
        <main className="flex flex-col gap-16 relative">
          <Navbar />
          <Routes>
            <Route path="Hombre" element={<Hero heroapi={heroapi} />} />
          </Routes>
          <Cart />
          <Hero heroapi={heroapi} />
          <Stories story={story} />
          <Sales endpoint={popularsales} ifExists />
          <FlexContent endpoint={highlight} ifExists />
          <Sales endpoint={topratedsales} />
          <FlexContent endpoint={sneaker} />
          <Footer footerAPI={footerAPI} />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
