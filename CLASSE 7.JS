
// Exercici 3.1: Parell o imparell

function parellOImparell(numero) {
  if (numero % 2 == 0) {
    return "És parell";
  } else {
    return "És imparell";
  }
}

let n = parseInt(prompt("Introdueix un nombre:"));
alert(parellOImparell(n));

