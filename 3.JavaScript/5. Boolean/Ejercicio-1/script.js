// Booleanos en JavaScript

// Un booleano solo puede tener dos valores:
let verdadero = true;
let falso = false;

console.log(verdadero); // true
console.log(falso);     // false


// 1️⃣ Comparaciones (devuelven booleanos)
let edad = 20;

console.log(edad >= 18); // true
console.log(edad < 18);  // false


// 2️⃣ Operadores lógicos
let tieneDNI = true;
let esMayor = edad >= 18;

// AND (&&) → ambas deben ser true
console.log(esMayor && tieneDNI); // true

// OR (||) → al menos una debe ser true
console.log(esMayor || false); // true

// NOT (!) → invierte el valor
console.log(!esMayor); // false


// 3️⃣ Valores "truthy" y "falsy"

// Falsy (se convierten en false):
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Truthy (la mayoría de valores)
console.log(Boolean(1));        // true
console.log(Boolean("Hola"));   // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true