// // ecercici 1.
//  let numero = parseInt(prompt("Introdueix un número: "));

//  if(numero<0) {
//     console.log("El número és negatiu");
//  }

// EXERCICI 2: 
// 13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el
// número llegit és parell” si el número es parell.

// let numero= Number(prompt("Introdueix un valor: "));

// if(numero%2==0) {
//     console.log("El numero es parell");
// }

// EXERCICI 3:
// // 13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit
// és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if
// per cada cas.

// let numero = parseInt(prompt("Introdueix un valor: "));

// if(numero%2==0) {
//     console.log("El numero es parell");
// } else {
//     console.log("El numero es senar");
// }

// EXERCICI 4:
// // 13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola
// el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més
// gran que el segon i l’altre per comprovar si el segon número és més gran que el primer.

// let numero = parseInt(prompt("Introdueix un valor: "));
// let numero2 = parseInt(prompt("Introdueix un segon valor: "));

// if(numero>numero2){
//     console.log("El primer valor es més gran que el segon valor.");
// }else{
//     console.log("El segon valor és més gran que el primer vaor.");
// }

// EXERCICI 5:
// Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola 
// el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels 
// números és el més gran.  

// let nume1= parseInt(prompt("Introdueix un primer valor: "));
// let nume2 = parseInt(prompt("Introdueix un segon valor: "));
// let nume3 = parseInt(prompt("Introdueix un tercer valor: "));
// if (nume1>nume2 && nume1>nume3){
//     console.log("El primer valor es mes gran que els altres dos");
// }if (nume2> nume1 && nume2> nume3 ){
//     console.log("El segon valor és mes gran que els altres dos");
// }if (nume3> nume1 && nume3>nume2){
//     console.log("el tercer valor és me sgran que els altres dos");
// }
// EXERCICI 6:
// Fent servir només if, escriure un programa que donat amb prompt un número de mes, 
// entre 1 i 12, escrigui per pantalla el nom del mes que correspon.  
// let mes = parseInt(prompt("Introdueix un numero de mes: "));
// if(mes=== 1){
//     console.log("Gener");
// } if(mes===2){
//     console.log("Febrer");
// }if(mes===3){
//     console.log("Març");
// }if(mes=== 4){
//     console.log("Abril");
// }
// EXERCICI 7:
// Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el 
// número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el 
// número llegit és positiu” en cas contrari.  

// let numero=parseInt(prompt("Introdueix un valor: "));
// if (numero<0){
//     console.log("El valor es negatiu");
// }else{
//     console.log("El valor es possitiu");
// }
// EXERCICI 8:
// Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el 
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

// let num = parseInt(prompt("Introdueix un valor"));
// if(num%=0){
//     console.log("El valor es parell");
// }else{
//     console.log("El numero es senar");
// }

// EXERCICI 9:
// Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola 
// quin és el més gran. Només pots fer servir una instrucció if-else. 
// let nume1 = parseInt(prompt("Introdueix un primer valor: "));
// let nume2 = parseInt(prompt("Introdueix un segon valor: "));
// if ( nume1> nume2){
//     console.log("El primer valor es major que el segon");
// }else{
//     console.log("El segon valor és major");
// }

// EXERCICI 10:
// Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola 
// quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, 
// comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el 
// tercer. 
// let nume1= parseInt(prompt("Introdueix un primer valor: "));
// let nume2 = parseInt(prompt("Introdueix un segon valor: "));
// let nume3 = parseInt(prompt("Introdueix un tercer valor: "));
// if ( nume1> nume2 && nume1> nume3){
//     console.log("El primer valor es major que els altres dos");
// }else if(nume2>nume1 && nume2>nume3){
//     console.log("El segon valor és mes gran");
// }else{
//     console.log("el tercer valor es major");
// }
// EXERCICI 11:
// Escriu un programa que, donats tres números llegits amb prompt, escrigui a la 
// consola els tres números ordenats.  
// let nume1= parseInt(prompt("Introdueix el primer número:"));
// let nume2= parseInt(prompt("Introdueix el segon número:"));
// let nume3= parseInt(prompt("Introdueix el tercer número:"));

// if (nume1 <= nume2 && nume2 <= nume3){
//     console.log(nume1, nume2, nume3);
// } 
// else if (nume1 <= nume3 && num3 <= nume2){
//     console.log(n1, n3, n2);
// } 
// else if (nume2 <= nume1 && nume1 <= nume3){
//     console.log(nume2, nume1, nume3);
// } 
// else if (nume2 <= nume3 && nume3 <= nume1){
//     console.log(nume2, nume3, nume1);
// } 
// else if (nume3 <= nume1 && nume1 <= nume2){
//     console.log(nume3, nume1, nume2);
// } 
// else {
//     console.log(nume3, nume2, nume1);
// }
// EXERCICI 12:
// En un control d’alcoholèmia necessiten un programa que els hi digui si una persona 
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el 
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir 
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25 
// let carnet = prompt("Te carnet de condueir? ");
// let valor = parseInt(prompt("Introdueix el valor del test: "));
// if( carnet === "si" && valor < 0,25){
//     console.log("El conductor pot continuar conduint");
// }else{
//     console.log("El conductor no pot continuar conduint");
// }
// EXERCICI 13: 
// Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola 
// el resultat de restar al nombre més gran el nombre més petit. 
// let nume1= parseInt(prompt("Introdueix un valor: "));
// let nume2 = parseInt(prompt("Introdueix un segon valor: "));
// if (nume1>nume2){
//     console.log(nume1-nume2);
// }else{
//     console.log(nume2-nume1);
// }
// EXERCICI 14:
// Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una 
// quantitat (el que cal pagar) per teclat fent servir la instrucció prompt. 
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que 
// el cost total és de 30€ donat que el transport és gratis. 
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que 
// consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.  
// let quanti= parseInt(prompt("Introdueix una quantitat: "));
// if ( quanti >= 30){
//     console.log("Els envios son gratis");
// }else{
//     final= (quanti+4.95);
//     console.log("El preu final serà: "+ final);
// }

// EXERICCI 15:
// Escriu un programa, que donat una lletra que representa un dia de la setmana (l - 
// dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o 
// festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch. 

// let lletra = prompt("Introdueix una lletra: ");
// if ( lletra === "m","x","j","d","e","r","t"){
//     console.log("Dia laborable");
// }else{
//     console.log("Dia festiu");
// }

// SWISCH:
// EXERCICI 16:
// Fent servir la instrucció switch escriu un programa que donat amb prompt un número 
// de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
// Demanem el número de mes i el passem a número enter amb parseInt

// let mes = parseInt(prompt("Introdueix un número de mes (del 1 al 12):"));

// switch (mes) {
//     case 1:
//         console.log("Gener");
//         break;
//     case 2:
//         console.log("Febrer");
//         break;
//     case 3:
//         console.log("Març");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Maig");
//         break;
//     case 6:
//         console.log("Juny");
//         break;
//     case 7:
//         console.log("Juliol");
//         break;
//     case 8:
//         console.log("Agost");
//         break;
//     case 9:
//         console.log("Setembre");
//         break;
//     case 10:
//         console.log("Octubre");
//         break;
//     case 11:
//         console.log("Novembre");
//         break;
//     case 12:
//         console.log("Desembre");
//         break;
//     default:
//         console.log("Error: Has d'introduir un número entre l'1 i el 12.");
//         break;
// }
// ---------------------------------------------------------------------------------------------
// EXERCICI 17:
// 15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 
// 2. Quin d’aquests sabors vol: 

// 1. Vainilla o Xocolata. No cal afegir res 
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. 

// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor. 
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error 
// dades mal introduïdes”. 
// Si totes les dades són correctes, escriurà el preu final. 

// let recipient = prompt("Vols un conus (c) o una terrina (t)?");
// let sabor = prompt("Quin sabor vols? (Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Ametlles)");

// let preuBase = 0;
// let extra = 0;
// let dadesCorrectes = true;

// // 1. Comprovem el recipient amb if / else
// if (recipient === "c") {
//     preuBase = 3.45;
// } else if (recipient === "t") {
//     preuBase = 3.95;
// } else {
//     dadesCorrectes = false;
// }

// // Passem a minúscules per evitar problemes si l'usuari ho escriu amb majúscules
// let saborMinus = sabor.toLowerCase();

// // 2. Comprovem el sabor amb la instrucció switch
// switch (saborMinus) {
//     case "vainilla":
//     case "xocolata":
//         extra = 0;
//         break;
        
//     case "turró":
//     case "turro":
//     case "menta":
//     case "oreo":
//         extra = 0.5;
//         break;
        
//     case "crema":
//     case "gerds":
//     case "ametlles":
//         extra = 1;
//         break;
        
//     default:
//         // Si no coincideix amb cap dels casos anteriors, hi ha un error
//         dadesCorrectes = false;
//         break;
// }

// // 3. Mostrem el resultat o l'error
// if (dadesCorrectes === false) {
//     console.log("Error dades mal introduïdes");
// } else {
//     let preuFinal = preuBase + extra;
//     console.log("El preu final del gelat és: " + preuFinal + " €");
// }
// ------------------------------------------------------------------------------------

// EXERCICI EXAMEN:
// Escriu un programa que, donat un número entre 1 i 7, escrigui a la consola el dia de la setmana corresponent (1 = dilluns, 2 = dimarts, etc.). Utilitza switch.

// let num= parceInt(prompt("Introdueix un valor: "));
// let num = parseInt(prompt("Introdueix un valor: "))
// switch(num){
//     case 1:
//         console.log("dilluns");
//         break;
//     case 2:
//         console.log("dimarts");
//         break;
//     case 3:
//         console.log("dimecres");
//         break;
//     case 4:
//         console.log("Dijous");
//         break;
//     case 5:
//         console.log("Divendres");
//         break;
//     case 6:
//         console.log("Dissabte");
//         break;
//     case 7:
//         console.log("diumenge");
//         break;
//     default:
//         console.log("has introduit un nobre fora de rang");
//         break;
// }

// EXERCICI EXAMEN IF ELSE:
// Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge "El número és positiu" 
// si el número és més gran que zero, "El número és negatiu" si és més petit que zero, o "El número és zero" 
// si és igual a zero. Utilitza if-else.

// let num = parseInt(prompt("Introdueix un valor: "))
// if ( num>0){
//     console.log("El valor és possitiu")
// }else if(num===0){
//     console.log("El valor és 0")
// }else{
//     console.log("El valor és negatiu")
// }






// FOR: 

// EXERCICI 18:
// Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.
// for (let i = 0; i < 10; i++) {
//     console.log("Estem fent bucles");
// }

// EXERCICI 19:
// Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els 
// nombres del 5 al 20. 
// for (let i=5; i<20; i++){
//     console.log(i)
// }

// EXERCICI 20:
// Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els 
// nombres entre 1 i N. 

// let num = parseInt(prompt("Introdueix un número N:"));
// let suma = 0;

// for (let i = 1; i <= num; i++) {
//     suma = suma + i; 
// }
// console.log("La suma de tots els números del 1 fins al " + num + " és: " + suma);

// EXERCICI 21:
// Escriu un programa que, donat un nombre N, escrigui a la consola el factorial 
// d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.  




// EXERCICI D'EXAMEN:

// // Escriu un programa que demani a l'usuari un número N i mostri a la consola tots els números de l'1 fins a N. 
// // Pots fer-ho utilitzant tant un bucle for com un bucle while.

// let N= parseInt(prompt("Introdueix un valor: "));
// let i=0;
// for(;i<N; i++){
//     console.log(i);
// }


// FALTEN PER FER

// -----------------------------------------------------------------------

// EXERCICIS AMB while:

// Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.  

// let i =0
// while(i<10){
//     console.log( "Estem fent bucles");
//     i++   
// }

// EXERCICI 22:
// Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els 
// nombres del 5 al 20. 

// let i =5
// while(i<=20){
//     console.log(i++)
// }

// EXERCICI 17.4:
// Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número 
// N donat. 


// ---------------------------------------
// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.  

// for(i=0 ;i<10; i++){
//     console.log("Estem fent bucles");
// }


// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els 
// nombres del 5 al 20. 

// for(i=5; i<=20;i++){
//     console.log(i);
// }

// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els 
// nombres entre 1 i N. 
// let num= parseInt(prompt("Introdueic un valot: "));
// let suma=0
// for (i = 1; i <= num; i++) {
//     suma = suma + i; 
// }

// 16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial 
// d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N.  





//  Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.  
// let i=0
// while(i<10){
//     console.log("estem fent bubles");
//     i++
// }

// Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els 
// nombres del 5 al 20. 
// let i=5
// while(i<20){
//     console.log(i);
//     i++
// }

// Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a 
// la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa 
// si N < 1 

// --------------------------------------------------------------
// DO-WHILE:

// EXERCICI 1:
// Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10 
// cops el text “Estem fent bucles”. 
// let i=0
// do{
//     console.log("estem fent bucles");
//     i++;
// }while(i<10);

// EXERCICI 2: 
// Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els 
// nombres del 5 al 20. 
// let i=5
// do{
//     console.log(i);
//     i++;
// }while(i<=20);

// let num= parseInt(prompt("Intro: "));
// for(i=1;i<num;i++){
//     console.log(i)
// }

// let num = parseInt(prompt("Intro: "));
// let i=1;
// while(i<num){
//     console.log(i);
//     i++
// }
// Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) 
// calculi la suma de tots els números entre N i M (ambdós inclosos). 

// let m = parseInt(prompt("Introdueix un número N:"));
// let n= parseInt(prompt("introdueix un segon valor: "));
// let suma = 0;
// for(i=n; i<=m; i++){
//     suma= suma+i  
// } 
// console.log(suma);

// let n= parseInt(prompt("Introdueix un valot: "));
// for(i=0; i<=n;i++){
//     console.log(i);
// }

// let n= parseInt(prompt("Intro valor: "));
// let i=0
// while(i<=n){
//     console.log(i)
//     i++
// }

let num = parseInt(prompt("introdueix un valor: "));
for( i=0; i<=num; i++){
    console.log(i);
}
