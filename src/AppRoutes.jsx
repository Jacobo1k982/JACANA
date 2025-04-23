import React, { lazy, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import ThankYou from './pages/ThankYou';

import {
    heroapi, popularsales, topratedsales, highlight, sneaker, story, dama, ropa, mañanitas, caballero, deportivoapi,
    cdeportivo, marcaszapatosapi, marcaszapatos2api, marcacarteraapi
} from './data/data';

/*Lazy load components*/

const Hero = lazy(() => import('./components/Hero'));
const Stories = lazy(() => import('./components/Stories'));
const Sales = lazy(() => import('./components/Sales'));
const FlexContent = lazy(() => import('./components/FlexContent'));
const Mujer = lazy(() => import('./components/Mujer'));
const Hombre = lazy(() => import('./components/Hombre'));
const Ropa = lazy(() => import('./components/Ropa'));
const Mañanitas = lazy(() => import('./components/Mañanitas'));
const CDeportivo = lazy(() => import('./components/CDeportivo'));
const Deportivo = lazy(() => import('./components/Deportivo'));
const Sportmujer = lazy(() => import('./components/Sportmujer'));
const Juvenil = lazy(() => import('./components/Juvenil'));
const Niña = lazy(() => import('./components/Niña'));
const Niño = lazy(() => import('./components/Niño'));
const Nike = lazy(() => import('./pages/Hombre/Zapatos/Nike'));
const Nkmujer = lazy(() => import('./pages/Mujer/Zapatos/Nkmujer'));
const Shoebrands = lazy(() => import('./components/Shoebrands'));
const Shoebrands2 = lazy(() => import('./components/Shoebrands2'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Tommy = lazy(() => import('./pages/Hombre/Zapatos/Tommy'));
const Tommy2 = lazy(() => import('./pages/Mujer/Zapatos/Tommy2'));
const PortadaTommyMujer = lazy(() => import('./components/PortadaTommyMujer'));
const PortadaTommyHombre = lazy(() => import('./components/PortadaTommyHombre'));
const PortadaAdidasH = lazy(() => import('./components/PortadaAdidasH'));
const PortadaAdidasM = lazy(() => import('./components/PortadaAdidasM'));
const Adidas = lazy(() => import('./pages/Hombre/Zapatos/Adidas'));
const Adidas2 = lazy(() => import('./pages/Mujer/Zapatos/Adidas2'));
const Fila2 = lazy(() => import('./pages/Mujer/Zapatos/Fila2'));
const PortadaFilaM = lazy(() => import('./components/PortadaFilaM'));
const Gorra = lazy(() => import('./pages/Hombre/Gorra'));
const PortadaGorra = lazy(() => import('./components/PortadaGorra'));
const Puma2 = lazy(() => import('./pages/Mujer/Zapatos/Puma2'));
const PortadaPumaM = lazy(() => import('./components/PortadaPumaM'));
const Puma = lazy(() => import('./pages/Hombre/Zapatos/Puma'));
const PortadaPumaH = lazy(() => import('./components/PortadaPumaH'));
const Sandalias = lazy(() => import('./pages/Hombre/Zapatos/Sandalias'));
const PortadaSandalias = lazy(() => import('./components/PortadaSandalias'));
const Converse = lazy(() => import('./pages/Hombre/Zapatos/Converse'));
const PortadaConverse = lazy(() => import('./components/PortadaConverse'));
const Converse2 = lazy(() => import('./pages/Mujer/Zapatos/Converse2'));
const PortadaConverse2 = lazy(() => import('./components/PortadaConverse2'));
const NewB = lazy(() => import('./pages/Hombre/Zapatos/NewB'));
const PortadaNB = lazy(() => import('./components/PortadaNB'));
const NewB2 = lazy(() => import('./pages/Mujer/Zapatos/NewB2'));
const PortadaNB2 = lazy(() => import('./components/PortadaNB2'));
const CarteraMujer = lazy(() => import('./components/CarteraMujer'));





export default function AppRoutes() {
    const storiesRef = useRef(null);

    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* Página principal */}
                <Route path="/" element={
                    <main className="flex flex-col relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden">
                        <Hero heroapi={heroapi} storiesRef={storiesRef} />
                        <Stories story={story} storiesRef={storiesRef} />
                        <Sales endpoint={popularsales} ifExists />
                        <FlexContent endpoint={highlight} ifExists />
                        <Sales endpoint={topratedsales} />
                        <FlexContent endpoint={sneaker} />
                    </main>
                } />
                <Route path="/search" element={<SearchResults />} />
                {/* Secciones */}
                <Route path="/hombre" element={<Hombre caballero={caballero} />} />
                <Route path="/juvenil" element={<Juvenil />} />
                <Route path="/niña" element={<Niña />} />
                <Route path="/niño" element={<Niño />} />
                <Route path="/mujer" element={<Mujer dama={dama} />} />
                <Route path="/ropa" element={<Ropa ropa={ropa} />} />
                <Route path="/mañanitas" element={<Mañanitas mañanitas={mañanitas} />} />
                <Route path="/cdeportivo" element={<CDeportivo cdeportivo={cdeportivo} />} />
                <Route path="/marcaszapatos" element={<Shoebrands marcaszapatosapi={marcaszapatosapi} />} />
                <Route path="/marcaszapatos2" element={<Shoebrands2 marcaszapatos2api={marcaszapatos2api} />} />
                <Route path="/carteramujer" element={<CarteraMujer marcacarteraapi={marcacarteraapi} />} />

                <Route path="/newb2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaNB2 deportivoapi={deportivoapi} />
                        <div className='NewB2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <NewB2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/newb" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaNB deportivoapi={deportivoapi} />
                        <div className='NewBappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <NewB />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/converse2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaConverse2 deportivoapi={deportivoapi} />
                        <div className='Converse2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Converse2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/converse" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaConverse deportivoapi={deportivoapi} />
                        <div className='Converseappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Converse />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/sandalias" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaSandalias deportivoapi={deportivoapi} />
                        <div className='Sandaliasappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Sandalias />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/puma" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaPumaH deportivoapi={deportivoapi} />
                        <div className='Pumaappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/puma2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaPumaM deportivoapi={deportivoapi} />
                        <div className='Puma2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/gorra" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaGorra deportivoapi={deportivoapi} />
                        <div className='Filaappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Gorra />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/fila2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaFilaM deportivoapi={deportivoapi} />
                        <div className='Filaappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Fila2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/adidas2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaAdidasM deportivoapi={deportivoapi} />
                        <div className='Adidasappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Adidas2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/adidas" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaAdidasH deportivoapi={deportivoapi} />
                        <div className='Adidasappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Adidas />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/tommy" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaTommyHombre deportivoapi={deportivoapi} />
                        <div className='Tommyappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Tommy />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/tommy2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <PortadaTommyMujer deportivoapi={deportivoapi} />
                        <div className='Tommyappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Tommy2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                {/* Deportivo */}
                <Route path="/deportivo" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <Deportivo deportivoapi={deportivoapi} />
                        <div className='Nikeappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Nike />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                {/* Sport Mujer */}
                <Route path="/sportmujer" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <Sportmujer deportivoapi={deportivoapi} />
                        <div className='Nikeappwoman'>
                            <h2 className='text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center'></h2>
                            <div className='fila'>
                                <div className='col'>
                                    <Nkmujer />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/gracias" element={<ThankYou />} />
            </Routes>
        </>
    );
};
