const precioUnidad = 5;
const unidades = 10;
const precioTotal = precioUnidad * unidades;
const descuento = 0.2;
const descuentoCantidad = precioTotal * descuento;
const precioConDescuento = precioTotal - descuentoCantidad;

console.log(precioConDescuento);

