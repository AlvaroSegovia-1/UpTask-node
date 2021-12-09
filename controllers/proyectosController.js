const Proyectos = require("../models/Proyectos");

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  //res.send("Hola Index");
  res.render("index", {
    nombrePagina: "Proyectos " + res.locals.year,
    proyectos,
  });
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();

  //res.send("Hola Index");
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
    proyectos,
  });
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
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
      proyectos,
    });
  } else {
    // No hay errores
    // Insertar en la BD.

    // Con Async Await

    // Añadir slug
    /*  const url = slug(nombre).toLowerCase();
    const proyecto = await Proyectos.create({ nombre, url }); */

    await Proyectos.create({ nombre });
    res.redirect("/");
    // Con promesas
    /* Proyectos.create({ nombre })
      .then(() => console.log("Insertado correctamente"))
      .catch(error => console.log(error)); */
  }

  //res.send("enviaste el Formulario");
};

/* exports.nosotros = (req, res) => {
    res.send("Hola nosotros");
  } */

exports.proyectoPorUrl = async (req, res, next) => {
  const proyectosPromise = Proyectos.findAll();

  const proyectoPromise = Proyectos.findOne({
    where: {
      url: req.params.url,
    },
  });

  const [proyectos, proyecto] = await Promise.all([
    proyectosPromise,
    proyectoPromise,
  ]);
  if (!proyecto) return next();
  // render a la vista
  res.render("tareas", {
    nombrePagina: "Tareas del Proyecto",
    proyecto,
    proyectos,
  });
};

exports.formularioEditar = async (req, res) => {
  const proyectosPromise = Proyectos.findAll();

  const proyectoPromise = Proyectos.findOne({
    where: {
      id: req.params.id,
    },
  });

  const [proyectos, proyecto] = await Promise.all([
    proyectosPromise,
    proyectoPromise,
  ]);

  // render a la vista
  res.render("nuevoProyecto", {
    nombrePagina: "Editar Proyecto",
    proyectos,
    proyecto,
  });
};

exports.actualizarProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
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
      proyectos,
    });
  } else {
    await Proyectos.update(
      { nombre: nombre },
      { where: { id: req.params.id } },
    );
    res.redirect("/");
  }
};

exports.eliminarProyecto = async (req, res, next) => {
  // req, query o params
  /* console.log(req.query); */
  const { urlProyecto } = req.query;
  const resultado = await Proyectos.destroy({
    where: { url: urlProyecto },
  });
  if (!resultado) {
    return next();
  }
  res.status(200).send("Proyecto Eliminado");
};
