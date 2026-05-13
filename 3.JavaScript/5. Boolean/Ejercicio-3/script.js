let isReady;

// Las implicaciones de usar valores no inicializados o mal tipados son principalmente fallos en la aplicación entre otras pero esa es la principal

console.log(`Valor de isReady: ${isReady}`);
console.log(`Tipo de isReady: ${typeof isReady}`);

let isReadySafe = false;

console.log(`Valor de isReadySafe: ${isReadySafe}`);
console.log(`Tipo de isReadySafe: ${typeof isReadySafe}`);

if (isReady){
    console.log("Está preparado")
}
else {
    console.log("No está preparado")
} // En este bloque se ejecuta el else porque aunque el valor no es false pero es falsy. Piensa que el condicional if igualmente
// solo pregunta si isReady es true y en este caso no lo es, por lo que es normal que se ejecute el else

let hasPermission;

console.log(`Comprueba si hasPermission es verdadero o falso: ${hasPermission && true}`)

hasPermission = false;

console.log(`Vuelve a comprobar si hasPermission es verdadero o falso: ${hasPermission && true}`)

/* El operador logico && primero solo comprueba la primera variable, si ésta es verdadera, comprueba la segunda variable, si ésta
 es falsa, devuelve falso, si no, devuelve el valor de la primera variable sin pasar a la segunda */

let var1;

let var2 = false;

console.log (`Comprobacion con ==: ${var1 == var2}`);

console.log (`Comprobacion con ===: ${var1 === var2}`);

isSubmitted = false;

if (isSubmitted === false) {
    console.log ("No está logueado");
}
else {console.log("Está logueado")}

isVisible = "false";

function verSiVisible (isVisible){
    if (isVisible === false){
        return "No es visible"
    }
    else return "Si es visible"
    }

console.log(verSiVisible(isVisible));

isVisible = false;

console.log(verSiVisible(isVisible));

/* El motivo del cambio es porque una cadena con contenido es truthy y por eso indica "Si es visible" cuando isVisible="false"
sin embargo cuando isVisible = false entonces al ser un booleano false real ahi indica "No es visible" */

let conchaSuMadre = true;
let suPuMadre = false;
let meCagoEnT = true;

console.log(typeof(conchaSuMadre));
console.log(typeof(suPuMadre));
console.log(typeof(meCagoEnT));
