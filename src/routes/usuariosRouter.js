const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");

// Rutas para productos
router.get("/usuarios", usuariosController.getUsuarios);
router.post("/usuarios", usuariosController.createUsuario);
router.get("/usuarios/:id", usuariosController.findUsuarioById);
router.put("/usuarios/:id", usuariosController.updateUsuario);
router.delete("/usuarios/:id", usuariosController.deleteUsuario);

module.exports = router;
