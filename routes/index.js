const express = require("express");
const router = express.Router();

// importar express validator;  puede ser body, cookies, headers, params, query
const { body } = require("express-validator/check");

// importar el controlador
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  // ruta para el home
  router.get("/", proyectosController.proyectosHome);
  router.get("/nuevo-proyecto", proyectosController.formularioProyecto);
  router.post("/nuevo-proyecto", 
  body('nombre').not().isEmpty().trim().escape(),
  proyectosController.nuevoProyecto);
  /* router.get("/nosotros", (req, res)=>{
      res.render('nosotros')
  }); */

  return router;
};
