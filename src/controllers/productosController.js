const productos = require('../models/productosModel');

//Obtener todos los productos
exports.getProductos = async (req, res) => {
  try {
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

//Crear un producto
exports.createProducto = async (req, res) => {
  try {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    console.log(`Producto creado con éxito: ${JSON.stringify(nuevoProducto)}`);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

//Obtener un Producto por ID
exports.findProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = productos.find(p => p.id === parseInt(id));
    if (!producto) return res.status(404).send('Producto no encontrado');
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

//Actualizar un producto por ID y body
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    let producto = productos.find(p => p.id === parseInt(id));
    if (!producto) return res.status(404).send('Producto no encontrado');
    producto = { ...producto, ...req.body };
    console.log(`Producto actualizado con éxito: ${JSON.stringify(producto)}`);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};

//Eliminar producto por ID
exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const index = productos.findIndex(p => p.id === parseInt(id));
    if (index === -1) return res.status(404).send('Producto no encontrado');
    const productoEliminado = productos.splice(index, 1)[0];
    console.log(`Producto eliminado con éxito: ${JSON.stringify(productoEliminado)}`);
    res.status(200).json({
      mensaje: 'Producto eliminado con éxito',
      producto: productoEliminado
    });
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
};
