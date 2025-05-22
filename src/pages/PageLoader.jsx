// src/components/PageLoader.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import logo from '/CapaLight.png';

const loaderVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
};

const PageLoader = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray via-white to-white"
                variants={loaderVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="w-32 h-22 mb-6 drop-shadow-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                    <Loader2 className="w-12 h-12 text-cyan-600 animate-spin drop-shadow" />
                </motion.div>
                <p className="mt-4 text-cyan-700 font-semibold text-sm tracking-wide">Cargando...</p>
            </motion.div>
        </AnimatePresence>
    );
};

export default PageLoader;
