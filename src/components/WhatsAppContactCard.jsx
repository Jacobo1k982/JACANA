// components/WhatsAppContactCard.jsx
import React from 'react';
import { FaWhatsapp, FaCheckCircle, FaLock, FaPhotoVideo, FaGlobe, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppContactCard = () => {
    const phoneNumber = "50664541700";
    const message = encodeURIComponent(
        "Hola, estoy visitando la tienda JACANA y me gustaría saber más sobre sus productos. ¿Pueden ayudarme?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md mx-auto bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-green-100 dark:border-green-900/30 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Encabezado con logo y título */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center">
                <FaWhatsapp className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold">Chatea con nosotros</h3>
                <p className="text-green-100">+506 6454-1700</p>
            </div>

            {/* Características */}
            <div className="p-6 space-y-4">
                <FeatureItem icon={<FaLock />} text="Mensajes cifrados de extremo a extremo" />
                <FeatureItem icon={<FaGlobe />} text="Llama y chatea gratis alrededor del mundo" />
                <FeatureItem icon={<FaPhotoVideo />} text="Comparte fotos, videos y notas de voz" />
                <FeatureItem icon={<FaCheckCircle />} text="Mensajes leídos y estado en tiempo real" />
                <FeatureItem icon={<FaHeadset />} text="Soporte rápido y personalizado" />
            </div>

            {/* CTA */}
            <div className="bg-gray-50 dark:bg-gray-800 p-4 text-center border-t border-gray-100 dark:border-gray-700">
                <span className="text-green-600 dark:text-green-400 font-semibold">
                    ¡Habla ahora con un agente!
                </span>
            </div>
        </motion.a>
    );
};

// Componente reutilizable para cada característica
const FeatureItem = ({ icon, text }) => (
    <div className="flex items-center space-x-3 text-sm text-gray-700 dark:text-gray-300">
        <span className="text-green-500">{icon}</span>
        <span>{text}</span>
    </div>
);

export default WhatsAppContactCard;