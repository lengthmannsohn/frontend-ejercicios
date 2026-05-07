let isReady;

console.log(isReady);
console.log(typeof isReady);

let isReadySafe = false;

console.log(isReadySafe);
console.log(typeof isReadySafe);

if (isReady){
    console.log("Está preparado")
}
else {
    console.log("No está preparado")
} // En este bloque se ejecuta el else porque aunque el valor no es false pero es falsy. Piensa que el condicional if igualmente
// solo pregunta si isReady es true y en este caso no lo es, por lo que es normal que se ejecute el else

let hasPermission;

