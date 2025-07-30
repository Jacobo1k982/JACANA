import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SearchBar({ products = [], onClose, onFiltered }) {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);

    // Enfocar al montar
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Manejo de teclas
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = products.filter(
            (p) =>
                p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.model?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Solo filtrar y cerrar si hay resultados o si se permite
        if (onFiltered) {
            onFiltered(filtered);
        }

        // Opcional: no cerrar si quieres mostrar resultados vacíos
        onClose?.();
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 px-6"
            role="search"
        >
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Buscar producto por modelo o nombre..."
                    aria-label="Buscar productos"
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 pr-10
                               dark:border-gray-600 dark:bg-gray-800 dark:text-white text-black
                               focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />

                {/* Botón de envío oculto para soporte de Enter */}
                <button type="submit" className="absolute -left-20 -top-20 opacity-0" aria-hidden="true">
                    Buscar
                </button>

                {/* Icono de cerrar */}
                {onClose && (
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar barra de búsqueda"
                        className="absolute right-3 top-1/2 w-5 h-5 -translate-y-1/2 transform
                                   text-gray-500 hover:text-red-500 focus:text-red-600
                                   focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full"
                    >
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
        </motion.form>
    );
}

export default SearchBar;