const express = require('express');
const cors = require('cors');
const session = require('express-session');

// Configurar el puerto
const PORT = 3000;

// Crear una nueva aplicación de Express
const app = express();

// Habilitar CORS
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

// Middleware para analizar JSON
app.use(express.json());

// Configuración de la sesión
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Usa 'true' si tu aplicación está en HTTPS
}));

// Endpoint POST en /api/login para manejar el inicio de sesión
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'andrea17.99@gmail.com' && password === '22-09-21') {
        // Crear una variable de sesión
        req.session.user = { email: email };
        res.json({ success: true, message: 'Inicio de sesión exitoso.' });
    } else {
        res.json({ success: false, message: 'Correo electrónico o contraseña incorrectos.' });
    }
});

// Endpoint GET para verificar si la sesión existe
app.get('/api/session', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
