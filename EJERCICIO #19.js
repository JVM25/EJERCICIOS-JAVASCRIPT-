let letra = prompt("Ingresar una sola letra");
let vocal_1 = "a";
let vocal_2 = "e";
let vocal_3 = "i";
let vocal_4 = "o";
let vocal_5 = "u";
console.log("Letra: " + letra);
if(letra.length > 1) {
    console.log("No se puede procesar el dato");
} else if (letra == vocal_1 || letra == vocal_2 || letra == vocal_3 || letra == vocal_4 || letra == vocal_5) {
    console.log("Es una vocal");
}