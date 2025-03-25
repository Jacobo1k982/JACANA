import React from 'react';
import { Navbar, Hero, Sales, FlexContent, Stories, Footer, Cart, Ropa } from './components';
import { heroapi, ropaapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from './data/data.js';

function App() {

  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Navbar />
        <Cart />
        <Hero heroapi={heroapi} />
        <Ropa ropaapi={ropaapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratedsales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  )
}

export default App
