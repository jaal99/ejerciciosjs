// Importar express
const express = require("express");

// Crear un servidor express
const app = express();

// Inicializar el servidor en un puerto en especifico
app.listen(5500, () => {
    console.log("Servidor ejecutandose en el puerto 5500");
});

// Crear ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
    res.send("Hola");
});