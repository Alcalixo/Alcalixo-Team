const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta principal
router.get('/', (req, res) => {
  res.send('Bienvenido a mi tienda online de electrónica');
});

// Rutas para productos
router.get('/productos', productosController.obtenerProductos);
router.post('/productos', productosController.crearProducto);
router.get('/productos/:id', productosController.obtenerProductoPorId);
router.put('/productos/:id', productosController.actualizarProducto);
router.delete('/productos/:id', productosController.eliminarProducto);

module.exports = router;
