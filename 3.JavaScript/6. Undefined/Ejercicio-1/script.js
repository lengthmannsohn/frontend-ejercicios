// Creamos la variable var1 porque es el nombre que pide el ejercicio
let var1;
// Imprimimos el valor de var1
console.log(var1);
// Imprimimos el tipo de dato de var1
console.log(typeof(var1));

// Creamos el objeto persona con las propiedades nombre y edad
const persona = {
    nombre: "Roberto",
    edad: 27,
}

// Accedemos a una propiedad que no existe generando el valor Undefined
console.log(persona.genero);

// Creamos la funcion mostrarMensaje tal como pide el ejercicio
function mostrarMensaje() {
    // Imprimimos un mensaje para comprobar en la ejecucion del programa que la funcion se ejecuta correctamente
    console.log("Mostrando mensaje")
}

// Guardamos el retorno de la funcion en una variable y como no hay retorno devuelve Undefined
const resulFuncion = mostrarMensaje();

// Imprimimos el retorno de la funcion lo cual imprime Undefined
console.log(resulFuncion);

// Creamos dos variables de ejemplo con los valores undefined y null tal como pide el ejercicio
const ejemplo1 = undefined;
const ejemplo2 = null;

// Comparamos con el operador ==
if (ejemplo1 == ejemplo2) {
    console.log("Con el operador == son datos iguales")
}
else {console.log("Con el operador == no son datos iguales")}

// Comparamos con el operador ===
if (ejemplo1 === ejemplo2) {
    console.log("Con el operador === son datos iguales")
}
else {console.log("Con el operador === no son datos iguales")}

// == compara solo el valor haciendo conversiones automáticas
// === compara valor y tipo de dato sin conversiones

// Accedemos a una variable que no existe y manejamos el error con try catch
try {
    console.log(variableNoExiste)
}
catch {
    console.log("La variable no existe")
}