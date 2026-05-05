// Crear objeto usuario con propiedades booleanas
const usuario = {
  isLoggedIn: true, // Indica si está logado o no
  hasPremium: false, // Indica si tiene la suscripción premium
  canPost: true // Indica si tiene permiso para postear
};

function mostrarEstadoUsuario(){ // Funcion que muestra si está logado o no lo está
  if (usuario.isLoggedIn){
    console.log("Si está logado")
  } 
  else {
    console.log("No está logado")
  }
}

mostrarEstadoUsuario(); // Llamada a la función mostrarEstadoUsuario()

const tareasCompletadas = [true, false, true, false]; // Creamos el array informando que tareas están completadas o no, no describe las tareas porque es un ejercicio, no es para producción real

tareasCompletadas.forEach(element => {
  console.log(`Tarea: ${element ? "completada" : "pendiente"}`)
}); // Bucle que recorre tarea por tarea e informa si está completada o pendiente

const producto = {
  isAvailable: true, // Indica si el producto está disponible
  isOnSale: true, // Indica si el producto está en venta
  isNew: true, // Indica si el producto es nuevo
  ok: true // Es una descripción muy vaga e inconcisa lo cual si lo ve otro programador o yo mismo en unos meses no voy a tener claro a que se refiere exactamente el ok
}

if (producto.isAvailable && producto.isNew){
  console.log("Producto destacado")
} // Si el producto está disponible y tambien es nuevo se informa de que es un producto destacado

let isModalVisible = true; // Declaramos la variable isModalVisible

function toggleModal() {
  isModalVisible = !isModalVisible;
} //Función que cambia el estado de true a false y viceversa

isModalVisible = "true"; // "true" es un string → siempre es truthy pero NO es igual a true

isModalVisible = true; // Corregimos el error de variable errónea utilizando buenas prácticas de nomenclatura y tipo de dato.

toggleModal(); // Llamamos a la función para darle uso (declarar una funcion sin darle uso nunca en principio no sirve de nada)