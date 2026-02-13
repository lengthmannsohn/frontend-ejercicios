const texto = `Curso de JavaScript Intermedio. 
Aprender JavaScript es muy divertido y la programación te ayuda a mejorar tus habilidades. 
Además quiero recalcar que la programación tambien fomenta la creativida.`;

function procesarTexto(texto) {
    if (texto.includes("JavaScript")) {
        console.log("Incluye JavaScript")
    }
    else {console.log("No incluye JavaScript")}

    const posicionNivel = texto.indexOf(" ", 9);
    const finNivel = texto.indexOf(".", posicionNivel + 1);

    const lenguaje = texto.slice(9,posicionNivel);
    const nivel = texto.slice(posicionNivel + 1, finNivel);

    const nuevoLenguaje = texto.replace(lenguaje, "TypeScript");
    const nuevoTexto = nuevoLenguaje.replace(/la programación/g, "el desarrollo");

return nuevoTexto
};

const nuevoTexto = procesarTexto(texto);
console.log(nuevoTexto);
