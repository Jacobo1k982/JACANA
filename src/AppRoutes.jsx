import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    heroapi, popularsales, topratedsales, highlight, sneaker, story,
    dama, ropa, mañanitas, caballero, deportivoapi, deportivo2api, topratedsales2,
    topratedsales3, cdeportivo, deportivo3api
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

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página principal */}
            <Route path="/" element={
                <main className="flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden">
                    <Hero heroapi={heroapi} />
                    <Stories story={story} />
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

            {/* Deportivo */}
            <Route path="/deportivo" element={
                <main className='flex flex-col gap-20 relative bg-slate-100 dark:bg-slate-900 min-h-screen overflow-hidden'>
                    <Deportivo deportivoapi={deportivoapi} />
                    <Sales endpoint={topratedsales2} />
                    <div className='Nikeappman'>
                        <h2 className='text-6xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-extrabold filter drop-shadow-sm text-slate-200 text-center'></h2>
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
                    <Sportmujer deportivo3api={deportivo3api} />
                    <div className='Nikeappman'>
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
    );
}
