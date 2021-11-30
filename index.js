const express = require("express");
const routes = require("./routes");

// crear una app de express
const app = express();

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
