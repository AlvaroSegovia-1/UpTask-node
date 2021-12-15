const Usuarios = require("../models/Usuarios");

exports.formCrearCuenta = (req, res) => {
  //res.send("funciona");
  res.render("crearCuenta", {
    nombrePagina: "Crear Cuenta en Uptask",
  });
};

exports.crearCuenta = async (req, res) => {
  //res.send("enviaste el Form");

  // leer los datos
  //console.log(req.body);

  // crear el usuario
  const { email, password } = req.body;

  try {
    await Usuarios.create({
      email,
      password,
    });
    res.redirect("/iniciar-sesion");
  } catch (error) {
      //console.log(error)
      res.render('crearCuenta', {
          error: error.errors,
          nombrePagina: 'Crear Cuenta en Uptask'
      })
  }
};
