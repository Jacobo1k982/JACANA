import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productosData from '../../public/Data/productos.json'; // ajusta el path si es necesario

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [colorSeleccionado, setColorSeleccionado] = useState({});
    const [gifSrc, setGifSrc] = useState("/animacion.gif"); // 👈 Estado para el gif
    const carruselRef = useRef(null);

    useEffect(() => {
        setProductos(productosData);

        const verificarTamañoPantalla = () => {
            if (window.innerWidth <= 640) {
                setGifSrc("/animacion-mobile.gif");
            } else {
                setGifSrc("/animacion.gif");
            }
        };

        verificarTamañoPantalla();
        window.addEventListener("resize", verificarTamañoPantalla);

        return () => {
            window.removeEventListener("resize", verificarTamañoPantalla);
        };
    }, []);

    const abrirModal = (imagenes, index) => {
        setImagenesActuales(imagenes);
        setImagenIndex(index);
        setImagenExpandida(imagenes[index]);
    };

    const cerrarModal = () => {
        setImagenExpandida(null);
        setImagenIndex(0);
        setImagenesActuales([]);
    };

    const mostrarAnterior = () => {
        const nuevoIndex = (imagenIndex - 1 + imagenesActuales.length) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    const mostrarSiguiente = () => {
        const nuevoIndex = (imagenIndex + 1) % imagenesActuales.length;
        setImagenIndex(nuevoIndex);
        setImagenExpandida(imagenesActuales[nuevoIndex]);
    };

    const seleccionarColor = (productoId, colorCodigo) => {
        setColorSeleccionado((prev) => ({
            ...prev,
            [productoId]: colorCodigo,
        }));
    };

    const scrollCarrusel = (offset) => {
        if (carruselRef.current) {
            carruselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full flex flex-col items-center bg-white dark:bg-[#000000] transition-colors duration-300">
            {/* Sección de animación */}
            <div className="w-screen relative">
    <img
        src={gifSrc}
        alt="Animación de bienvenida"
        className="w-full h-auto object-cover object-center"
    />

                <div className="absolute inset-0 flex flex-col items-center justify-start text-center pt-12 px-4">
                    <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-white drop-shadow-lg">
                        M-A-C ICONOS COTIDIANOS
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-white font-Poppins drop-shadow-md max-w-2xl">
                        Eleva tu característico look de labios con nuestro nuevo set seleccionado con M-A-Lápiz labial y lápiz labial mate sedoso Cximal
                    </p>
                </div>
            </div>

            {/* Carrusel de productos */}
            <div className="w-full max-w-7xl px-4 mt-10 relative">
                <h2 className="text-2xl font-Playfair font-bold mb-6 text-center text-black dark:text-white">LO NUEVO</h2>

                {/* Botones de scroll */}
                <button
                    onClick={() => scrollCarrusel(-300)}
                    className="absolute left-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Scroll izquierdo"
                >
                    ‹
                </button>

                <button
                    onClick={() => scrollCarrusel(300)}
                    className="absolute right-0 top-[50%] transform -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-label="Scroll derecho"
                >
                    ›
                </button>

                {/* Contenedor del carrusel */}
                <div
                    ref={carruselRef}
                    className="flex gap-6 overflow-x-auto px-8 pb-4 scroll-smooth"
                >
                    {productos?.length > 0 && productos.map((producto) => (
                        <div
                            key={producto.id}
                            className="min-w-[280px] max-w-[280px] flex-shrink-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-700 rounded-lg p-4 hover:shadow-xl transition text-center"
                        >
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                swipeable
                                emulateTouch
                                className="rounded-md mb-2"
                            >
                                {producto.imagenes?.map((img, idx) => (
                                    <div key={idx}>
                                        <div
                                            onClick={() => abrirModal(producto.imagenes, idx)}
                                            className="cursor-pointer"
                                        >
                                            <img
                                                src={img}
                                                alt={`${producto.titulo} ${idx + 1}`}
                                                className="w-full object-contain object-center rounded-md max-h-52"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>

                            <h3 className="text-lg font-semibold mt-2 text-black dark:text-white">{producto.titulo}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{producto.subtitulo}</p>
                            <p className="text-blue-600 font-bold mt-1">₡{producto.precio.toFixed(2)}</p>

                            {producto.colores?.length > 0 && (
                                <div className="flex justify-center items-center gap-2 mt-3">
                                    {producto.colores.map((color, index) => {
                                        const isSelected = colorSeleccionado[producto.id] === color.codigo;
                                        return (
                                            <div
                                                key={index}
                                                title={color.color}
                                                onClick={() => seleccionarColor(producto.id, color.codigo)}
                                                className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform duration-200 ${isSelected
                                                    ? 'border-blue-600 ring-2 ring-blue-300 scale-110'
                                                    : 'border-gray-300 dark:border-gray-600'
                                                    }`}
                                                style={{ backgroundColor: color.codigo }}
                                            />
                                        );
                                    })}
                                </div>
                            )}

                            <div className="flex justify-end">
                                <Link
                                    to={`/producto/${producto.id}`}
                                    className="mt-4 inline-block text-sm text-blue-500 font-medium hover:underline"
                                >
                                    Ver detalle
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilo para animación opcional */}
            <style>
                {`
                    @keyframes scaleIn {
                        0% {
                            transform: scale(0.9);
                            opacity: 0;
                        }
                        100% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                    .animate-scale-in {
                        animation: scaleIn 0.25s ease-out;
                    }
                `}
            </style>
        </section>
    );
};

export default Inicio;
