const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const filePath = path.join(__dirname, 'users.txt');

// Endpoint para guardar usuarios
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }

  const userData = `${email}:${password}\n`;

  fs.appendFile(filePath, userData, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error al guardar el usuario' });
    }
    res.status(200).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Endpoint para autenticar usuarios
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer el archivo de usuarios' });
    }

    const users = data.split('\n').filter(line => line).map(line => {
      const [storedEmail, storedPassword] = line.split(':');
      return { email: storedEmail, password: storedPassword };
    });

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
