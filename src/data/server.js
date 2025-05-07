const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

let mensajes = []; // Almacenamiento en memoria

app.post('/api/contact', (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    const nuevoMensaje = {
        id: mensajes.length + 1,
        nombre,
        correo,
        mensaje,
        fecha: new Date().toISOString(),
    };

    mensajes.push(nuevoMensaje);

    // (Opcional) Guardar en un archivo JSON
    fs.writeFileSync('mensajes.json', JSON.stringify(mensajes, null, 2));

    console.log('Nuevo mensaje recibido:', nuevoMensaje);
    res.json({ success: true, message: 'Mensaje enviado correctamente.' });
});

// (Opcional) Obtener mensajes guardados
app.get('/api/contact', (req, res) => {
    res.json(mensajes);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
