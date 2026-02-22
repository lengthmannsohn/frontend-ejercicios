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
    numero = Number(numero.trim());
    if (Number.isFinite(numero) && numero > 0)
        return true;
    else return false;
}

let precioProducto = pedirNumeroPositivo("Introduzca el precio del producto:");
let cantidad = pedirNumeroPositivo("Introduzca la cantidad del producto");


/*Tu profesor te propone el siguiente reto: "Desarrolla una calculadora de impuestos para una tienda en línea. El sistema 
debe calcular el total a pagar por un cliente después de aplicar un descuento si el total supera un determinado umbral. 
Además, debes asegurarte de seguir buenas prácticas al trabajar con números en JavaScript, como evitar números mágicos, 
usar constantes descriptivas y validar entradas."

Para resolver este ejercicio, deberás:

Crear un sistema que reciba el precio de un producto y la cantidad comprada.
Calcular el subtotal.
Aplicar un IVA del 21% sobre el subtotal.
Verificar si el total con IVA supera un umbral específico (por ejemplo, 100€).
Si supera ese umbral, aplicar un descuento (por ejemplo, 10€).
Mostrar el total a pagar con dos decimales.
Asegurarte de usar buenas prácticas como evitar valores "mágicos" y añadir comentarios explicativos en el código.
Explica cómo implementaría estos pasos y proporciona el código necesario para llevar a cabo esta tarea.*/

