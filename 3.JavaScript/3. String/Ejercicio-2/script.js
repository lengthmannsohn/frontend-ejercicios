const nombreProducto = " Pan ";
const descripcionProducto = "Pan de leche debidamente horneado durante media hora para dar una textura exquisita y un sabor único";
const codigoUnicoProducto = "35";
const nombreProductoFinal = nombreProducto.trim();
const codigoUnicoProductoFinal = codigoUnicoProducto.padStart(4, "0");
const longitudCorrecta = descripcionProducto.normalize("NFC").length <= 150;
console.log(nombreProductoFinal);
console.log(codigoUnicoProductoFinal)
if (longitudCorrecta) {
    console.log("La longitud de la descripcion es correcta")
}
else {
    console.log("La longitud de la descripcion es demasiado larga")
};