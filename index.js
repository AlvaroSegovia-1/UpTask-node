const express = require("express");
const routes = require("./routes");
const path = require('path')

// crear una app de express
const app = express();

//Habilitar Pug
app.set("view engine", "pug");

// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

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
