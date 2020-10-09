// Importar express
const express = require("express");
// Importar handlebars como template engine
const exphbs = require("express-handlebars");
// Importar body parser que nos permite acceder al cuerpo de la petición HTTP
const bodyParser = require("body-parser");

// Importar la función de cálculo de método francés
const { calcularMetodoFrances } = require("./calculoMetodoFrances");
const { Ejercicio01 } = require("./Ejercicio01");
const { Ejercicio02 } = require("./Ejercicio02");
const { Ejercicio03 } = require("./Ejercicio03");
const { Ejercicio04 } = require("./Ejercicio04");
const { Ejercicio05 } = require("./Ejercicio05");
const { Ejercicio06 } = require("./Ejercicio06");
const { Ejercicio07 } = require("./Ejercicio07");

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parse para leer los datos del cuerpo de peticiones POST
app.use(bodyParser.urlencoded({ extended: true }));

// Crear una ruta para /
// Información sobre los verbos HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

//amortizacion
app.get("/", (req, res, next) => {
    res.render("formulario_prestamo");
  });

//01
app.get("/Ejercicio01", (req, res, next) => {
res.render("Ejercicio01");
});

//02
app.get("/Ejercicio02", (req, res, next) => {
res.render("Ejercicio02");
});

//03
app.get("/Ejercicio03", (req, res, next) => {
    res.render("Ejercicio03");
    });

//04
app.get("/Ejercicio04", (req, res, next) => {
    res.render("Ejercicio04");
    });

//05
app.get("/Ejercicio05", (req, res, next) => {
    res.render("Ejercicio05");
    });

//06
app.get("/Ejercicio06", (req, res, next) => {
    res.render("Ejercicio06");
    });

//07
app.get("/Ejercicio07", (req, res, next) => {
    res.render("Ejercicio07");
    });

app.post("/prestamo", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { monto, tasaInteres, periodo } = req.body;

  const cuotas = calcularMetodoFrances(monto, tasaInteres, periodo);

  res.render("resultado_prestamo", { cuotas });
});

//01
app.post("/dividirnumero", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { dividir } = req.body;

   Ejercicio01(dividir);

  res.send("Peticion aceptada");
});

//02
app.post("/Ejercicio02", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { numeroSuma } = req.body;

   Ejercicio02(numeroSuma);

  res.send("Peticion aceptada");
});

//03
app.post("/Ejercicio03", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { retornarNumero1, retornarNumero2 } = req.body;
  
     Ejercicio03(retornarNumero1, retornarNumero2);
  
    res.send("Peticion aceptada");
  });

  //04
app.post("/Ejercicio04", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { numeroAConvertir } = req.body;
  
     Ejercicio04(numeroAConvertir);
  
    res.send("Peticion aceptada");
  });
  
 //05
 app.post("/Ejercicio05", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { encontrarNumero } = req.body;
  
     Ejercicio05(encontrarNumero);
  
    res.send("Peticion aceptada");
  });

//06
 app.post("/Ejercicio06", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { letrasMinusculas } = req.body;
  
     Ejercicio06(letrasMinusculas);
  
    res.send("Peticion aceptada");
  });

//07
app.post("/Ejercicio07", (req, res, next) => {
    // Asignación por destructuring
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { casas } = req.body;
  
     Ejercicio07(casas);
  
    res.send("Peticion aceptada");
  });

// Inicializar el servidor en un puerto en específico
app.listen(5500, () => {
  console.log("Servidor ejecutándose en el puerto 5500");
});