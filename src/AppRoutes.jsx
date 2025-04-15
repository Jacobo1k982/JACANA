import React, { lazy, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    heroapi, popularsales, topratedsales, highlight, sneaker, story, dama, ropa, mañanitas, caballero, deportivoapi,
    topratedsales3, cdeportivo, marcaszapatosapi, marcaszapatos2api
} from './data/data';

// Lazy load components

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
const Bolso = lazy(() => import('./pages/Mujer/Bolso'));
const PortadaBolso = lazy(() => import('./components/PortadaBolso'));
const Puma2 = lazy(() => import('./pages/Mujer/Zapatos/Puma2'));
const PortadaPumaM = lazy(() => import('./components/PortadaPumaM'));
const Puma = lazy(() => import('./pages/Hombre/Zapatos/Puma'));
const PortadaPumaH = lazy(() => import('./components/PortadaPumaH'));
const Sandalias = lazy(() => import('./pages/Hombre/Zapatos/Sandalias'));
const PortadaSandalias = lazy(() => import('./components/PortadaSandalias'));









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
                        <Stories story={story} storiesRef= {storiesRef} />
                        <FlexContent endpoint={topratedsales3} />
                        <Sales endpoint={popularsales} ifExists />
                        <FlexContent endpoint={highlight} ifExists />
                        <Sales endpoint={topratedsales} />
                        <FlexContent endpoint={sneaker} />
                    </main>
                } />

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
                <Route path="/sandalias" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
                        <PortadaSandalias deportivoapi={deportivoapi} />
                        <div className='Bolsoappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Sandalias />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/puma" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
                        <PortadaPumaH deportivoapi={deportivoapi} />
                        <div className='Bolsoappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/puma2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
                        <PortadaPumaM deportivoapi={deportivoapi} />
                        <div className='Bolsoappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/bolso" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
                        <PortadaBolso deportivoapi={deportivoapi} />
                        <div className='Bolsoappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Bolso />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/gorra" element={
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
                    <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
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
            </Routes>
        </>
    );
};
