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
  document.getElementById("totalPagar").innerHTML =
    `Total a pagar: $ ` + total + ` te ahorraste: ` + 200 * cant * descuento();
  alert(nom + " " + ape + ` gracias por tu compra... `);
  alert(
    "te ahorraste: $" +
      200 * cant * descuento() +
      " el total a pagar es: $" +
      total
  );
}
function borrar() {
  document.getElementById("nombre").value = " ";
  document.getElementById("apellido").value = " ";
  document.getElementById("cantidad").value = " ";
  document.getElementById("email").value = " ";
}
