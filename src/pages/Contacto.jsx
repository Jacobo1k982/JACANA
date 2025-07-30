// components/ContactoModern.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const ContactoModern = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });
    const [estado, setEstado] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstado("enviando");

        try {
            const res = await fetch("http://localhost:4000/contactos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Error al enviar");

            setEstado("éxito");
            setFormData({ nombre: "", correo: "", mensaje: "" });
        } catch (err) {
            setEstado("error");
        }
    };

    // Mensaje predefinido para WhatsApp
    const mensajeWsp = encodeURIComponent(
        "Hola, estoy visitando la tienda JACANA y me gustaría saber más sobre sus productos. ¿Pueden ayudarme?"
    );
    const numeroWsp = "50664541700";

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-800 dark:text-gray-100 overflow-hidden">
            {/* Fondo decorativo sutil */}
            <div
                className="absolute inset-0 opacity-5 dark:opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(173, 85, 255, 0.1) 0%, transparent 50%)`,
                }}
            />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                                ¿Tienes dudas?
                            </h1>
                            <p className="text-lg mt-3 text-gray-600 dark:text-gray-300">
                                Estamos aquí para ayudarte con tu compra, envíos, devoluciones o cualquier consulta.
                            </p>
                        </div>

                        {/* Contacto rápido */}
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 dark:border-gray-700"
                            >
                                <div className="p-3 bg-green-100 dark:bg-green-900/40 rounded-full text-green-600 dark:text-green-400">
                                    <FaWhatsapp className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">WhatsApp</h3>
                                    <a
                                        href={`https://wa.me/${numeroWsp}?text=${mensajeWsp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 dark:text-green-400 hover:underline text-sm"
                                    >
                                        +506 6454-1700
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 dark:border-gray-700"
                            >
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-400">
                                    <FaEnvelope className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Correo</h3>
                                    <a
                                        href="mailto:info@jacana.fun"
                                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                    >
                                        info@jacana.fun
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 dark:border-gray-700"
                            >
                                <div className="p-3 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400">
                                    <FaMapMarkerAlt className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Ubicación</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Costa Rica</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Botón grande de WhatsApp */}
                        <motion.a
                            href={`https://wa.me/${numeroWsp}?text=${mensajeWsp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center"
                        >
                            <FaWhatsapp className="w-6 h-6" />
                            Habla con nosotros ahora
                        </motion.a>
                    </motion.div>

                    {/* Formulario */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700 space-y-6"
                    >
                        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                            Envíanos un mensaje
                        </h2>

                        {estado === "éxito" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-green-600 dark:text-green-400 text-center font-medium"
                            >
                                ✅ ¡Gracias! Te responderemos pronto.
                            </motion.div>
                        )}

                        {estado === "error" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-center font-medium"
                            >
                                ❌ Error al enviar. Intenta más tarde.
                            </motion.div>
                        )}

                        {estado === "enviando" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2"
                            >
                                <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                                Enviando...
                            </motion.div>
                        )}

                        {estado === "" && (
                            <>
                                <div>
                                    <Input
                                        name="nombre"
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div>
                                    <Input
                                        name="correo"
                                        type="email"
                                        placeholder="Tu correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div>
                                    <Textarea
                                        name="mensaje"
                                        placeholder="Tu mensaje..."
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full bg-transparent border border-gray-300 dark:border-gray-600 rounded-xl py-3 px-4 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={estado === "enviando"}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300"
                                >
                                    {estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                            </>
                        )}
                    </motion.form>
                </motion.div>
            </div>

            {/* Botón flotante de WhatsApp (opcional, puedes dejar solo el de arriba) */}
            <motion.a
                href={`https://wa.me/${numeroWsp}?text=${mensajeWsp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center animate-bounce"
                aria-label="Contacto por WhatsApp"
            >
                <FaWhatsapp size={24} />
            </motion.a>
        </section>
    );
};

export default ContactoModern;