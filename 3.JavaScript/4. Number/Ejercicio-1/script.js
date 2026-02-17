const precioUnidad = 5;
const unidades = 10;
const precioTotal = precioUnidad * unidades;
const descuento = 0.2;
const descuentoCantidad = precioTotal * descuento;
const precioConDescuento = precioTotal - descuentoCantidad;

console.log(precioConDescuento);


/*Cálculo: Correcto — el precio total (precioUnidad * unidades) y la aplicación del descuento son correctos; el resultado impreso es el esperado.
Notación científica: No implementada — no se utiliza toExponential ni se muestra cómo representar números grandes en notación científica.
Manejo de errores y explicación: Parcial — el alumno menciona convertir strings a números pero no muestra ni justifica el método (ej. Number(), parseFloat(), validaciones) ni implementa control de entradas o manejo de errores explícito.
*/