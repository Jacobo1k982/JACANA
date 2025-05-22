import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const brandLogos = [
    { name: "Lancôme", src: "/logos/lancome.webp" },
    { name: "Kérastase", src: "/logos/kerastase.webp" },
    { name: "L'Oréal Paris", src: "/logos/loreal.png" },
    { name: "MAC", src: "/logos/mac.webp" },
    { name: "CalvinKlein", src: "/logos/calvinklein.webp" },
    { name: "Clinique", src: "/logos/clinique.webp" },
];

const BrandCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (!current) return;
        const scrollAmount = current.offsetWidth / 2;
        current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const interval = setInterval(() => scroll("right"), 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-background text-foreground py-10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 relative">

                {/* Título animado */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-2xl font-semibold text-center mb-12 relative"
                >
                    Marcas Destacadas
                    <span className="block w-24 h-1 bg-pink-500 mx-auto mt-2 rounded-full"></span>
                </motion.h2>

                {/* Botón izquierdo */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-card text-foreground shadow p-2 rounded-full z-10 hover:bg-muted transition-colors"
                >
                    ◀
                </button>

                {/* Carrusel de marcas */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide gap-6 px-10 scroll-smooth"
                >
                    {brandLogos.map((brand, index) => (
                        <div
                            key={index}
                            className="h-14 sm:h-16 md:h-20 lg:h-24 w-28 sm:w-32 md:w-36 lg:w-40 flex items-center justify-center flex-shrink-0 bg-transparent"
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

                {/* Botón derecho */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-card text-foreground shadow p-2 rounded-full z-10 hover:bg-muted transition-colors"
                >
                    ▶
                </button>
            </div>
        </section>
    );
};

export default BrandCarousel;
