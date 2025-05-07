import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import React from "react";

export default function Contacto() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nombre = formData.get("nombre");
        const correo = formData.get("correo");
        const mensaje = formData.get("mensaje");

        try {
            const res = await fetch("http://localhost:4000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, correo, mensaje }),
            });

            const data = await res.json();
            if (data.success) {
                alert("¡Mensaje enviado correctamente!");
                e.target.reset();
            } else {
                alert("Error: " + data.error);
            }
        } catch (err) {
            alert("Ocurrió un error al enviar el mensaje.");
            console.error(err);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4"
        >
            <Card className="w-full max-w-lg shadow-2xl rounded-2xl">
                <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                        Contáctanos
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        ¿Tienes alguna pregunta o comentario? ¡Escríbenos!
                    </p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nombre
                            </label>
                            <Input type="text" name="nombre" placeholder="Tu nombre completo" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Correo electrónico
                            </label>
                            <Input type="email" name="correo" placeholder="tuemail@ejemplo.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Mensaje
                            </label>
                            <Textarea name="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 rounded-xl transition-all duration-300"
                        >
                            Enviar mensaje
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
