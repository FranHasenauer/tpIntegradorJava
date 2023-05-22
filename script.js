var nom;
var ape;
var cant;
var cat;
var total;
var desc;

function descuento(desc) {
  if (document.getElementById("categoria").value == 1) {
    desc = 80 / 100;
  } else if (document.getElementById("categoria").value == 2) {
    desc = 50 / 100;
  } else if (document.getElementById("categoria").value == 3) {
    desc = 15 / 100;
  }
  return desc;
}

function resumen() {
  nom = document.getElementById("nombre").value;
  ape = document.getElementById("apellido").value;
  cant = document.getElementById("cantidad").value;
  total = 200 * cant - 200 * cant * descuento();
  if (nom != "" && ape != "" && cant > 0) {
    swal({
      icon: "success",
      title: `Gracias ` + nom + ` ` + ape,
      text: ` Te enviaremos un email con los datos de la transaccion `,
      button: "cerrar",
    });

    document.getElementById("totalPagar").innerHTML =
      `Total a pagar: $ ` +
      total +
      ` te ahorraste: ` +
      200 * cant * descuento();
  } else {
    swal(
      "Corrobore los datos por favor",
      "notamos un error en el formulario",
      "error"
    );
  }
}
function borrar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("totalPagar").innerHTML = `Total a pagar: $ `;
}
/*  */
