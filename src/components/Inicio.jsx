import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productosData from '../../public/Data/productos.json';

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    const [imagenExpandida, setImagenExpandida] = useState(null);
    const [imagenesActuales, setImagenesActuales] = useState([]);
    const [imagenIndex, setImagenIndex] = useState(0);
    const [colorSeleccionado, setColorSeleccionado] = useState({});
    const [gifSrc, setGifSrc] = useState("/Fondo.png"); // 👈 Estado para el gif
    const carruselRef = useRef(null);

    useEffect(() => {
        setProductos(productosData);

        const verificarTamañoPantalla = () => {
            if (window.innerWidth <= 640) {
                setGifSrc("/img-mobile.png");
            } else {
                setGifSrc("/Fondo.png");
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
                    <h1 className="text-3xl sm:text-5xl font-Playfair font-extrabold text-black drop-shadow-lg">
                        M-A-C ICONOS COTIDIANOS
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-black font-Poppins drop-shadow-md max-w-2xl">
                        Eleva tu característico look de labios con nuestro nuevo set seleccionado con M-A-Lápiz labial y lápiz labial mate sedoso Cximal
                    </p>
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
