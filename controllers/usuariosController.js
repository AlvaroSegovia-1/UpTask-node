exports.formCrearCuenta = (req, res) => {
  //res.send("funciona");
  res.render("crearCuenta", {
    nombrePagina: "Crear Cuenta en Uptask",
  });
};
