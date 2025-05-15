import React, { lazy, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import ThankYou from './pages/ThankYou';
import OfertasFuturistas from './components/OfertasFuturistas';
import GuiaDeTallas from './pages/GuiaDeTallas';


import {
    heroapi, popularsales, topratedsales, highlight, sneaker, story, dama, ropa, caballero, deportivoapi, marcaszapatosapi,
    marcaszapatos2api
} from './data/data';

import { dataCarteras, marcacarteraapi } from './data/dataCarteras';
import { dataMañanitas, marcamañanitasAPI } from './data/conjuntoMañanitas';

import DetalleCartera from "./components/DetalleCartera";
import CatalogoCarteras from "./components/CatalogoCarteras";
import CaracteristicasCartera from "./components/CaracteristicasCartera";
import CarteraMujer from "./components/CarteraMujer";
import Contacto from './pages/Contacto';

/*Belleza*/
const Belleza = lazy(() => import('./components/Belleza/Belleza'));
const DetalleProducto = lazy(() => import('./components/Belleza/DetalleProducto'));

/* Sección: Componentes de la página principal */
const Hero = lazy(() => import('./components/Hero'));
const Stories = lazy(() => import('./components/Stories'));
const Sales = lazy(() => import('./components/Sales'));
const FlexContent = lazy(() => import('./components/FlexContent'));
const Shoebrands = lazy(() => import('./components/Shoebrands'));
const Shoebrands2 = lazy(() => import('./components/Shoebrands2'));

/* Sección: Componentes de secciones generales */
const Mujer = lazy(() => import('./components/Mujer'));
const Hombre = lazy(() => import('./components/Hombre'));
const Ropa = lazy(() => import('./components/Ropa'));
const EncabezadoCatalogo = lazy(() => import('./components/EncabezadoCatalogo'));
const Juvenil = lazy(() => import('./components/Juvenil'));
const Niña = lazy(() => import('./components/Niña'));
const Niño = lazy(() => import('./components/Niño'));

/* Sección: Componentes específicos de marcas para Hombre */
const Nike = lazy(() => import('./pages/Hombre/Zapatos/Nike'));
const Tommy = lazy(() => import('./pages/Hombre/Zapatos/Tommy'));
const Adidas = lazy(() => import('./pages/Hombre/Zapatos/Adidas'));
const Puma = lazy(() => import('./pages/Hombre/Zapatos/Puma'));
const Sandalias = lazy(() => import('./pages/Hombre/Zapatos/Sandalias'));
const Converse = lazy(() => import('./pages/Hombre/Zapatos/Converse'));
const NewB = lazy(() => import('./pages/Hombre/Zapatos/NewB'));
const Vans = lazy(() => import('./pages/Hombre/Zapatos/Vans'));
const Gorra = lazy(() => import('./pages/Hombre/Gorra'));

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
const TiendaMañanitas = lazy(() => import('./components/Pijamas/TiendaMañanitas'));
const MarcaMañanitas = lazy(() => import('./components/Pijamas/MarcaMañanitas'));
const PortadaMarcasMañanitas = lazy(() => import('./components/Pijamas/PortadaMarcasMañanitas'));
const CatalogoMañanitas = lazy(() => import('./components/Pijamas/CatalogoMañanitas'));
const DetalleMañanitas = lazy(() => import('./components/Pijamas/DetalleMañanitas'));
const CaracteristicasMañanitas = lazy(() => import('./components/Pijamas/CaracteristicasMañanitas'));

const ParticlesBackground = lazy(() => import('./pages/ParticlesBackground'));

/* Sección: Componentes relacionados con Carteras */
const TiendaCarteras = lazy(() => import('./components/TiendaCarteras'));

/* Sección: Componentes de utilidades */
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
export default function AppRoutes() {
    const storiesRef = useRef(null);

    return (
        <>
            <ScrollToTop />
            <Routes>
                {/* Página principal */}
                <Route path="/" element={
                    <main className="flex flex-col relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden">
                        <Hero heroapi={heroapi} storiesRef={storiesRef} />
                        <Stories story={story} storiesRef={storiesRef} />
                        {/*<Sales endpoint={popularsales} ifExists />*/}
                        {/*<FlexContent endpoint={highlight} ifExists />*/}
                        {/*<Sales endpoint={topratedsales} />*/}
                        {/*<FlexContent endpoint={sneaker} />*/}
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
                <Route path="/marcaszapatos" element={<Shoebrands marcaszapatosapi={marcaszapatosapi} />} />
                <Route path="/marcaszapatos2" element={<Shoebrands2 marcaszapatos2api={marcaszapatos2api} />} />
                <Route path="/newb2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
                        <div className='Filaappwoman'>
                            <div className='gorra'>
                                <div className='col'>
                                    <Gorra />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/fila2" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
                        <div className='Tommyappwoman'>
                            <div className='fila'>
                                <div className='col'>
                                    <Tommy2 />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/deportivo" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
                        <div className='Nikeappman'>
                            <div className='nike'>
                                <div className='col'>
                                    <Nike />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/vans-hombre" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
                        <div className='Vansappman'>
                            <div className='vans'>
                                <div className='col'>
                                    <Vans />
                                </div>
                            </div>
                        </div>
                    </main>
                } />
                <Route path="/vans-mujer" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
                        <div className='Vansappwoman'>
                            <div className='vans'>
                                <div className='col'>
                                    <VansMujer />
                                </div>
                            </div>
                        </div>
                    </main>
                } />

                <Route path="/Nike-mujer" element={
                    <main className='flex flex-col gap-20 relative bg-slate-900 dark:bg-slate-900 min-h-screen overflow-hidden bg-gray-900'>
                        <EncabezadoCatalogo deportivoapi={deportivoapi} />
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
                <Route path="/mañanitas" element={<PortadaMarcasMañanitas marcamañanitasAPI={{ news: marcamañanitasAPI }}
                    dataMañanitas={{ news: dataMañanitas }} />} />
                <Route path="/marca-mañanitas" element={<MarcaMañanitas />} />
                <Route path="/catalogomañanitas/:marca" element={<CatalogoMañanitas />} />
                <Route path="/mañanitas" element={<TiendaMañanitas />} />
                <Route path="/mañanitas/:id" element={<DetalleMañanitas />} />
                <Route path="/caracteristicasmañanitas/:id" element={<CaracteristicasMañanitas />} />
                <Route path="/guia-de-tallas" element={<GuiaDeTallas />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="belleza" element={<Belleza />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
            </Routes>
        </>
    );
};