const productos = require('../models/productosModel');

//Obtener todos los productos
exports.obtenerProductos = (req, res) => {
  res.json(productos);
};

//Crear un producto
exports.crearProducto = (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  console.log(`Producto creado con éxito: ${JSON.stringify(nuevoProducto)}`);
  res.status(201).json({
    mensaje: 'Producto creado con éxito',
    producto: nuevoProducto
  });
};

//Obtener un Producto por ID
exports.obtenerProductoPorId = (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');
  res.json(producto);
};

//Actualizar un producto por ID y body
exports.actualizarProducto = (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).send('Producto no encontrado');
  Object.assign(producto, req.body);
  console.log(`Producto actualizado con éxito: ${JSON.stringify(producto)}`);
  res.json({
    mensaje: 'Producto actualizado con éxito',
    producto: producto
  });
};

//Eliminar producto por ID
exports.eliminarProducto = (req, res) => {
  const index = productos.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Producto no encontrado');
  const productoEliminado = productos.splice(index, 1)[0];
  console.log(`Producto eliminado con éxito: ${JSON.stringify(productoEliminado)}`);
  res.status(200).json({
    mensaje: 'Producto eliminado con éxito',
    producto: productoEliminado
  });
};
