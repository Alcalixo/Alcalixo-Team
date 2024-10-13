const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

// Ruta principal
router.get("/", (req, res) => {
  res.send("Bienvenido a mi tienda online de electrónica");
});

// Rutas para productos
router.get("/productos", productosController.getProductos);
router.post("/productos", productosController.createProducto);
router.get("/productos/:id", productosController.findProductoById);
router.put("/productos/:id", productosController.updateProducto);
router.delete("/productos/:id", productosController.deleteProducto);

module.exports = router;
