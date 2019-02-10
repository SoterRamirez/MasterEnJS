'use strict'
//Si quiero que mi codigo se adecue más a los estandares de JS poner use strict, haciendo  buenas practicas
//Variable
//Contenedor de información.

var pais = "Mexico";
var continente = "Latinoamerica";
var antiguedad = "2099";
var pais_y_continente = pais+' '+ continente;
let prueba = "hola";
//ECMAScript 2015 introduce let .
//Antes de ES2015... JavaScript tenía solo dos tipos de alcance: alcance global y alcance de función.
//let proporciona variables de ámbito de bloque.  
//VAR
//Las variables declaradas var no tienen Ámbito de Bloque
//Fuente w3schools.com/js/js_let.asp

alert(prueba);
pais = "España";
continente = "Europa";
console.log(pais, continente, antiguedad);
alert(pais_y_continente);