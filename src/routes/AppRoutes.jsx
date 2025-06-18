// src/AppRoutes.jsx
import React, { lazy, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from '../pages/SearchResults';
import ThankYou from '../pages/ThankYou';
import GuiaDeTallas from '../pages/GuiaDeTallas';
import Contacto from '../pages/Contacto';
import beautyRoutes from '../routes/beautyRoutes';
import mainRoutes from '../routes/mainRoutes';

// Componentes principales
const Inicio = lazy(() => import('../components/Inicio'));
const NikeCaballero = lazy(() => import('../components/ZapatosDeportivos/Hombre/Nike'));
const Mañanitas = lazy(() => import('../components/Pijamas/Mujer/Mañanitas'));
const CardMenu = lazy(() => import('../components/Belleza/CardMenu'));
const NikeDama = lazy(() => import('../components/ZapatosDeportivos/Mujer/Nike'));
const Lancome = lazy(() => import('../components/Lancome/Lancome'));


export default function AppRoutes() {
    const storiesRef = useRef(null);

    return (
        <Routes>
            {/* Página principal */}
            <Route
                path="/"
                element={
                    <main className="flex flex-col relative w-full bg-[#ffffff] dark:bg-[#000000] min-h-screen overflow-hidden">
                        {/*<Hero heroapi={heroapi} storiesRef={storiesRef} />*/}
                        <>
                            <Inicio />
                            <div className="my-10 h-1 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full" />
                            <Mañanitas />
                            <CardMenu />
                            <NikeDama />
                        </>
                    </main>
                }
            />

            {/* Rutas comunes */}
            <Route path="/search" element={<SearchResults />} />
            <Route path="/gracias" element={<ThankYou />} />
            <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/lancome" element={<Lancome />} />

            {/* Rutas modulares */}
            {beautyRoutes}
            {mainRoutes}
        </Routes>
    );
}
