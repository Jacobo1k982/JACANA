// src/routes/beautyRoutes.js
import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Belleza = lazy(() => import('../components/Belleza/Belleza'));
const DetalleProducto = lazy(() => import('../components/Belleza/DetalleProducto'));
const BrandMenu = lazy(() => import('../components/Belleza/BrandMenu'));
const SallyHansen = lazy(() => import('../components/SallyHansen/SallyHansen'));
const GoodKind = lazy(() => import('../components/SallyHansen/GoodKind'));
const MiracleGel = lazy(() => import('../components/SallyHansen/MiracleGel'));
const Kerastase = lazy(() => import('../components/Kerastase/Kerastase'));
const Trend = lazy(() => import('../components/MacCosmetic/Trend'));

const beautyRoutes = (
    <>
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/belleza" element={<><Belleza /><BrandMenu /></>} />
        <Route path="/SallyHansen" element={<><SallyHansen /><GoodKind /><MiracleGel /></>} />
        <Route path="/kerastase" element={<Kerastase />} />
        <Route path="/trend" element={<Trend />} />
    </>
);

export default beautyRoutes;
