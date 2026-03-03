// Declaramos las tres variables solicitadas, al menos una con const y una con let
const falso = false;
let booleanoString = true;
let falsy = "";

// Imprimimos en consola el tipo de cada una de las tres variables
console.log(typeof(falso));
console.log(typeof(booleanoString));
console.log(typeof(falsy));

// Cometemos adrede el error de asignar un valor de cadena al meter la palabra false entre comillas
booleanoString = "false";

// Imprimimos en consola el tipo de la variable booleanoString para comprobar que se ha convertido a una cadena en lugar de seguir siendo booleano
console.log(typeof(booleanoString));

// Comprobamos que un valor falsy si lo comparamos con == es igual a false y lo imprimimos en la web, si utilizaramos === entonces la salida sería false porque no son exactamente lo mismo
if (falso == falsy){
    let salida = true;
    document.getElementById("salida").innerHTML += salida;
}
else {
    let salida = false;
    document.getElementById("salida").innerHTML += salida;
}