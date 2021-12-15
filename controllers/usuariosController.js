const Usuarios = require("../models/Usuarios");

exports.formCrearCuenta = (req, res) => {
  //res.send("funciona");
  res.render("crearCuenta", {
    nombrePagina: "Crear Cuenta en Uptask",
  });
};

exports.crearCuenta = (req, res) => {
  //res.send("enviaste el Form");

  // leer los datos
  //console.log(req.body);
  const { email, password } = req.body;
  // crear el usuario
  Usuarios.create({
    email,
    password,
  }).then(() => {
    res.redirect("/iniciar-sesion");
  });
};
