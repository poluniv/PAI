
// Exercici 3.1: Parell o imparell

// function parellsenar(nombre) {
//   let resultat = " ";
//   if (nombre % 2 === 0) {
//     resultat= "El nombre és parell";
//   } else {
//     resultat = "El nombre és senar";
//   }
//   return resultat;
// }

// Exercici 3.2:
// function sumatori(n){
//   let suma = 0;
//   for (let i = 1; i <= n; i++) {
//     suma += 1 / (i * i);
//   }
//   return suma;
// }

// Exercici 3.3:
// function sumatori(n) {
//   let suma = 0;
//   for (let i = 1; i <= n; i++) {
//     suma += 1 / (i * i);
//   }
//   return suma;
// }

// Exercici 3.4:
// function notafinal(notaactivitats, notapractiques, notaexamen) {
//   let notaFi = 0,
//     notafilletra = "";
//   if (notaactivitats <= 5) {
//     notaFi = 0.2 * notaactivitats + 0.4 * notapractiques + 0.4 * notaexamen;
//   } else {
//     notafinal = 0.4 * notapractiques + 0.6 * notaexamen;
//   }
//   if (notaFi < 5) {
//     notafilletra = "D";
//   } else if (notaFi < 6.5) {
//     // La nota no és més petita que 5 (estem al else) i és més petita que 6.5
//     notafilletra = "C";
//   } else if (notaFi < 8) {
//     notafilletra = "B";
//   } else if (notaFi < 10) {
//     notafilletra = "A";
//   } else {
//     notafilletra = "MH";
//   }
//   return notafilletra;
// }