const express = require("express");
const router = express.Router();

module.exports = function () {

    const productos = [
        {
          producto: "Libro",
          precio: 20,
        },
      ];
      // ruta para el home
      router.get("/", (req, res) => {
        res.send("Hola Index");
        //res.json(productos);
        //res.render(<h1>Hola amigos</h1>)
      });
      
      router.get("/nosotros", (req, res) => {
        res.send("Hola nosotros");
      });

      return router;
};


