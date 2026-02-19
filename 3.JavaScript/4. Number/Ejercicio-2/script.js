let precioUnitario;
let cantidad;

do {
    precioUnitario = Number(prompt("Ingresa el precio unitario (solo números positivos):"));
    cantidad = Number(prompt("Ingresa la cantidad (solo números positivos):"));

    if (Number.isNaN(precioUnitario) || Number.isNaN(cantidad)) {
        alert("Por favor, ingresa solo números válidos.");
    } else if (precioUnitario <= 0 || cantidad <= 0) {
        alert("Los números deben ser mayores que cero.");
    }
} while (
    Number.isNaN(precioUnitario) || Number.isNaN(cantidad) || 
    precioUnitario <= 0 || cantidad <= 0
);

console.log("OK");
