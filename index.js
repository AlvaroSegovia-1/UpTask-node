const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");

// helpers con algunas funciones
const helpers = require("./helpers");

// Crear la conexion a la BD
const db = require("./config/db");

// Importar el modelo
// Crea la tabla respecto al modelo
require("./models/Proyectos");
require("./models/Tareas");
require("./models/Usuarios");

db.sync()
  .then(() => console.log("Conectado al Servidor"))
  .catch(error => console.log(error));

// Conectar a la base de datos
/* db.authenticate()
  .then(() => console.log("Conectado al Servidor"))
  .catch(error => console.log(error)); */

// crear una app de express
const app = express();

// habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Agregamos express validator a toda la aplicación
//app.use(expressValidator());

// Cargar los archivos estáticos
app.use(express.static("public"));

//Habilitar Pug
app.set("view engine", "pug");

// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

// agregar flash messages
app.use(flash());

// Pasar var dump a la aplicación
app.use((req, res, next) => {
  res.locals.year = 2021;
  res.locals.vardump = helpers.vardump;
  next();
});

app.use("/", routes());

/* const productos = [
    {
        producto: 'Libro',
        precio : 20
    }
]
// ruta para el home
app.use('/', (req, res) => {
    //res.send('hola')
    res.json(productos) 
    //res.render(<h1>Hola amigos</h1>) 
})
 */

// indicamos el puerto
app.listen(3500);

require("./handlers/email");
