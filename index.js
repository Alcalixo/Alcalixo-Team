const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola Mundo! Soy Alcalixo, y este es mi proyecto");
});
server.listen(3000, "localhost", () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

const axios = require("axios");
const { error } = require("console");
axios
  .get("http://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error en la solicitud", error);
  });
