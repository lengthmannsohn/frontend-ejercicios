//Declaramos las variables necesarias donde ya se calcula directamente el precio con iva
const precioProducto = pedirNumeroPositivo("Introduzca el precio del producto:");
const cantidad = pedirNumeroPositivo("Introduzca la cantidad del producto");
const subtotal = precioProducto * cantidad;
const precioConIVA = subtotal * 1.21;
const aplicaDescuento = superaUmbral(precioConIVA);
let precioConDescuento = precioConIVA;

//Declaramos las funciones necesarias
function pedirNumeroPositivo(mensaje){
    let input = prompt(mensaje);
    while (!validarNumero(input)) {
        alert("No es un número válido");
        input = prompt("Introduzca un numero válido")
    }
    return Number(input);
}

function validarNumero (numero) {
    if (numero === null) return false;
    numero = Number(numero);
    return Number.isFinite(numero) && numero > 0;
}

function superaUmbral(precio){
    return precio > 100
}

//Aplicamos el descuento en caso de superar el umbral
if (aplicaDescuento) {
    precioConDescuento -=10;
}

//Imprimimos el subtotal, el precio con iva y el precio con descuento en caso de haberlo
console.log(`Subtotal: ${subtotal.toFixed(2)}€
Precio con IVA: ${precioConIVA.toFixed(2)}€
Se aplica descuento: ${aplicaDescuento ? 'Si' : 'No'}.
${aplicaDescuento ? `Precio con descuento: ${precioConDescuento.toFixed(2)}€` : ''}`);


/*Simplemente ir haciendo los calculos paso a paso y en el orden correcto usando funciones para pedir los datos necesarios
 al usuario, para validar esos datos introducidos y para validar si supera el umbral de precio para aplicar el descuento*/

// Error detectado pero no corregido porque paso de hacerlo para este ejercicio: Uso de numeros mágicos
