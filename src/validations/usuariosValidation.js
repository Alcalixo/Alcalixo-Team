const Joi = require("joi");

const usuarioSchema = Joi.object({
  id: Joi.number().integer().required(),
  usuario: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(8).required(),
  clase: Joi.string().valid("Administrador", "Cliente").required(),
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
});

module.exports = usuarioSchema;
