let precioUnitario;
let cantidad;

function pedirNumeroPositivo(mensaje) {
    let valor;

    do {
        valor = Number(prompt(mensaje));

        if (Number.isNaN(valor)) {
            alert("Debes introducir un número válido.");
        } else if (valor <= 0) {
            alert("El número debe ser mayor que cero.");
        }

    } while (Number.isNaN(valor) || valor <= 0);

    return valor;
}

// Pedimos datos validados
precioUnitario = pedirNumeroPositivo("Ingresa el precio unitario:");
cantidad = pedirNumeroPositivo("Ingresa la cantidad:");

// Cálculos
const DESCUENTO = 0.15;
const precioCompra = precioUnitario * cantidad;
const precioConDescuento = precioCompra * (1 - DESCUENTO);

// Mostrar resultados
console.log(`Precio sin descuento: ${precioCompra.toFixed(2)} €`);
console.log(`Descuento aplicado: ${DESCUENTO * 100}%`);
console.log(`Precio final con descuento: ${precioConDescuento.toFixed(2)} €`);