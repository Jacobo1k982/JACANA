// src/AppRoutes.jsx
import React, { lazy, Suspense, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import SearchResults from '../pages/SearchResults';
import ThankYou from '../pages/ThankYou';
import GuiaDeTallas from '../pages/GuiaDeTallas';
import Contacto from '../pages/Contacto';

// Componentes lazy (carga diferida)
const Inicio = lazy(() => import('../components/Inicio'));
const Mañanitas = lazy(() => import('../components/Pijamas/Mujer/Mañanitas'));
const CardMenu = lazy(() => import('../components/Belleza/CardMenu'));
const NikeDama = lazy(() => import('../components/ZapatosDeportivos/Mujer/Nike'));
const Lancome = lazy(() => import('../components/Lancome/Lancome'));

// Rutas modulares
import beautyRoutes from '../routes/beautyRoutes';
import mainRoutes from '../routes/mainRoutes';

// Fallback de carga
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="w-12 h-12 border-4 border-t-transparent border-pink-500 rounded-full animate-spin"></div>
    </div>
);

export default function AppRoutes() {
    const storiesRef = useRef(null);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Página principal */}
                <Route
                    path="/"
                    element={
                        <main className="flex flex-col w-full bg-white dark:bg-black min-h-screen">
                            <Suspense fallback={<PageLoader />}>
                                <Inicio />
                                <div className="my-10 h-1 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full" />
                                <Mañanitas />
                                <CardMenu />
                                <NikeDama />
                            </Suspense>
                        </main>
                    }
                />

                {/* Rutas principales */}
                <Route path="/search" element={<SearchResults />} />
                <Route path="/gracias" element={<ThankYou />} />
                <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/lancome" element={<Lancome />} />

                {/* Rutas modulares (beauty, main, etc.) */}
                {beautyRoutes}
                {mainRoutes}
            </Routes>
        </Suspense>
    );
}