let precioUnidad = "49.99";
let unidades = 10;

precioUnidad = parseFloat(precioUnidad);
unidades = parseInt(unidades)

if (isNaN(precioUnidad) || isNaN(unidades)){
    console.log("No son numeros, por favor ingresa numeros para continuar")
    // En este punto volveríamos al inicio para ingresar de nuevo los valores pero aqui no lo hago porque es un ejercicio y no hay formulario para ingresar valores.
}

const precioTotal = precioUnidad * unidades;
const descuento = 0.2;
const descuentoCantidad = precioTotal * descuento;
const precioConDescuento = precioTotal - descuentoCantidad;

console.log(precioConDescuento.toFixed(2));

//Ahora vamos a ponerlo en modo exponencial para comprobar que sé usar este método

console.log(precioConDescuento.toExponential())
