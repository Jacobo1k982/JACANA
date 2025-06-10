import React, { lazy, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import ThankYou from './pages/ThankYou';
import GuiaDeTallas from './pages/GuiaDeTallas';
import Inicio from './components/Inicio';


import {
    story, dama, ropa, caballero, marcaszapatosapi,
    marcaszapatos2api

} from './data/data';

import { dataCarteras, marcacarteraapi } from './data/dataCarteras';

import DetalleCartera from "./components/DetalleCartera";
import CatalogoCarteras from "./components/CatalogoCarteras";
import CaracteristicasCartera from "./components/CaracteristicasCartera";
import CarteraMujer from "./components/CarteraMujer";
import Contacto from './pages/Contacto';

import Categorias from './components/Calzados/Categorias';
const CategoriasGenero = lazy(() => import('./components/Calzados/CategoriasGenero'));

/*Belleza*/
const Belleza = lazy(() => import('./components/Belleza/Belleza'));
const DetalleProducto = lazy(() => import('./components/Belleza/DetalleProducto'));
const BrandCarousel = lazy(() => import('./components/Belleza/BrandCarousel'));
const CardMenu = lazy(() => import('./components/Belleza/CardMenu'));
const BrandMenu = lazy(() => import('./components/Belleza/BrandMenu'));
const SallyHansen = lazy(() => import('./components/SallyHansen/SallyHansen'));
const GoodKind = lazy(() => import('./components/SallyHansen/GoodKind'));
const MiracleGel = lazy(() => import('./components/SallyHansen/MiracleGel'));
const Kerastase = lazy(() => import('./components/Kerastase/Kerastase'));

{/* Sección: Trend */ }
const Trend = lazy(() => import('./components/MacCosmetic/Trend'));


/* Sección: Componentes de la página principal */
const Hero = lazy(() => import('./components/Hero'));
/*const Stories = lazy(() => import('./components/Stories'));*/
const Shoebrands = lazy(() => import('./components/Shoebrands'));
const Shoebrands2 = lazy(() => import('./components/Shoebrands2'));

/* Sección: Componentes de secciones generales */
const Mujer = lazy(() => import('./components/Mujer'));
const Hombre = lazy(() => import('./components/Hombre'));
const Ropa = lazy(() => import('./components/Ropa'));
const Juvenil = lazy(() => import('./components/Juvenil'));
const Niña = lazy(() => import('./components/Niña'));
const Niño = lazy(() => import('./components/Niño'));

/* Sección: Componentes específicos de marcas para Hombre */
const Nike = lazy(() => import('./pages/Hombre/Zapatos/Nike'));
const Tommy = lazy(() => import('./pages/Hombre/Zapatos/Tommy'));
const Adidas = lazy(() => import('./pages/Hombre/Zapatos/Adidas'));
const Puma = lazy(() => import('./pages/Hombre/Zapatos/Puma'));
const Converse = lazy(() => import('./pages/Hombre/Zapatos/Converse'));
const NewB = lazy(() => import('./pages/Hombre/Zapatos/NewB'));
const Vans = lazy(() => import('./pages/Hombre/Zapatos/Vans'));

/* Sección: Componentes específicos de marcas para Mujer */
const Nkmujer = lazy(() => import('./pages/Mujer/Zapatos/Nkmujer'));
const Tommy2 = lazy(() => import('./pages/Mujer/Zapatos/Tommy2'));
const Adidas2 = lazy(() => import('./pages/Mujer/Zapatos/Adidas2'));
const Fila2 = lazy(() => import('./pages/Mujer/Zapatos/Fila2'));
const Puma2 = lazy(() => import('./pages/Mujer/Zapatos/Puma2'));
const Converse2 = lazy(() => import('./pages/Mujer/Zapatos/Converse2'));
const NewB2 = lazy(() => import('./pages/Mujer/Zapatos/NewB2'));
const VansMujer = lazy(() => import('./pages/Mujer/Zapatos/VansMujer'));

/* Sección: Componentes relacionados con Pijamas Mañanitas */
const Mañanitas = lazy(() => import('./components/Pijamas/Mujer/Mañanitas'));
const DetalleProductoMañanitas = lazy(() => import('./components/Pijamas/Mujer/DetalleProductoMañanitas'));

/* Sección: Componentes relacionados con Carteras */
const TiendaCarteras = lazy(() => import('./components/TiendaCarteras'));

/* Sección: Componentes de utilidades */
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
export default function AppRoutes() {
    const storiesRef = useRef(null);

    return (
        <>
            {/*<ScrollToTop />*/}
            <Routes>
                {/* Página principal */}
                <Route path="/" element={
                    <main className="flex flex-col relative w-full bg-[#ffffff] dark:bg-[#000000] min-h-screen overflow-hidden">
                        {/*<Hero heroapi={heroapi} storiesRef={storiesRef} />*/}
                        <>
                            <Inicio />
                            <CardMenu />
                        </>
                        {/*<Stories story={story} storiesRef={storiesRef} />*/}
                        <Categorias />
                    </main>
                } />
                <Route path="/calzados" element={<CategoriasGenero />} />
                <Route path="/search" element={<SearchResults />} />
                {/* Secciones */}
                <Route path="/hombre" element={<Hombre caballero={caballero} />} />
                <Route path="/juvenil" element={<Juvenil />} />
                <Route path="/niña" element={<Niña />} />
                <Route path="/niño" element={<Niño />} />
                <Route path="/mujer" element={<Mujer dama={ dama } />} />
                <Route path="/ropa" element={<Ropa />} />
                <Route path="/marcaszapatos" element={<Shoebrands marcaszapatosapi={marcaszapatosapi} />} />
                <Route path="/marcaszapatos2" element={<Shoebrands2 marcaszapatos2api={marcaszapatos2api} />} />

                <Route path="/mujer/new-balance" element={
                    <main className="flex flex-col gap-20 relative bg-white dark:bg-black min-h-screen overflow-hidden">
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='NewB2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <NewB2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/new-balance" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='NewBappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <NewB />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/mujer/converse" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Converse2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Converse2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/converse" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Converse'>
                            <div className='fila'>
                                <div className='col'>
                                    <Converse />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/puma" element={
                    <main className="w-full flex flex-col gap-20 relative bg-white dark:bg-slate-900 min-h-screen overflow-hidden">
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Pumaappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="mujer/puma" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Puma2appwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Puma2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="mujer/fila" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Filaappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Fila2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/mujer/adidas" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Adidasappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Adidas2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/adidas" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Adidasappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Adidas />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/tommy" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Tommyappman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Tommy />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/mujer/tommy" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Tommyappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Tommy2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/hombre/nike" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Nikeappman'>
                            <div className='nike'>
                                <div className='col'>
                                    <Nike />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/hombre/vans" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Vansappman'>
                            <div className='vans'>
                                <div className='col'>
                                    <Vans />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="mujer/vans" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
                        <div className='Vansappwoman'>
                            <div className='vans'>
                                <div className='col'>
                                    <VansMujer />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/mujer/nike" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        {/*<EncabezadoCatalogo deportivoapi={deportivoapi} />*/}
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
                <Route
                    path="/carteramujer"
                    element={
                        <CarteraMujer
                            marcacarteraapi={{ news: marcacarteraapi }}
                            dataCarteras={{ news: dataCarteras }} />} />
                <Route path="/cartera/:id" element={<DetalleCartera />} />
                <Route path="/catalogo/:marca" element={<CatalogoCarteras />} />
                <Route path="/caracteristicas/:id" element={<CaracteristicasCartera />} />
                <Route path="/carteras" element={<TiendaCarteras />} />
                <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="belleza" element={
                    <>
                        <Belleza />
                        {/*<BrandCarousel />*/}
                        <BrandMenu />
                    </>
                } />
                <Route path="/mañanitas" element={<Mañanitas />} />
                <Route path="/detalle/:id" element={<DetalleProductoMañanitas />} />

                {/*MacCosmetics*/}
                <Route path="trend" element={<Trend />} />
                <Route path="SallyHansen" element={
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0px' }}>
                            <SallyHansen style={{ marginBottom: '-5px' }} />
                            <GoodKind style={{ marginBottom: '-5px' }} />
                            <MiracleGel />
                        </div>
                    </>
                } />
                <Route path="kerastase" element={<Kerastase />} />
            </Routes>
        </>
    );
};