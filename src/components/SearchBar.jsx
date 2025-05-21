import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

function SearchBar({ products, onClose, onFiltered }) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose && onClose();
            if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = products.filter(
            (p) =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        onFiltered && onFiltered(filtered);
        setSearchTerm("");
        onClose && onClose();
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-6"
        >
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar producto por modelo o nombre..."
                    aria-label="Buscar productos"
                    autoFocus
                    className="w-full p-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
                <button type="submit" className="hidden" aria-hidden="true"></button>

                {onClose && (
                    <XMarkIcon
                        onClick={onClose}
                        className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-500"
                    />
                )}
            </div>
        </motion.form>
    );
}

export default SearchBar;
