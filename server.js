const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Crear un flujo de escritura
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Configurar Morgan para usar el flujo de escritura
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());

const rutasProductos = require('./src/routes/productosRouter');
app.use('/', rutasProductos);

const rutasUsuarios = require('./src/routes/usuariosRouter');
app.use('/', rutasUsuarios);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
