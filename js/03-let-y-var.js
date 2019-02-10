'use strict'
//Pruebas con Let y Var

//Prueba con Var
var numero = 40;
console.log(numero);//Valor 40
if (true) {
    var numero = 50;
    console.log(numero);//valor 50
}
console.log(numero); //Valor 50

//Prueba con Let
var texto = "CursoMasterJS";
console.log(texto); //valor
if (true) {
    let texto = "Curso de JS";
    console.log(texto);//valor
}
console.log(texto);//valor