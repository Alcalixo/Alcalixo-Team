const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.json());

const rutasProductos = require('./src/routes/productosRouter');
app.use('/', rutasProductos);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
