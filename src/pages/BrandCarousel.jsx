import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const brandLogos = [
    { name: "Lancôme", src: "/logos/lancome.webp" },
    { name: "Kérastase", src: "/logos/kerastase.webp" },
    { name: "L'Oréal Paris", src: "/logos/loreal.webp" },
    { name: "MAC", src: "/logos/mac.webp" },
    { name: "CalvinKlein", src: "/logos/calvinklein.webp" },
];

const BrandCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;
        const scrollAmount = current.offsetWidth / 2;
        current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    };

    useEffect(() => {
        const interval = setInterval(() => scroll("right"), 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 relative">

                {/* Título con animación elegante */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl font-semibold text-center mb-8 text-gray-800 relative"
                >
                    Nuestras Marcas Destacadas
                    <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></span>
                </motion.h2>

                {/* Botón izquierdo */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
                >
                    ◀
                </button>

                {/* Carrusel de marcas */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide gap-6 px-10 scroll-smooth"
                >
                    {brandLogos.map((brand, index) => (
                        <img
                            key={index}
                            src={brand.src}
                            alt={brand.name}
                            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-105"
                        />
                    ))}
                </div>

                {/* Botón derecho */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
                >
                    ▶
                </button>
            </div>
        </section>
    );
};

export default BrandCarousel;
