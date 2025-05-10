import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import ParticlesBackground from "@/pages/ParticlesBackground"; // 👈 Fondo animado

export default function Contacto() {
    const [estado, setEstado] = useState({ mensaje: "", error: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstado({ mensaje: "", error: false });

        const formData = new FormData(e.target);
        const nombre = formData.get("nombre");
        const correo = formData.get("correo");
        const mensaje = formData.get("mensaje");

        try {
            const res = await fetch("http://localhost:4000/contactos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, correo, mensaje }),
            });

            if (!res.ok) throw new Error("Fallo al enviar");

            e.target.reset();
            setEstado({ mensaje: "¡Mensaje enviado correctamente!", error: false });
        } catch (err) {
            console.error(err);
            setEstado({ mensaje: "Error al enviar el mensaje.", error: true });
        }
    };

    return (
        <>
            <ParticlesBackground />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-center justify-center min-h-screen relative z-10 p-4"
            >
                <Card className="w-full max-w-xl backdrop-blur-lg border border-purple-500/20 bg-white/5 rounded-3xl shadow-[0_0_20px_rgba(173,85,255,0.2)]">
                    <CardContent className="p-8">
                        <h2 className="text-4xl font-extrabold mb-4 text-center text-white drop-shadow-lg tracking-wide">
                            🚀 Contáctanos
                        </h2>
                        <p className="text-purple-300 text-center mb-8 text-sm">
                            ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!
                        </p>

                        {estado.mensaje && (
                            <div
                                className={`text-center mb-4 text-sm font-semibold ${estado.error ? "text-red-400" : "text-green-400"
                                    }`}
                            >
                                {estado.mensaje}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-purple-200 mb-1">
                                    Nombre
                                </label>
                                <Input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Tu nombre completo"
                                    required
                                    className="bg-transparent border border-purple-500 focus:ring-2 focus:ring-purple-500/70 text-white placeholder-purple-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="correo" className="block text-sm font-medium text-purple-200 mb-1">
                                    Correo electrónico
                                </label>
                                <Input
                                    id="correo"
                                    name="correo"
                                    type="email"
                                    placeholder="tuemail@ejemplo.com"
                                    required
                                    className="bg-transparent border border-purple-500 focus:ring-2 focus:ring-purple-500/70 text-white placeholder-purple-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="mensaje" className="block text-sm font-medium text-purple-200 mb-1">
                                    Mensaje
                                </label>
                                <Textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows="4"
                                    placeholder="Escribe tu mensaje aquí..."
                                    required
                                    className="bg-transparent border border-purple-500 focus:ring-2 focus:ring-purple-500/70 text-white placeholder-purple-400"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-2 rounded-xl shadow-lg shadow-purple-500/30 transition-all duration-300"
                            >
                                Enviar mensaje
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}
