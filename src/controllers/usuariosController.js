const Joi = require('joi');
const usuarios = require("../models/usuariosModel");
const usuarioSchema = require("../validations/usuariosValidation");

//Obtener todos los Usuarios
exports.getUsuarios = async (req, res) => {
  try {
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};

//Crear un Usuario
exports.createUsuario = async (req, res) => {
  try {
    const { error } = usuarioSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario);
    console.log(`Usuario creado con éxito: ${JSON.stringify(nuevoUsuario)}`);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error en createUsuario:', error);  // Log error details
    res.status(500).send("Error en el servidor");
  }
};

//Obtener un Usuario por ID
exports.findUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = usuarios.find((p) => p.id === parseInt(id));
    if (!usuario) return res.status(404).send("Usuario no encontrado");
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};

//Actualizar un Usuario por ID y body
exports.updateUsuario = async (req, res) => {
  try {
    const { error } = usuarioSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { id } = req.params;
    let usuarioIndex = usuarios.findIndex((p) => p.id === parseInt(id));
    if (usuarioIndex === -1)
      return res.status(404).send("Usuario no encontrado");

    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...req.body };
    console.log(
      `Usuario actualizado con éxito: ${JSON.stringify(usuarios[usuarioIndex])}`
    );
    res.status(200).json(usuarios[usuarioIndex]);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};

//Eliminar Usuario por ID
exports.deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const index = usuarios.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return res.status(404).send("Usuario no encontrado");
    const usuarioEliminado = usuarios.splice(index, 1)[0];
    console.log(
      `Usuario eliminado con éxito: ${JSON.stringify(usuarioEliminado)}`
    );
    res.status(200).json({
      mensaje: "Usuario eliminado con éxito",
      usuario: usuarioEliminado,
    });
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
};
