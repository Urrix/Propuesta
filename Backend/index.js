const express = require('express');
const cors = require('cors');

// Configurar el puerto a 4000
const PORT = 3000;

// Crear una nueva aplicación de Express
const app = express();

// Habilitar CORS
app.use(cors());

// Middleware para analizar JSON
app.use(express.json());

// Endpoint GET en /api/data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
