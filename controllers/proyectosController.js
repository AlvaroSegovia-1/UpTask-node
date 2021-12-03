const Proyectos = require("../models/Proyectos");

exports.proyectosHome = (req, res) => {
  //res.send("Hola Index");
  res.render("index", {
    nombrePagina: "Proyectos",
  });
};

exports.formularioProyecto = (req, res) => {
  //res.send("Hola Index");
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
  });
};

exports.nuevoProyecto = (req, res) => {
  // Enviar a la consola lo que el usuario escriba
  console.log(req.body);

  // validar que tengamos algo en el input
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un Nombre al Proyecto" });
  }

  // si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
    });
  } else {
    // No hay errores
    // Insertar en la
    Proyectos.create({ nombre })
      .then(() => console.log("Insertado correctamente"))
      .catch(error => console.log(error));
  }

  //res.send("enviaste el Formulario");
};

/* exports.nosotros = (req, res) => {
    res.send("Hola nosotros");
  } */
