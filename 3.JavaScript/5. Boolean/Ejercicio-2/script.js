// Crear objeto usuario con propiedades booleanas
const usuario = {
  isLoggedIn: true,
  hasPremium: false,
  canPost: true
};

function mostrarEstadoUsuario(){
  if (usuario.isLoggedIn){
    console.log("Si está logado")
  } 
  else {
    console.log("No está logado")
  }
}

const tareasCompletadas = [true, false, true, false];

tareasCompletadas.forEach(element => {
  console.log(`Tarea: ${element ? "completada" : "pendiente"}`)
});

