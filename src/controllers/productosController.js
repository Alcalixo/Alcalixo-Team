const productos = require('../models/productosModel');

exports.obtenerProductos = (req, res) => {
  res.json(productos);
};

exports.crearProducto = (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  console.log(`Producto creado con éxito: ${JSON.stringify(nuevoProducto)}`);
  res.status(201).json(nuevoProducto);
};

exports.obtenerProductoPorId = (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');
  res.json(producto);
};

exports.actualizarProducto = (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');
  Object.assign(producto, req.body);
  console.log(`Producto actualizado con éxito: ${JSON.stringify(producto)}`);
  res.json(producto);
};

exports.eliminarProducto = (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Producto no encontrado');
  productos.splice(index, 1);
  console.log(`Producto eliminado con éxito: ${JSON.stringify(productoEliminado)}`);
  res.status(204).send();
};
