function procesarTexto(texto) {
    if (texto.includes("JavaScript")) {
        console.log("Incluye JavaScript")
    }
    else {console.log("No incluye JavaScript")};
};

const texto = `Curso de JavaScript Intermedio. 
Aprender JavaScript es muy divertido y la programación te ayuda a mejorar tus habilidades. 
La programación tambien fomenta la creatividad`;

nuevoTexto = procesarTexto(texto);
console.log(nuevoTexto);